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
        let debugInfo = { searched: promoCode, mode: process.env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? 'LIVE' : 'TEST' };

        // Check promo code
        if (promoCode) {
            try {
                // Try finding a Promotion Code (exact match)
                let promotions = await stripe.promotionCodes.list({
                    code: promoCode,
                    active: true,
                    limit: 1,
                    expand: ['data.coupon'],
                });

                debugInfo.exactMatch = promotions.data.length;

                // Try uppercase
                if (promotions.data.length === 0) {
                    promotions = await stripe.promotionCodes.list({
                        code: promoCode.toUpperCase(),
                        active: true,
                        limit: 1,
                        expand: ['data.coupon'],
                    });
                    debugInfo.uppercaseMatch = promotions.data.length;
                }

                let coupon = null;

                if (promotions.data.length > 0) {
                    const promoData = promotions.data[0];
                    // Stripe API change Sept 2025: coupon is now nested under 'promotion' OR directly accessible
                    coupon = promoData.coupon || promoData.promotion?.coupon;
                    debugInfo.foundVia = 'promotionCode';
                    debugInfo.promoCodeId = promoData.id;
                    debugInfo.hasCouponDirect = !!promoData.coupon;
                    debugInfo.hasCouponNested = !!promoData.promotion?.coupon;
                    debugInfo.couponId = coupon?.id || 'undefined';
                    debugInfo.couponObject = coupon ? 'exists' : 'null';
                } else {
                    // Fallback: Try direct Coupon ID
                    try {
                        coupon = await stripe.coupons.retrieve(promoCode);
                        if (coupon.valid) {
                            debugInfo.foundVia = 'directCouponId';
                            debugInfo.couponId = coupon.id;
                        } else {
                            coupon = null;
                        }
                    } catch (e) {
                        try {
                            coupon = await stripe.coupons.retrieve(promoCode.toUpperCase());
                            if (coupon.valid) {
                                debugInfo.foundVia = 'directCouponIdUppercase';
                                debugInfo.couponId = coupon.id;
                            } else {
                                coupon = null;
                            }
                        } catch (e2) {
                            debugInfo.couponRetrieveError = e2.message;
                        }
                    }
                }

                if (coupon) {
                    couponFound = true;
                    debugInfo.percent_off = coupon.percent_off;
                    debugInfo.amount_off = coupon.amount_off;

                    if (coupon.percent_off) {
                        finalAmount = Math.round(amount * (100 - coupon.percent_off) / 100);
                    } else if (coupon.amount_off) {
                        // amount_off is in cents in Stripe!
                        finalAmount = Math.max(1, amount - (coupon.amount_off / 100));
                    }
                }
            } catch (err) {
                debugInfo.error = err.message;
            }
        }

        // Update existing PaymentIntent
        const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
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
            couponFound,
            debug: debugInfo
        });
    } catch (error) {
        console.error("Update Error:", error);
        return Response.json(
            { error: `Error updating payment: ${error.message}` },
            { status: 500 }
        );
    }
}

