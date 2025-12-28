"use client";
import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Loader2 } from "lucide-react";

export default function CheckoutForm({ price }) {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/success`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("Ocurrió un error inesperado.");
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <PaymentElement id="payment-element" options={{ layout: "tabs" }} />

            <button
                disabled={isLoading || !stripe || !elements}
                id="submit"
                className="btn-primary"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
            >
                {isLoading ? <Loader2 size={24} className="animate-spin" /> : `PAGAR ${price}€`}
            </button>

            {message && <div id="payment-message" style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem' }}>{message}</div>}
        </form>
    );
}
