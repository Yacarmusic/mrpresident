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
        const { paymentIntentId, amount, promoCode } = await request.json();

        let finalAmount = amount;

        // Check promo code
        if (promoCode) {
            try {
                // Try finding a Promotion Code
                let promotions = await stripe.promotionCodes.list({
                    code: promoCode,
                    active: true,
                    limit: 1,
                });

                if (promotions.data.length === 0) {
                    promotions = await stripe.promotionCodes.list({
                        code: promoCode.toUpperCase(),
                        active: true,
                        limit: 1,
                    });
                }

                let coupon = null;

                if (promotions.data.length > 0) {
                    coupon = promotions.data[0].coupon;
                } else {
                    // Fallback: Try direct Coupon ID
                    try {
                        coupon = await stripe.coupons.retrieve(promoCode);
                        if (!coupon.valid) coupon = null;
                    } catch (e) {
                        try {
                            coupon = await stripe.coupons.retrieve(promoCode.toUpperCase());
                            if (!coupon.valid) coupon = null;
                        } catch (e2) { }
                    }
                }

                if (coupon) {
                    if (coupon.percent_off) {
                        finalAmount = Math.round(amount * (100 - coupon.percent_off) / 100);
                    } else if (coupon.amount_off) {
                        finalAmount = Math.max(1, amount - (coupon.amount_off / 100));
                    }
                }
            } catch (err) {
                console.error("Coupon lookup failed:", err.message);
            }
        }

        // Update existing PaymentIntent
        const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
            amount: finalAmount * 100,
            metadata: {
                coupon: promoCode ? promoCode.toUpperCase() : 'NONE'
            }
        });

        return Response.json({
            success: true,
            amount: finalAmount
        });
    } catch (error) {
        console.error("Update Error:", error);
        return Response.json(
            { error: `Error updating payment: ${error.message}` },
            { status: 500 }
        );
    }
}
