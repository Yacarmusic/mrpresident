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
                // 1. Try finding a Promotion Code - use expand to get full coupon data
                let promotions = await stripe.promotionCodes.list({
                    code: promoCode,
                    active: true,
                    limit: 1,
                    expand: ['data.coupon'],
                });

                // If no match, try uppercase version
                if (promotions.data.length === 0) {
                    promotions = await stripe.promotionCodes.list({
                        code: promoCode.toUpperCase(),
                        active: true,
                        limit: 1,
                        expand: ['data.coupon'],
                    });
                }

                let coupon = null;

                if (promotions.data.length > 0) {
                    const promoData = promotions.data[0];
                    // Stripe API change Sept 2025: coupon may be nested under 'promotion'
                    coupon = promoData.coupon || promoData.promotion?.coupon;
                } else {
                    // 2. Fallback: Try finding a direct Coupon ID
                    try {
                        coupon = await stripe.coupons.retrieve(promoCode);
                        if (!coupon.valid) coupon = null;
                    } catch (e) {
                        // Try uppercase coupon ID
                        try {
                            coupon = await stripe.coupons.retrieve(promoCode.toUpperCase());
                            if (!coupon.valid) coupon = null;
                        } catch (e2) {
                            // Not a valid coupon ID
                        }
                    }
                }

                if (coupon) {
                    couponId = coupon.id;
                    if (coupon.percent_off) {
                        finalAmount = Math.round(amount * (100 - coupon.percent_off) / 100);
                    } else if (coupon.amount_off) {
                        // amount_off is in cents in Stripe!
                        finalAmount = Math.max(1, amount - (coupon.amount_off / 100));
                    }
                }
                // Legacy hardcoded check
                else if (promoCode.toUpperCase() === "PRESIDENTE") {
                    finalAmount = Math.round(amount * 0.8);
                }
            } catch (err) {
                console.error("Coupon lookup failed:", err.message);
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
                product: 'MR_PRESIDENT_COURSE',
                coupon: promoCode ? promoCode.toUpperCase() : 'NONE'
            },
            description: 'Mr. President - Curso de Networking'
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
