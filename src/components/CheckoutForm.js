"use client";
import React, { useState } from "react";
import { PaymentElement, LinkAuthenticationElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Loader2 } from "lucide-react";

export default function CheckoutForm({ price }) {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        if (!name.trim()) {
            setMessage("Por favor, introduce tu nombre completo.");
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/success`,
                receipt_email: email,
                payment_method_data: {
                    billing_details: {
                        name: name,
                        email: email,
                    }
                }
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
            {/* Name Input */}
            <div>
                <label htmlFor="name-input" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#a0a0a0'
                }}>
                    Nombre completo *
                </label>
                <input
                    id="name-input"
                    type="text"
                    placeholder="Tu nombre y apellidos"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid #444',
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                    }}
                />
            </div>

            <LinkAuthenticationElement
                id="link-authentication-element"
                onChange={(e) => setEmail(e.value.email)}
            />
            <PaymentElement
                id="payment-element"
                options={{
                    layout: "tabs",
                    fields: {
                        billingDetails: {
                            name: 'never', // We collect it ourselves above
                            email: 'never', // Handled by LinkAuthenticationElement
                            address: {
                                country: 'auto',
                                postalCode: 'auto',
                            }
                        }
                    }
                }}
            />

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
