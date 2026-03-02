import Link from 'next/link';

export default function CourseWelcome() {
    return (
        <div className="space-y-6">
            {/* New Content Alert */}
            <div style={{
                border: '2px solid #c5a059',
                borderRadius: '8px',
                padding: '1.5rem',
                backgroundColor: 'rgba(197, 160, 89, 0.15)',
                marginBottom: '2rem'
            }}>
                <p style={{
                    color: '#c5a059',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-cinzel)'
                }}>
                    🎬 NUEVO CONTENIDO DISPONIBLE
                </p>
                <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#fff' }}>MÓDULO 1: LA GEOGRAFÍA DEL PODER</strong> — 6 lecciones disponibles con Felipe Debasa y Luis De Las Heras Vives.
                </p>
                <p style={{ color: '#ccc', marginBottom: '1rem' }}>
                    <strong style={{ color: '#fff' }}>MÓDULO 4: COMUNICACIÓN E INTELIGENCIA EMOCIONAL</strong> — nueva lección disponible.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <Link
                        href="/curso/modulo-1/la-naturaleza-del-poder"
                        style={{
                            display: 'inline-block',
                            padding: '0.6rem 1.5rem',
                            backgroundColor: '#c5a059',
                            color: '#000',
                            fontWeight: '700',
                            fontFamily: 'var(--font-cinzel)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                        }}
                    >
                        VER MÓDULO 1
                    </Link>
                    <Link
                        href="/curso/modulo-4/habita-el-poder-en-el-lenguaje"
                        style={{
                            display: 'inline-block',
                            padding: '0.6rem 1.5rem',
                            backgroundColor: 'transparent',
                            border: '2px solid #c5a059',
                            color: '#c5a059',
                            fontWeight: '700',
                            fontFamily: 'var(--font-cinzel)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                        }}
                    >
                        VER MÓDULO 4
                    </Link>
                </div>
            </div>

            <h1 className="text-3xl font-cinzel text-white mb-2">BIENVENIDO AL PODER</h1>
            <p className="text-zinc-400">Selecciona un módulo en el menú de la izquierda para comenzar tu formación.</p>
        </div>
    );
}
