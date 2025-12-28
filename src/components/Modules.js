import React from "react";

const modules = [
    {
        id: "01",
        title: "GEOGRAFÍA DEL PODER",
        description: "Mira, la mayoría de la gente piensa que el poder está en los despachos con vistas. Error. Los que realmente mueven los hilos son invisibles. Aprenderás dónde está el poder de verdad: palcos del Bernabéu, cenas privadas, consejos de administración. Entenderás cómo funcionan la banca, la energía y los family offices."
    },
    {
        id: "02",
        title: "PROTOCOLO DE ALTO NIVEL",
        description: "El verdadero protocolo va de entender que un Lamborghini amarillo es un cartel de 'nuevo rico'. Te enseñaré por qué la gente con dinero de verdad lleva relojes que no conoces. Aprenderás qué decir, qué no decir (nunca digas 'networking') y cómo comportarte en ambientes desde tech de Pozuelo hasta cacerías en Extremadura."
    },
    {
        id: "03",
        title: "CONSEGUIR TU PADRINO",
        description: "Nadie llega lejos solo. Necesitas a alguien que invierta su capital social en ti. Te enseñaré a identificar mentores, cómo acercarte de forma natural y cómo ofrecer valor a cambio. Aprenderás el arte sutil de evolucionar de protegido a socio sin traiciones."
    },
    {
        id: "04",
        title: "COMUNICACIÓN E INTELIGENCIA EMOCIONAL",
        description: "No es lo que dices, es cómo haces sentir. Aprenderás oratoria, pero sobre todo a controlar tu ego. Sabrás leer a las personas, desarmar situaciones tensas con elegancia y ser la persona que todos quieren volver a ver, no por ruidoso, sino por saber escuchar."
    },
    {
        id: "05",
        title: "CONOCIMIENTO CULTURAL MÍNIMO",
        description: "Tu seguro de vida social. Qué saber de vinos, destinos que marcan clase (Gstaad sí, Dubai depende) y referencias culturales. Aprenderás a moverte con naturalidad desde una cata en La Rioja hasta el Real Club Náutico sin parecer un impostor."
    }
];

export default function Modules() {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-black)' }}>
            <div className="container">
                <h2 className="modules-title">
                    PROGRAMA DE <span className="text-gold">ENTRENAMIENTO</span>
                </h2>

                <div className="modules-list">
                    {modules.map((mod) => (
                        <div key={mod.id} className="module-item">
                            <div className="module-content">
                                <span className="module-number">{mod.id}</span>
                                <div className="module-text">
                                    <h3>{mod.title}</h3>
                                    <p>{mod.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
