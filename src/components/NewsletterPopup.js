"use client";
import React, { useState, useEffect } from "react";
import { Loader2, CheckCircle, X } from "lucide-react";

export default function NewsletterPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Show popup on mount (small delay for smoother entrance)
        // Checks session storage to avoid annoyance in same session if already closed? 
        // User requested "cuando se meten", implies per session or always. 
        // Let's use sessionStorage to only show once per session to avoid infinite popup on reload during dev or nav.
        const hasSeenPopup = sessionStorage.getItem("newsletter_popup_seen");
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000); // 1 second delay
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("newsletter_popup_seen", "true");
    };

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
                setMessage('¡Suscripción completada! Revisa tu correo.');
                setEmail('');
                // Optional: Auto close after success?
                setTimeout(() => {
                    handleClose();
                }, 3000);
            } else {
                setStatus('error');
                setMessage(data.error || 'Error al suscribirse. Inténtalo de nuevo.');
            }
        } catch (err) {
            setStatus('error');
            setMessage('Error de conexión. Inténtalo de nuevo.');
        }
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)'
        }} onClick={handleClose}>
            <div style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid var(--color-gold)',
                padding: '2rem',
                borderRadius: '8px',
                width: '90%',
                maxWidth: '500px',
                position: 'relative',
                boxShadow: '0 0 50px rgba(197, 160, 89, 0.3)'
            }} onClick={(e) => e.stopPropagation()}>

                <button onClick={handleClose} style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    color: '#888',
                    cursor: 'pointer'
                }}>
                    <X size={24} />
                </button>

                <div className="text-center">
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontFamily: 'var(--font-cinzel)' }}>
                        BOLETÍN DE <span className="text-gold">PODER</span>
                    </h3>
                    <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        Accede a información privilegiada y análisis exclusivos antes que nadie.
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
                            color: '#22c55e',
                            fontSize: '0.9rem'
                        }}>
                            <CheckCircle size={20} />
                            <span>{message}</span>
                        </div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit} style={{ flexDirection: 'column' }}>
                            <input
                                type="email"
                                placeholder="Tu correo electrónico principal"
                                className="newsletter-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === 'loading'}
                                style={{ width: '100%', marginBottom: '1rem' }}
                            />
                            <button
                                type="submit"
                                className="btn-primary"
                                style={{ width: '100%' }}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <Loader2 size={20} className="animate-spin" style={{ margin: '0 auto' }} />
                                ) : (
                                    'UNIRME AHORA'
                                )}
                            </button>
                        </form>
                    )}

                    {status === 'error' && (
                        <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '1rem' }}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
