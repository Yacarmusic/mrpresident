"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "¿CUÁNDO ESTARÁ DISPONIBLE EL CURSO?",
        answer: "El contenido completo se liberará el 15 de enero. Hasta entonces, estamos en fase de preventa exclusiva con precio reducido."
    },
    {
        question: "¿POR QUÉ DEBERÍA COMPRAR AHORA EN PREVENTA?",
        answer: "Porque el precio subirá. Ahora mismo está a 200€. El 1 de enero sube a 300€ y el día del lanzamiento (15 de enero) a 400€. Entrar ahora te garantiza el mejor precio posible."
    },
    {
        question: "¿ES REALMENTE DIFERENTE A OTROS CURSOS DE NETWORKING?",
        answer: "Sí. No es teoría académica. Es el sistema real y probado de alguien que ha llegado a lo más alto de la esfera política y social española sin venir de familia influyente. Es know-how crudo del poder, no consejos de LinkedIn."
    },
    {
        question: "¿NECESITO TENER CONTACTOS PREVIOS PARA APROVECHAR EL CURSO?",
        answer: "No. El curso está diseñado precisamente para construir tu red desde cero. Aprenderás a identificar, acercarte y mantener relaciones con personas influyentes, independientemente de tu punto de partida."
    },
    {
        question: "¿FUNCIONA SOLO EN ESPAÑA O PUEDO APLICARLO EN OTROS PAÍSES?",
        answer: "Los principios de poder, jerarquía y relaciones humanas son universales. Aunque algunos ejemplos sean españoles, la psicología detrás del sistema funciona en cualquier cultura de negocios occidental."
    },
    {
        question: "¿HAY UNA COMUNIDAD O SOPORTE DESPUÉS DE COMPRAR?",
        answer: "Tendrás soporte para dudas sobre el contenido. El objetivo es que apliques el sistema, no que te quedes con dudas teóricas."
    },
    {
        question: "¿QUÉ PASA SI NO ME FUNCIONA O NO ESTOY SATISFECHO?",
        answer: "Si aplicas el sistema paso a paso y no ves resultados, el problema no es el sistema. Estamos tan seguros de la calidad del contenido que sabemos que si lo ejecutas, tu realidad social cambiará."
    },
    {
        question: "¿EL CURSO INCLUYE ACCESO A TU RED DE CONTACTOS PERSONAL?",
        answer: "No. Te enseño a pescar, no te doy el pez. El valor del curso es que aprendas a generar tu propia independencia relacional, no que dependas de la mía."
    },
    {
        question: "¿CUÁNDO TENDRÉ ACCESO AL CONTENIDO DESPUÉS DE COMPRAR EN PREVENTA?",
        answer: "Recibirás tus credenciales inmediatamente, pero el contenido de los módulos se desbloqueará el día 15 de enero."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-padding" style={{ backgroundColor: 'rgba(5,5,5,0.7)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: '3rem' }}>PREGUNTAS FRECUENTES</h2>

                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                style={{ color: activeIndex === index ? 'var(--color-gold)' : 'white' }}
                            >
                                <span style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>{faq.question}</span>
                                <span>{activeIndex === index ? "−" : "+"}</span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="faq-answer" style={{ fontSize: '0.95rem' }}>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
