"use client";
import React, { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) return;

        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setMessage('¡Suscripción completada! Revisa tu correo para confirmar.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Error al suscribirse. Inténtalo de nuevo.');
            }
        } catch (err) {
            setStatus('error');
            setMessage('Error de conexión. Inténtalo de nuevo.');
        }
    };

    return (
        <section className="newsletter-section">
            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    BOLETÍN DE <span className="text-gold">PODER</span>
                </h3>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                    Recibe análisis exclusivos sobre movimientos de poder que no salen en prensa.
                </p>

                {status === 'success' ? (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '1rem',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid #22c55e',
                        borderRadius: '8px',
                        color: '#22c55e'
                    }}>
                        <CheckCircle size={24} />
                        <span>{message}</span>
                    </div>
                ) : (
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Tu correo electrónico principal"
                            className="newsletter-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={status === 'loading'}
                        />
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ marginTop: 0, minWidth: '150px' }}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                'SUSCRIBIRME'
                            )}
                        </button>
                    </form>
                )}

                {status === 'error' && (
                    <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '1rem' }}>
                        {message}
                    </p>
                )}

                <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '1rem' }}>
                    Cero spam. Solo información privilegiada.
                </p>
            </div>
        </section>
    );
}
