"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
    const searchParams = useSearchParams();
    const paymentIntent = searchParams.get('payment_intent');

    // Extract order number from payment_intent ID (e.g., pi_3QcXyz... -> last 8 chars)
    const orderNumber = paymentIntent ? paymentIntent.slice(-8).toUpperCase() : 'N/A';

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.85)'
        }}>
            <div style={{ maxWidth: '600px' }}>
                {/* Logo */}
                <img
                    src="/mrpresidentlogo.png"
                    alt="Mr. President Logo"
                    style={{
                        width: '120px',
                        height: 'auto',
                        margin: '0 auto 2rem auto',
                        display: 'block'
                    }}
                />

                <h1 style={{
                    fontSize: '2.5rem',
                    color: 'var(--color-gold)',
                    marginBottom: '1.5rem',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
                }}>
                    BIENVENIDO AL CÍRCULO
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '1.5rem',
                    color: '#ffffff',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.9)'
                }}>
                    Tu pago ha sido procesado correctamente.
                </p>

                {/* Order Number */}
                <div style={{
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <p style={{
                        fontSize: '0.9rem',
                        color: '#aaa',
                        marginBottom: '0.5rem'
                    }}>
                        NÚMERO DE PEDIDO
                    </p>
                    <p style={{
                        fontSize: '1.5rem',
                        color: 'var(--color-gold)',
                        fontFamily: 'monospace',
                        letterSpacing: '0.1em',
                        fontWeight: 'bold'
                    }}>
                        {orderNumber}
                    </p>
                    <p style={{
                        fontSize: '0.8rem',
                        color: '#888',
                        marginTop: '0.5rem'
                    }}>
                        Guarda este número para cualquier consulta
                    </p>
                </div>

                <p style={{
                    marginBottom: '2rem',
                    lineHeight: '1.8',
                    color: '#ffffff',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
                }}>
                    Recibirás un correo electrónico de confirmación de tu compra en los próximos minutos.
                    <br />
                    <span style={{ color: '#aaa', fontSize: '0.9rem' }}>
                        Mantente atento a tu bandeja de entrada los próximos días, recibirás más información importante.
                        <br />
                        Si no lo recibes, revisa tu carpeta de spam o contáctanos con tu número de pedido.
                    </span>
                </p>

                <Link href="/" className="btn-primary" style={{
                    display: 'inline-block',
                    padding: '1rem 2rem'
                }}>
                    VOLVER AL INICIO
                </Link>
            </div>
        </div>
    );
}

export default function Success() {
    return (
        <Suspense fallback={
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.85)'
            }}>
                <p style={{ color: 'var(--color-gold)' }}>Cargando...</p>
            </div>
        }>
            <SuccessContent />
        </Suspense>
    );
}
