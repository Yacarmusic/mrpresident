"use client";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { getPrice } from "@/utils/pricing";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Pricing() {
    const [clientSecret, setClientSecret] = useState("");
    const [price, setPrice] = useState(360);
    const [originalPrice, setOriginalPrice] = useState(360);
    const [coupon, setCoupon] = useState("");
    const [couponMessage, setCouponMessage] = useState("");

    // Initial Load
    useEffect(() => {
        const currentPrice = getPrice();
        setPrice(currentPrice);
        setOriginalPrice(currentPrice);
        createPaymentIntent(currentPrice, "");
    }, []);

    const createPaymentIntent = (amount, code) => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: originalPrice || amount, promoCode: code }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
                if (data.amount) setPrice(data.amount);

                if (code) {
                    if (data.amount < (originalPrice || amount)) {
                        setCouponMessage("¡Cupón aplicado correctamente!");
                    } else {
                        setCouponMessage("Cupón no válido.");
                        setPrice(originalPrice);
                    }
                }
            });
    };

    const handleApplyCoupon = () => {
        if (!coupon) return;
        createPaymentIntent(originalPrice, coupon);
    };

    const appearance = {
        theme: 'night',
        variables: {
            colorPrimary: '#c5a059',
            colorBackground: '#1a1a1a', // This affects stripe element internal bg
            colorText: '#f5f5f5',
        },
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <section className="pricing-section section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>ACCESO EXCLUSIVO</h2>

                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        El conocimiento real se paga. Pero la oportunidad de entrar antes que nadie, se premia.
                    </p>

                    <div className="pricing-price" style={{ marginTop: '1rem', fontSize: '5rem' }}>
                        360€
                    </div>

                    <div style={{
                        border: '1px solid var(--color-gold)',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(197, 160, 89, 0.1)',
                        margin: '2rem auto',
                        maxWidth: '500px'
                    }}>
                        <p style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                            ⚠ ATENCIÓN: SUBIDA DE PRECIO INMINENTE
                        </p>
                        <p style={{ fontStyle: 'italic', marginBottom: '0' }}>
                            El 1 de enero el precio subirá considerablemente. <br />
                            Nunca volverás a tener acceso a este sistema a este precio. <br />
                        </p>
                    </div>

                    {/* Coupon Input */}
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem', maxWidth: '300px', margin: '0 auto 1rem auto' }}>
                        <input
                            type="text"
                            placeholder="Código promocional"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                borderRadius: '4px',
                                border: '1px solid #444',
                                background: '#222',
                                color: 'white',
                                width: '100%'
                            }}
                        />
                        <button
                            onClick={handleApplyCoupon}
                            style={{
                                background: 'var(--color-gold)',
                                color: 'black',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '4px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Aplicar
                        </button>
                    </div>
                    {couponMessage && <p style={{ color: couponMessage.includes('correctament') ? '#22c55e' : '#ef4444', fontSize: '0.9rem', marginBottom: '1rem' }}>{couponMessage}</p>}

                    <p className="text-muted" style={{ fontSize: '0.875rem' }}>Pago único. Acceso de por vida.</p>
                    <p style={{ color: '#fff', marginTop: '1rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>
                        COMIENZA EL 15 DE ENERO
                    </p>
                </div>

                <div className="pricing-card">
                    {clientSecret ? (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm price={price} />
                        </Elements>
                    ) : (
                        <div className="text-center text-muted">Cargando pasarela segura...</div>
                    )}
                </div>
            </div>
        </section>
    );
}
