import React from "react";
import Link from "next/link";
import { Check, Star, Users, TrendingUp, Shield, Zap } from "lucide-react";

export const metadata = {
    title: "Mr. President Escuela de Negocios | El Poder Real",
    description: "Aceleradora de realidad: Calle, Contactos y Caja.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function BusinessSchoolPage() {
    return (
        <main className="text-white">
            {/* 1. HERO SECTION */}
            <section className="business-hero-section" style={{ backgroundImage: "url('/hero.webp')" }}>
                {/* Overlay */}
                <div className="business-hero-overlay"></div>

                <div className="business-hero-content">
                    <h2 className="business-text-gold tracking-[0.2em] uppercase text-sm md:text-lg mb-4 font-bold">
                        Propuesta de Asociación Estratégica
                    </h2>
                    <h1 className="business-hero-title">
                        MR. PRESIDENT<br />
                        <span className="business-text-gold">ESCUELA DE NEGOCIOS</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide mb-10 max-w-2xl mx-auto">
                        "El éxito no es solo lo que sabes. Es a quién conoces y qué recursos puedes movilizar."
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="btn-primary" style={{ marginTop: 0 }}>
                            VER PROYECTO
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM (THESIS) */}
            <section className="section-padding bg-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="business-font-cinzel text-3xl md:text-4xl business-text-gold mb-6">
                            LA CRISIS DE LA FORMACIÓN
                        </h2>
                        <p className="text-xl text-gray-400">
                            El sistema actual está roto. Genera títulos, no resultados.
                        </p>
                    </div>

                    <div className="business-grid-2 gap-12">
                        <div className="card-business" style={{ borderLeft: '2px solid #52525b' }}>
                            <h3 className="business-font-cinzel text-2xl text-white mb-4">La Universidad</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Lenta, burocrática y desconectada. Profesores que nunca han pisado el mercado real enseñando teoría obsoleta de hace 10 años.
                            </p>
                        </div>
                        <div className="card-business" style={{ borderLeft: '2px solid #52525b' }}>
                            <h3 className="business-font-cinzel text-2xl text-white mb-4">Formación Online</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Saturada de "vendehúmos". Promesas vacías sin infraestructura, sin contactos reales y sin una metodología probada de poder.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                            LA SOLUCIÓN: <span className="business-text-gold">ACELERADORA DE REALIDAD</span>
                        </h3>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            No enseñamos teoría de negocios. Enseñamos la práctica del poder, la gestión de crisis y la facturación agresiva.
                        </p>
                        <div className="mt-8 inline-block border border-[#c5a059] px-6 py-3 bg-[#c5a059]/10 rounded-sm">
                            <span className="business-font-cinzel business-text-gold text-xl tracking-widest">CALLE • CONTACTOS • CAJA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE METHOD (ROADMAP) */}
            <section className="section-padding" style={{ backgroundColor: '#111', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="business-font-cinzel text-3xl md:text-5xl text-center text-white mb-16">
                        EL <span className="business-text-gold">MÉTODO</span>
                    </h2>

                    <div className="space-y-8">
                        {/* Phase 0 */}
                        <div className="phase-card">
                            <div className="phase-number">00</div>
                            <div className="w-full">
                                <h3 className="text-2xl business-font-cinzel text-white mb-2">LA BRÚJULA (Onboarding)</h3>
                                <p className="text-gray-400 mb-4">Diagnóstico inicial y Hoja de Ruta personalizada.</p>
                                <ul className="business-grid-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Check size={14} className="business-text-gold" /> Alineación de expectativas</li>
                                    <li className="flex items-center gap-2"><Check size={14} className="business-text-gold" /> Asignación de Manager</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 1 */}
                        <div className="phase-card">
                            <div className="phase-number">01</div>
                            <div className="w-full">
                                <h3 className="text-2xl business-font-cinzel text-white mb-2">LOS CIMIENTOS (Blindaje)</h3>
                                <p className="text-gray-400 mb-4">Lo que nadie enseña y te arruina: bases legales y financieras.</p>
                                <ul className="business-grid-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Shield size={14} className="business-text-gold" /> Modelos de Negocio (B2B/B2C, Recurrencia)</li>
                                    <li className="flex items-center gap-2"><Shield size={14} className="business-text-gold" /> Ingeniería Legal y Fiscal (SL vs Autónomo)</li>
                                    <li className="flex items-center gap-2"><Shield size={14} className="business-text-gold" /> Finanzas Reales (Cashflow y Margen)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="phase-card">
                            <div className="phase-number">02</div>
                            <div className="w-full">
                                <h3 className="text-2xl business-font-cinzel text-white mb-2">EL MOTOR (Ventas y Marketing)</h3>
                                <p className="text-gray-400 mb-4">Narrativa, autoridad y sistemas de cierre High Ticket.</p>
                                <ul className="business-grid-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><TrendingUp size={14} className="business-text-gold" /> Branding y Marca Personal</li>
                                    <li className="flex items-center gap-2"><TrendingUp size={14} className="business-text-gold" /> Sistemas de Captación (Inbound/Outbound)</li>
                                    <li className="flex items-center gap-2"><TrendingUp size={14} className="business-text-gold" /> Cierres High Ticket y Negociación</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="phase-card">
                            <div className="phase-number">03</div>
                            <div className="w-full">
                                <h3 className="text-2xl business-font-cinzel text-white mb-2">LA EXPANSIÓN (Red y Escala)</h3>
                                <p className="text-gray-400 mb-4">Acceso a círculos de poder y automatización.</p>
                                <ul className="business-grid-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Users size={14} className="business-text-gold" /> Networking Avanzado y RR.PP.</li>
                                    <li className="flex items-center gap-2"><Users size={14} className="business-text-gold" /> Operaciones e Inteligencia Artificial</li>
                                    <li className="flex items-center gap-2"><Users size={14} className="business-text-gold" /> Gestión de Equipos y Liderazgo</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 4 */}
                        <div className="phase-card">
                            <div className="phase-number">04</div>
                            <div className="w-full">
                                <h3 className="text-2xl business-font-cinzel text-white mb-2">EL EMPRENDEDOR (Mindset)</h3>
                                <p className="text-gray-400 mb-4">No hay negocio sin líder. Mentalidad de acero.</p>
                                <ul className="business-grid-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Zap size={14} className="business-text-gold" /> Desarrollo Personal y Biohacking</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="business-text-gold" /> Salud y Alto Rendimiento</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="business-text-gold" /> Resiliencia y Gestión del Caos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ECOSYSTEM & TECH */}
            <section className="section-padding bg-black">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="business-font-cinzel text-3xl md:text-4xl text-white mb-12">ECOSYSTEM <span className="business-text-gold">AD-HOC</span></h2>

                    <div className="business-grid-3 gap-8">
                        <div className="card-business">
                            <Zap className="business-text-gold mx-auto mb-4" size={32} />
                            <h4 className="font-bold text-lg text-white mb-2">Plataforma Propia</h4>
                            <p className="text-sm text-gray-400">Sin terceros. Netflix-style. Privacidad total de datos.</p>
                        </div>
                        <div className="card-business">
                            <Users className="business-text-gold mx-auto mb-4" size={32} />
                            <h4 className="font-bold text-lg text-white mb-2">Híbrido</h4>
                            <p className="text-sm text-gray-400">Contenido grabado Top Tier + Mentoría 1 a 1 quincenal.</p>
                        </div>
                        <div className="card-business">
                            <Star className="business-text-gold mx-auto mb-4" size={32} />
                            <h4 className="font-bold text-lg text-white mb-2">Gamificación</h4>
                            <p className="text-sm text-gray-400">Premio a facturación: Podcast presencial con Mr. President.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING (BUSINESS MODEL) */}
            <section className="section-padding" style={{ backgroundColor: '#111', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="business-font-cinzel text-3xl md:text-5xl text-center text-white mb-6">MODELO DE <span className="business-text-gold">NEGOCIO</span></h2>
                    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Dos niveles de acceso para filtrar el compromiso y el poder adquisitivo.</p>

                    <div className="business-grid-2 gap-8">
                        {/* EXECUTIVE */}
                        <div className="card-business flex flex-col">
                            <h3 className="business-font-cinzel text-2xl text-white mb-2">EXECUTIVE</h3>
                            <p className="text-gray-500 mb-6 text-sm">Para quienes buscan estructura y escalar.</p>
                            <div className="text-4xl business-font-cinzel business-text-gold mb-6">3.000€ <span className="text-sm text-gray-500 font-sans">/año</span></div>

                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> Acceso completo contenido</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> Tutor de seguimiento</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> Clases grupales semanales</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> <strong>Mentoría 1 a 1 quincenal</strong></li>
                            </ul>
                        </div>

                        {/* PRESIDENT'S CLUB */}
                        <div className="card-business card-business-gold relative overflow-hidden flex flex-col" style={{ boxShadow: '0 0 30px rgba(197,160,89,0.1)' }}>
                            <div className="absolute top-0 right-0 bg-[#c5a059] text-black text-xs font-bold px-3 py-1 font-cinzel">HIGH TICKET</div>
                            <h3 className="business-font-cinzel text-2xl text-white mb-2">PRESIDENT'S CLUB</h3>
                            <p className="text-gray-500 mb-6 text-sm">Acceso, proximidad y red de contactos.</p>
                            <div className="text-4xl business-font-cinzel business-text-gold mb-6">15.000€ <span className="text-sm text-gray-500 font-sans">/año</span></div>

                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> <strong>TODO lo incluido en Executive</strong></li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> <strong>4 MASTERMINDS PRESENCIALES</strong></li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> Cenas y fiestas exclusivas</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="business-text-gold shrink-0" /> Acceso directo a F.N. y VIPs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button className="btn-outline">
                            SOLICITAR DOSSIER COMPLETO
                        </button>
                    </div>

                    {/* ROADMAP from HTML file - STYLED FIX */}
                    <div className="roadmap-container">
                        <h3 className="business-font-cinzel text-2xl text-white mb-8">HOJA DE RUTA (ROADMAP)</h3>
                        <div className="flex flex-col gap-6 text-left">
                            <div className="roadmap-item">
                                <span className="roadmap-number">01</span>
                                <div>
                                    <h4 className="roadmap-title">Captación de Talentos</h4>
                                    <p className="roadmap-desc">Cierre de expertos en Fiscalidad, IA y Ventas.</p>
                                </div>
                            </div>
                            <div className="roadmap-item">
                                <span className="roadmap-number">02</span>
                                <div>
                                    <h4 className="roadmap-title">Desarrollo Tecnológico</h4>
                                    <p className="roadmap-desc">Puesta a punto del MVP de la plataforma propia.</p>
                                </div>
                            </div>
                            <div className="roadmap-item">
                                <span className="roadmap-number">03</span>
                                <div>
                                    <h4 className="roadmap-title">Lanzamiento Beta (Founding Members)</h4>
                                    <p className="roadmap-desc">Entrada de primeros alumnos para validar modelo 1:1.</p>
                                </div>
                            </div>
                            <div className="roadmap-item">
                                <span className="roadmap-number">04</span>
                                <div>
                                    <h4 className="roadmap-title">Primer Evento Mastermind</h4>
                                    <p className="roadmap-desc">Hito clave para tangibilizar el valor del ticket High Ticket.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
