"use client";
import React from "react";

export default function VSL() {
    return (
        <section id="vsl" className="vsl-section section-padding">
            <div className="container">
                <div className="vsl-wrapper" style={{ maxWidth: '400px' }}>
                    <div className="vsl-player-placeholder" style={{
                        aspectRatio: '9/16',
                        backgroundColor: 'transparent',
                        boxShadow: '0 0 50px rgba(197, 160, 89, 0.2)'
                    }}>
                        <video
                            src="/video.mp4"
                            poster="/poster.jpg"
                            controls
                            playsInline
                            preload="metadata"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                border: '1px solid var(--color-gold)'
                            }}
                        >
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href="#pricing" className="btn-primary" style={{
                        fontSize: '1.1rem',
                        padding: '1rem 3rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        QUIERO ACCEDER AHORA
                    </a>
                </div>
            </div>
        </section>
    );
}
