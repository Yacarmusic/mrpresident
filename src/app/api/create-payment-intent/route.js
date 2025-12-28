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

        // Simple MVP Coupon Logic (Server-side validation)
        if (promoCode && promoCode.toUpperCase() === "PRESIDENTE") {
            finalAmount = Math.round(amount * 0.8); // 20% Discount
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
