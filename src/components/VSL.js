"use client";
import React from "react";

export default function VSL() {
    return (
        <section id="vsl" className="vsl-section section-padding">
            <div className="container">
                <div className="vsl-wrapper" style={{ maxWidth: '400px' }}> {/* Reduced max-width for vertical video */}
                    <div className="vsl-player-placeholder" style={{
                        aspectRatio: '9/16',
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: '0 0 50px rgba(197, 160, 89, 0.2)'
                    }}>
                        <video
                            src="/video.mp4"
                            poster="/poster.jpg"
                            controls
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--color-gold)' }}
                        >
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
