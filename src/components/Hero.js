"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>

            {/* Top Left Logo - Fixed to viewport */}
            <img
                src="/mrpresidentlogo.png"
                alt="Mr. President Logo"
                className="fixed-logo"
            />

            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-title"
                >
                    MR. PRESIDENT
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="hero-subtitle"
                >
                    El conocimiento sin contactos se queda en el aula
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <a href="/curso" className="hero-button">
                        ACCESO AL CURSO
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
