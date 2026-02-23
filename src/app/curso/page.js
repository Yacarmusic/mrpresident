import Link from 'next/link';

export default function CourseWelcome() {
    return (
        <div className="space-y-6">
            {/* Module 1 Available Alert */}
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
                    🎬 MÓDULO 1 YA DISPONIBLE
                </p>
                <p style={{ color: '#ccc', marginBottom: '1rem' }}>
                    El primer módulo — <strong style={{ color: '#fff' }}>GEOGRAFÍA DEL PODER</strong> — ya está listo.
                    Entra y empieza tu formación ahora.
                </p>
                <Link
                    href="/curso/modulo-1/bienvenida-mentalidad"
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
                        transition: 'all 0.3s ease'
                    }}
                >
                    VER MÓDULO 1
                </Link>
            </div>

            <h1 className="text-3xl font-cinzel text-white mb-2">BIENVENIDO AL PODER</h1>
            <p className="text-zinc-400">Selecciona un módulo en el menú de la izquierda para comenzar tu formación.</p>
        </div>
    );
}
