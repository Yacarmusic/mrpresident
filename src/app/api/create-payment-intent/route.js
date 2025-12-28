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
                // 1. Try finding a Promotion Code (Customer facing code)
                const promotions = await stripe.promotionCodes.list({
                    code: promoCode,
                    active: true,
                    limit: 1,
                });

                let coupon = null;

                if (promotions.data.length > 0) {
                    coupon = promotions.data[0].coupon;
                } else {
                    // 2. Fallback: Try finding a direct Coupon ID (or Name if valid ID)
                    try {
                        coupon = await stripe.coupons.retrieve(promoCode);
                        if (!coupon.valid) coupon = null;
                    } catch (e) {
                        // Not a valid coupon ID either
                    }
                }

                if (coupon) {
                    couponId = coupon.id;
                    if (coupon.percent_off) {
                        finalAmount = Math.round(amount * (100 - coupon.percent_off) / 100);
                    } else if (coupon.amount_off) {
                        finalAmount = Math.max(0, amount - (coupon.amount_off / 100));
                    }
                }
                // Legacy hardcoded check
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
