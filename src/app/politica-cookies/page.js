import Link from "next/link";

export const metadata = {
    title: "Política de Cookies | Mr. President",
    description: "Política de cookies de Mr. President",
};

export default function PoliticaCookies() {
    return (
        <div style={{
            minHeight: '100vh',
            padding: '4rem 2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.95)'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link href="/" style={{ color: 'var(--color-gold)', fontSize: '0.9rem', marginBottom: '2rem', display: 'inline-block' }}>
                    ← Volver al inicio
                </Link>

                <h1 style={{
                    fontSize: '2.5rem',
                    color: 'var(--color-gold)',
                    marginBottom: '2rem'
                }}>
                    POLÍTICA DE COOKIES
                </h1>

                <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '1rem', color: '#888', fontSize: '0.85rem' }}>
                        Última actualización: Diciembre 2025
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        1. ¿QUÉ SON LAS COOKIES?
                    </h2>
                    <p>
                        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, móvil o tablet) cuando los visitas. Permiten que el sitio recuerde tus acciones y preferencias durante un período de tiempo.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        2. ¿QUÉ COOKIES UTILIZAMOS?
                    </h2>

                    <h3 style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        2.1. Cookies técnicas (necesarias)
                    </h3>
                    <p>Son esenciales para el funcionamiento del sitio web y no pueden desactivarse.</p>
                    <table style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #444' }}>
                                <th style={{ textAlign: 'left', padding: '0.5rem', color: '#fff' }}>Nombre</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem', color: '#fff' }}>Finalidad</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem', color: '#fff' }}>Duración</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #333' }}>
                                <td style={{ padding: '0.5rem' }}>__stripe_mid</td>
                                <td style={{ padding: '0.5rem' }}>Procesamiento seguro de pagos</td>
                                <td style={{ padding: '0.5rem' }}>1 año</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #333' }}>
                                <td style={{ padding: '0.5rem' }}>__stripe_sid</td>
                                <td style={{ padding: '0.5rem' }}>Sesión de pago</td>
                                <td style={{ padding: '0.5rem' }}>30 min</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        2.2. Cookies analíticas
                    </h3>
                    <p>
                        Nos permiten analizar el uso del sitio web para mejorar nuestros servicios. Estas cookies recogen información de forma anónima.
                    </p>

                    <h3 style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        2.3. Cookies de terceros
                    </h3>
                    <p>
                        Utilizamos servicios de terceros que pueden establecer sus propias cookies:
                    </p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Stripe:</strong> Para el procesamiento seguro de pagos</li>
                        <li><strong>Vercel:</strong> Para hosting y análisis de rendimiento</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        3. ¿CÓMO GESTIONAR LAS COOKIES?
                    </h2>
                    <p>
                        Puedes configurar tu navegador para rechazar o eliminar cookies. A continuación te indicamos cómo hacerlo en los navegadores más comunes:
                    </p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>Microsoft Edge</a></li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        Ten en cuenta que si desactivas las cookies, algunas funcionalidades del sitio web pueden no estar disponibles correctamente, especialmente el proceso de pago.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        4. ACTUALIZACIONES
                    </h2>
                    <p>
                        Esta Política de Cookies puede ser actualizada periódicamente. Te recomendamos revisarla regularmente para estar informado sobre cómo protegemos tu información.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        5. CONTACTO
                    </h2>
                    <p>
                        Si tienes dudas sobre nuestra Política de Cookies, puedes contactar con nosotros en:
                    </p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                        <li><strong>Email:</strong> info@mrpresident.es</li>
                        <li><strong>Dirección:</strong> Muelle De La Puntilla, 51002, Ceuta, España</li>
                    </ul>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #333' }}>
                    <Link href="/aviso-legal" style={{ color: 'var(--color-gold)', marginRight: '2rem' }}>
                        Aviso Legal
                    </Link>
                    <Link href="/politica-privacidad" style={{ color: 'var(--color-gold)' }}>
                        Política de Privacidad
                    </Link>
                </div>
            </div>
        </div>
    );
}
