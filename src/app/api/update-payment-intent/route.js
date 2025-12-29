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
        let couponFound = false;

        // Check promo code
        if (promoCode) {
            try {
                // Try finding a Promotion Code
                let promotions = await stripe.promotionCodes.list({
                    code: promoCode,
                    active: true,
                    limit: 1,
                    expand: ['data.coupon'],
                });

                // Try uppercase if not found
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
                    let rawCoupon = promoData.coupon || promoData.promotion?.coupon;

                    // If coupon is a string (just the ID), fetch the full coupon
                    if (typeof rawCoupon === 'string') {
                        coupon = await stripe.coupons.retrieve(rawCoupon);
                    } else if (rawCoupon && typeof rawCoupon === 'object') {
                        coupon = rawCoupon;
                    }
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
                    couponFound = true;
                    if (coupon.percent_off) {
                        finalAmount = Math.round(amount * (100 - coupon.percent_off) / 100);
                    } else if (coupon.amount_off) {
                        // amount_off is in cents in Stripe!
                        finalAmount = Math.max(1, amount - (coupon.amount_off / 100));
                    }
                }
            } catch (err) {
                console.error("Coupon lookup failed:", err.message);
            }
        }

        // Update existing PaymentIntent
        await stripe.paymentIntents.update(paymentIntentId, {
            amount: finalAmount * 100,
            metadata: {
                product: 'MR_PRESIDENT_COURSE',
                coupon: promoCode ? promoCode.toUpperCase() : 'NONE'
            },
            description: 'Mr. President - Curso de Networking'
        });

        return Response.json({
            success: true,
            amount: finalAmount,
            couponFound
        });
    } catch (error) {
        console.error("Update Error:", error);
        return Response.json(
            { error: `Error updating payment: ${error.message}` },
            { status: 500 }
        );
    }
}
