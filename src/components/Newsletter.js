"use client";
import React from "react";

export default function Newsletter() {
    return (
        <section className="newsletter-section">
            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    BOLETÍN DE <span className="text-gold">PODER</span>
                </h3>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                    Recibe análisis exclusivos sobre movimientos de poder que no salen en prensa.
                </p>

                {/* Moosend Form Placeholder */}
                <form className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico principal"
                        className="newsletter-input"
                    />
                    <button className="btn-primary" style={{ marginTop: 0 }}>
                        SUSCRIBIRME
                    </button>
                </form>
                <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '1rem' }}>
                    Cero spam. Solo información privilegiada.
                </p>
            </div>
        </section>
    );
}
