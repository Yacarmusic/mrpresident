import React from "react";

export default function Manifesto() {
    return (
        <section className="manifesto-section section-padding">
            <div className="container manifesto-content">
                <h2 className="manifesto-title">
                    NO ES LO QUE SABES, ES A QUIÉN CONOCES
                </h2>

                <div className="manifesto-text text-justify">
                    <p>
                        He estado en todos los podcasts más importantes, he abierto informativos, tengo una serie en Netflix, he contado mi historia mil veces y siempre me preguntan lo mismo: ¿cómo lo hiciste? ¿Te arrepientes? ¿Qué pasó de verdad? Y yo siempre contesto lo políticamente correcto.
                    </p>
                    <p>
                        Pero hoy te voy a hacer pensar. Si te das cuenta, siempre es lo mismo: estudia mucho, saca buenas notas, consigue un título, trabaja duro y tendrás éxito. <strong>Mentira.</strong>
                    </p>
                    <p>
                        Haces todo bien y acabas en una Big Four trabajando 14 horas al día por un sueldo irrisorio. La IA está cambiando el mundo y tener una carrera universitaria no te hace diferente.
                    </p>
                    <div className="manifesto-quote">
                        "El 80% de las oportunidades vienen por quien conoces, no por lo que sabes."
                    </div>
                    <p>
                        A los 15 años ya estaba presentando a un expresidente del gobierno en una conferencia. No me colé, lo presenté yo. Cuando estaba en la universidad me sentaba al lado de ministros, presidentes de bancos y rectores en los desayunos más importantes del país.
                    </p>
                    <p>
                        ¿Y quién organizaba dónde se sentaba cada uno? Yo. Con 18 años conseguí colocar amigos míos en puestos de responsabilidad. Aprendí el sistema, cómo aparecer en los lugares correctos, cómo convertir dos minutos en un contacto para siempre.
                    </p>
                    <p>
                        Descubrí que cada contacto es una puerta y cada puerta te lleva a tres más. Tengo más de 10.000 contactos, gente que toma las decisiones que importan. Esto no lo enseñan en ninguna universidad.
                    </p>
                    <p>
                        <strong>Esto es el poder real.</strong> Hoy te presento la mejora formación de networking y contactos. Te voy a enseñar a conseguirlos y llegar arriba del todo.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', opacity: 0.8 }}>
                        <img src="/mrpresidentlogo.png" alt="Mr. President Seal" style={{ width: '100px', height: 'auto' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
