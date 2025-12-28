const stripe = process.env.STRIPE_SECRET_KEY
    ? require("stripe")(process.env.STRIPE_SECRET_KEY)
    : null;

export async function POST(request) {
    if (!stripe) {
        return Response.json(
            { error: "Stripe Secret Key is missing in environment variables." },
            { status: 500 }
        );
    }

    try {
        const { amount, promoCode } = await request.json();


        let finalAmount = amount;
        let couponId = null;

        // "PRESIDENTE" hardcoded check remains as legacy/fallback if desired, 
        // but now we prioritize checking Stripe for REAL promo codes.
        if (promoCode) {
            try {
                // Search for active promo codes matching the user's code
                const promotions = await stripe.promotionCodes.list({
                    code: promoCode,
                    active: true,
                    limit: 1,
                });

                if (promotions.data.length > 0) {
                    const promo = promotions.data[0];
                    const coupon = promo.coupon;
                    couponId = coupon.id; // Save specific object if needed

                    if (coupon.percent_off) {
                        finalAmount = Math.round(amount * (100 - coupon.percent_off) / 100);
                    } else if (coupon.amount_off) {
                        // amount_off is in cents
                        finalAmount = Math.max(0, amount - (coupon.amount_off / 100));
                    }
                }
                // Legacy hardcoded check (optional, keeping it just in case user relies on it)
                else if (promoCode.toUpperCase() === "PRESIDENTE") {
                    finalAmount = Math.round(amount * 0.8);
                }
            } catch (err) {
                console.warn("Coupon lookup failed", err);
            }
        }

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: finalAmount * 100, // Stripe expects cents
            currency: "eur",
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                coupon: promoCode ? promoCode.toUpperCase() : 'NONE'
            }
        });

        return Response.json({
            clientSecret: paymentIntent.client_secret,
            amount: finalAmount
        });
    } catch (error) {
        console.error("Internal Error:", error);
        return Response.json(
            { error: `Internal Server Error: ${error.message}` },
            { status: 500 }
        );
    }
}
