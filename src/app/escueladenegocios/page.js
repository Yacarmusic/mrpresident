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
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                {/* Overlay darker than usual for seriousness */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-[#050505] z-10"></div>

                <div className="relative z-20 text-center max-w-4xl px-6">
                    <h2 className="text-gold tracking-[0.2em] uppercase text-sm md:text-lg mb-4 font-bold">
                        Propuesta de Asociación Estratégica
                    </h2>
                    <h1 className="font-cinzel text-4xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
                        MR. PRESIDENT<br />
                        <span className="text-gold">ESCUELA DE NEGOCIOS</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide mb-10 max-w-2xl mx-auto">
                        "El éxito no es solo lo que sabes. Es a quién conoces y qué recursos puedes movilizar."
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="btn-primary text-xl px-10 py-5">
                            VER PROYECTO
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM (THESIS) */}
            <section className="py-20 bg-[#050505] section-padding">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="font-cinzel text-3xl md:text-4xl text-gold mb-6">
                            LA CRISIS DE LA FORMACIÓN
                        </h2>
                        <p className="text-xl text-gray-400">
                            El sistema actual está roto. Genera títulos, no resultados.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-[#1a1a1a] p-8 border-l-2 border-zinc-700">
                            <h3 className="font-cinzel text-2xl text-white mb-4">La Universidad</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Lenta, burocrática y desconectada. Profesores que nunca han pisado el mercado real enseñando teoría obsoleta de hace 10 años.
                            </p>
                        </div>
                        <div className="bg-[#1a1a1a] p-8 border-l-2 border-zinc-700">
                            <h3 className="font-cinzel text-2xl text-white mb-4">Formación Online</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Saturada de "vendehúmos". Promesas vacías sin infraestructura, sin contactos reales y sin una metodología probada de poder.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                            LA SOLUCIÓN: <span className="text-gold">ACELERADORA DE REALIDAD</span>
                        </h3>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            No enseñamos teoría de negocios. Enseñamos la práctica del poder, la gestión de crisis y la facturación agresiva.
                        </p>
                        <div className="mt-8 inline-block border border-[#c5a059] px-6 py-3 bg-[#c5a059]/10 rounded-sm">
                            <span className="font-cinzel text-gold text-xl tracking-widest">CALLE • CONTACTOS • CAJA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE METHOD (ROADMAP) */}
            <section className="py-20 bg-[#111] border-t border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="font-cinzel text-3xl md:text-5xl text-center text-white mb-16">
                        EL <span className="text-gold">MÉTODO</span>
                    </h2>

                    <div className="space-y-8">
                        {/* Phase 0 */}
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-[#1a1a1a]/50 p-6 border border-white/5 hover:border-gold/30 transition-all">
                            <div className="text-gold font-cinzel text-5xl font-bold opacity-30">00</div>
                            <div>
                                <h3 className="text-2xl font-cinzel text-white mb-2">LA BRÚJULA (Onboarding)</h3>
                                <p className="text-gray-400 mb-4">Diagnóstico inicial y Hoja de Ruta personalizada.</p>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Check size={14} className="text-gold" /> Alineación de expectativas</li>
                                    <li className="flex items-center gap-2"><Check size={14} className="text-gold" /> Asignación de Manager</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 1 */}
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-[#1a1a1a]/50 p-6 border border-white/5 hover:border-gold/30 transition-all">
                            <div className="text-gold font-cinzel text-5xl font-bold opacity-30">01</div>
                            <div>
                                <h3 className="text-2xl font-cinzel text-white mb-2">LOS CIMIENTOS (Blindaje)</h3>
                                <p className="text-gray-400 mb-4">Lo que nadie enseña y te arruina: bases legales y financieras.</p>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Shield size={14} className="text-gold" /> Ingeniería Fiscal Agresiva (Legal)</li>
                                    <li className="flex items-center gap-2"><Shield size={14} className="text-gold" /> Protección Patrimonial</li>
                                    <li className="flex items-center gap-2"><Shield size={14} className="text-gold" /> Control de Cashflow</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-[#1a1a1a]/50 p-6 border border-white/5 hover:border-gold/30 transition-all">
                            <div className="text-gold font-cinzel text-5xl font-bold opacity-30">02</div>
                            <div>
                                <h3 className="text-2xl font-cinzel text-white mb-2">EL MOTOR (Ventas y Marketing)</h3>
                                <p className="text-gray-400 mb-4">Narrativa, autoridad y sistemas de cierre High Ticket.</p>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><TrendingUp size={14} className="text-gold" /> Branding Personal (Factor F.N.)</li>
                                    <li className="flex items-center gap-2"><TrendingUp size={14} className="text-gold" /> Prospección en Frío (Outbound)</li>
                                    <li className="flex items-center gap-2"><TrendingUp size={14} className="text-gold" /> Psicología de Ventas</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex flex-col md:flex-row gap-6 items-start bg-[#1a1a1a]/50 p-6 border border-white/5 hover:border-gold/30 transition-all">
                            <div className="text-gold font-cinzel text-5xl font-bold opacity-30">03</div>
                            <div>
                                <h3 className="text-2xl font-cinzel text-white mb-2">LA EXPANSIÓN (Red y Escala)</h3>
                                <p className="text-gray-400 mb-4">Acceso a círculos de poder y automatización.</p>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Users size={14} className="text-gold" /> Networking Avanzado</li>
                                    <li className="flex items-center gap-2"><Users size={14} className="text-gold" /> Operaciones e IA</li>
                                    <li className="flex items-center gap-2"><Users size={14} className="text-gold" /> Liderazgo de Equipos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ECOSYSTEM & TECH */}
            <section className="py-20 bg-[#050505]">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-12">ECOSYSTEM <span className="text-gold">AD-HOC</span></h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border border-white/10 bg-[#111]">
                            <Zap className="text-gold mx-auto mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-2">Plataforma Propia</h4>
                            <p className="text-sm text-gray-400">Sin terceros. Netflix-style. Privacidad total de datos.</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-[#111]">
                            <Users className="text-gold mx-auto mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-2">Híbrido</h4>
                            <p className="text-sm text-gray-400">Contenido grabado Top Tier + Mentoría 1 a 1 quincenal.</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-[#111]">
                            <Star className="text-gold mx-auto mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-2">Gamificación</h4>
                            <p className="text-sm text-gray-400">Premio a facturación: Podcast presencial con Mr. President.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING (BUSINESS MODEL) */}
            <section className="py-20 bg-[#111] border-t border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="font-cinzel text-3xl md:text-5xl text-center text-white mb-6">MODELO DE <span className="text-gold">NEGOCIO</span></h2>
                    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Dos niveles de acceso para filtrar el compromiso y el poder adquisitivo.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* EXECUTIVE */}
                        <div className="bg-[#1a1a1a] p-8 border border-white/10 flex flex-col">
                            <h3 className="font-cinzel text-2xl text-white mb-2">EXECUTIVE</h3>
                            <p className="text-gray-500 mb-6 text-sm">Para quienes buscan estructura y escalar.</p>
                            <div className="text-4xl font-cinzel text-gold mb-6">3.000€ <span className="text-sm text-gray-500 font-sans">/año</span></div>

                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> Acceso completo contenido</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> Tutor de seguimiento</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> Clases grupales semanales</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> <strong>Mentoría 1 a 1 quincenal</strong></li>
                            </ul>
                        </div>

                        {/* PRESIDENT'S CLUB */}
                        <div className="bg-[#1a1a1a] p-8 border border-[#c5a059] relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 bg-[#c5a059] text-black text-xs font-bold px-3 py-1 font-cinzel">HIGH TICKET</div>
                            <h3 className="font-cinzel text-2xl text-white mb-2">PRESIDENT'S CLUB</h3>
                            <p className="text-gray-500 mb-6 text-sm">Acceso, proximidad y red de contactos.</p>
                            <div className="text-4xl font-cinzel text-gold mb-6">15.000€ <span className="text-sm text-gray-500 font-sans">/año</span></div>

                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> <strong>TODO lo incluido en Executive</strong></li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> <strong>4 MASTERMINDS PRESENCIALES</strong></li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> Cenas y fiestas exclusivas</li>
                                <li className="flex gap-3 text-gray-300 text-sm"><Check size={16} className="text-gold shrink-0" /> Acceso directo a F.N. y VIPs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-12 py-5 bg-transparent border-2 border-[#c5a059] text-[#c5a059] font-cinzel font-bold text-lg hover:bg-[#c5a059] hover:text-black transition-all">
                            SOLICITAR DOSSIER COMPLETO
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
