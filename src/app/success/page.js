import Link from "next/link";

export default function Success() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
            <div>
                <h1 style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>BIENVENIDO AL CÍRCULO</h1>
                <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Tu pago ha sido procesado correctamente.</p>
                <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                    Recibirás un correo electrónico con tus credenciales de acceso al sistema en los próximos minutos.
                </p>
                <Link href="/" className="btn-primary">
                    VOLVER AL INICIO
                </Link>
            </div>
        </div>
    );
}
