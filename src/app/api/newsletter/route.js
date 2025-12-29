export async function POST(request) {
    const MOOSEND_API_KEY = process.env.MOOSEND_API_KEY;
    const MOOSEND_LIST_ID = process.env.MOOSEND_LIST_ID;

    if (!MOOSEND_API_KEY || !MOOSEND_LIST_ID) {
        return Response.json(
            { error: "Moosend configuration is missing in environment variables." },
            { status: 500 }
        );
    }

    try {
        const { email, name } = await request.json();

        if (!email) {
            return Response.json(
                { error: "Email is required." },
                { status: 400 }
            );
        }

        // Moosend API v3 - Add subscriber
        // https://api.moosend.com/v3/subscribers/{MailingListID}/subscribe.json?apikey=XXX
        const response = await fetch(
            `https://api.moosend.com/v3/subscribers/${MOOSEND_LIST_ID}/subscribe.json?apikey=${MOOSEND_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    Name: name || '',
                    Email: email,
                    // HasExternalDoubleOptIn: false means Moosend will send confirmation email
                    HasExternalDoubleOptIn: false,
                    CustomFields: [
                        `Source=MrPresidentLanding`
                    ]
                }),
            }
        );

        const data = await response.json();

        if (response.ok && data.Code === 0) {
            return Response.json({
                success: true,
                message: "Suscripción completada. Revisa tu correo para confirmar."
            });
        } else {
            console.error("Moosend error:", data);
            return Response.json({
                success: false,
                error: data.Error || "Error al suscribirse."
            }, { status: 400 });
        }
    } catch (error) {
        console.error("Newsletter error:", error);
        return Response.json(
            { error: `Error: ${error.message}` },
            { status: 500 }
        );
    }
}
