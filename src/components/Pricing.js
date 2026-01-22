"use client";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { getPrice } from "@/utils/pricing";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Pricing() {
    const [clientSecret, setClientSecret] = useState("");
    const [paymentIntentId, setPaymentIntentId] = useState("");
    const [price, setPrice] = useState(360);
    const [originalPrice, setOriginalPrice] = useState(360);
    const [coupon, setCoupon] = useState("");
    const [couponMessage, setCouponMessage] = useState("");
    const [elementsKey, setElementsKey] = useState(0);

    // Initial Load - create PaymentIntent once
    useEffect(() => {
        const currentPrice = getPrice();
        setPrice(currentPrice);
        setOriginalPrice(currentPrice);

        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: currentPrice, promoCode: "" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                    // Extract PaymentIntent ID from clientSecret (format: pi_xxx_secret_yyy)
                    const piId = data.clientSecret.split('_secret_')[0];
                    setPaymentIntentId(piId);
                }
            });
    }, []);

    const handleApplyCoupon = async () => {
        if (!coupon || !paymentIntentId) return;

        setCouponMessage("Verificando...");

        try {
            const res = await fetch("/api/update-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    paymentIntentId,
                    amount: originalPrice,
                    promoCode: coupon
                }),
            });
            const data = await res.json();

            if (data.success && data.amount < originalPrice) {
                setPrice(data.amount);
                setCouponMessage("¡Cupón aplicado correctamente!");
                // Force Elements to refresh by changing key
                setElementsKey(prev => prev + 1);
            } else {
                setCouponMessage("Cupón no válido.");
            }
        } catch (err) {
            setCouponMessage("Error al aplicar cupón.");
        }
    };

    const appearance = {
        theme: 'night',
        variables: {
            colorPrimary: '#c5a059',
            colorBackground: '#1a1a1a',
            colorText: '#f5f5f5',
        },
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <section id="pricing" className="pricing-section section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>ACCESO EXCLUSIVO</h2>

                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        El conocimiento real se paga. Pero la oportunidad de entrar antes que nadie, se premia.
                    </p>

                    <div className="pricing-price" style={{ marginTop: '1rem', fontSize: '5rem' }}>
                        {price}€
                        {price < originalPrice && (
                            <span style={{ fontSize: '1.5rem', color: '#888', textDecoration: 'line-through', marginLeft: '1rem' }}>
                                {originalPrice}€
                            </span>
                        )}
                    </div>

                    {/* Coupon Section */}
                    <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                            <input
                                type="text"
                                placeholder="¿Tienes un código?"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                style={{
                                    padding: '0.75rem',
                                    borderRadius: '4px',
                                    border: '1px solid #444',
                                    backgroundColor: '#222',
                                    color: '#fff',
                                    flex: 1
                                }}
                            />
                            <button
                                onClick={handleApplyCoupon}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '4px',
                                    border: 'none',
                                    backgroundColor: 'var(--color-gold)',
                                    color: '#000',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                APLICAR
                            </button>
                        </div>
                        {couponMessage && (
                            <p style={{
                                marginTop: '0.5rem',
                                fontSize: '0.9rem',
                                color: couponMessage.includes('correctamente') ? '#22c55e' : '#ef4444'
                            }}>
                                {couponMessage}
                            </p>
                        )}
                    </div>

                    <p className="text-muted" style={{ fontSize: '0.875rem' }}>Pago único. Acceso de por vida.</p>
                </div>

                <div className="pricing-card">
                    {clientSecret ? (
                        <Elements key={elementsKey} options={options} stripe={stripePromise}>
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

