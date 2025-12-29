import Link from "next/link";

export default function NewsletterConfirmacion() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.85)'
        }}>
            <div style={{ maxWidth: '600px' }}>
                {/* Logo */}
                <img
                    src="/mrpresidentlogo.png"
                    alt="Mr. President Logo"
                    style={{
                        width: '120px',
                        height: 'auto',
                        margin: '0 auto 2rem auto',
                        display: 'block'
                    }}
                />

                <h1 style={{
                    fontSize: '2.5rem',
                    color: 'var(--color-gold)',
                    marginBottom: '1.5rem',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
                }}>
                    ¡SUSCRIPCIÓN CONFIRMADA!
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '1.5rem',
                    color: '#ffffff',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.9)'
                }}>
                    Ya formas parte del círculo de información privilegiada.
                </p>

                <div style={{
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <p style={{
                        fontSize: '1rem',
                        color: '#fff',
                        lineHeight: '1.6',
                        marginBottom: '0'
                    }}>
                        A partir de ahora recibirás análisis exclusivos sobre movimientos de poder que no salen en prensa.
                    </p>
                </div>

                <p style={{
                    marginBottom: '2rem',
                    lineHeight: '1.8',
                    color: '#aaa',
                    fontSize: '0.9rem'
                }}>
                    Revisa tu bandeja de entrada. Si no ves nuestros correos, asegúrate de añadirnos a tus contactos.
                </p>

                <Link href="/" className="btn-primary" style={{
                    display: 'inline-block',
                    padding: '1rem 2rem'
                }}>
                    VOLVER AL INICIO
                </Link>
            </div>
        </div>
    );
}
