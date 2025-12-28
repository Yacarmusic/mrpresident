"use client";
import React from "react";

export default function VSL() {
    return (
        <section id="vsl" className="vsl-section section-padding">
            <div className="container">
                <div className="vsl-wrapper" style={{ maxWidth: '400px' }}> {/* Reduced max-width for vertical video */}
                    <div className="vsl-player-placeholder" style={{
                        aspectRatio: '9/16',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        border: '1px solid var(--color-gold)',
                        borderRadius: '4px',
                        boxShadow: '0 0 50px rgba(197, 160, 89, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <div>
                            <p style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                🎬 VIDEO PROMOCIONAL
                            </p>
                            <p style={{ color: '#888', fontSize: '0.9rem' }}>
                                El vídeo se subió a un servidor externo por su tamaño.
                                <br />Contacta para obtener el enlace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
