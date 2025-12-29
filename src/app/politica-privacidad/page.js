import Link from "next/link";

export const metadata = {
    title: "Política de Privacidad | Mr. President",
    description: "Política de privacidad y protección de datos de Mr. President",
};

export default function PoliticaPrivacidad() {
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
                    POLÍTICA DE PRIVACIDAD
                </h1>

                <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '1rem', color: '#888', fontSize: '0.85rem' }}>
                        Última actualización: Diciembre 2025
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        1. RESPONSABLE DEL TRATAMIENTO
                    </h2>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Responsable:</strong> Instituto Internacional de Conexiones Estratégicas</li>
                        <li><strong>CIF:</strong> B21717046</li>
                        <li><strong>Dirección:</strong> Muelle De La Puntilla, 51002, Ceuta, España</li>
                        <li><strong>Email:</strong> info@mrpresident.es</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        2. DATOS QUE RECOPILAMOS
                    </h2>
                    <p>Recopilamos los siguientes datos personales:</p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Datos de compra:</strong> Nombre completo, dirección de correo electrónico, país, código postal (necesarios para procesar el pago y emitir factura)</li>
                        <li><strong>Datos de newsletter:</strong> Dirección de correo electrónico (si te suscribes voluntariamente)</li>
                        <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de visita (mediante cookies)</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        3. FINALIDAD DEL TRATAMIENTO
                    </h2>
                    <p>Utilizamos tus datos para las siguientes finalidades:</p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li>Gestionar la compra y proporcionar acceso al curso</li>
                        <li>Enviarte las credenciales de acceso y comunicaciones relacionadas con tu compra</li>
                        <li>Enviarte el boletín de noticias (solo si te has suscrito)</li>
                        <li>Cumplir con obligaciones legales y fiscales</li>
                        <li>Mejorar nuestros servicios y experiencia de usuario</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        4. BASE LEGAL DEL TRATAMIENTO
                    </h2>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Ejecución de contrato:</strong> Para procesar tu compra y darte acceso al curso</li>
                        <li><strong>Consentimiento:</strong> Para el envío del boletín de noticias (puedes retirarlo en cualquier momento)</li>
                        <li><strong>Obligación legal:</strong> Para cumplir con obligaciones fiscales y de facturación</li>
                        <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        5. DESTINATARIOS DE LOS DATOS
                    </h2>
                    <p>Tus datos pueden ser comunicados a:</p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Stripe:</strong> Procesador de pagos (para gestionar las transacciones). <a href="https://stripe.com/es/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>Ver política de privacidad de Stripe</a></li>
                        <li><strong>Moosend:</strong> Plataforma de email marketing (si te suscribes a la newsletter). <a href="https://moosend.com/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>Ver política de privacidad de Moosend</a></li>
                        <li><strong>Administración tributaria:</strong> En cumplimiento de obligaciones legales</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        6. TRANSFERENCIAS INTERNACIONALES
                    </h2>
                    <p>
                        Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo. En estos casos, nos aseguramos de que existan garantías adecuadas como las Cláusulas Contractuales Tipo de la Comisión Europea o certificaciones como el Marco de Privacidad de Datos UE-EE.UU.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        7. CONSERVACIÓN DE DATOS
                    </h2>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Datos de compra:</strong> Se conservarán durante el tiempo necesario para cumplir con las obligaciones fiscales (mínimo 4 años según la normativa tributaria española)</li>
                        <li><strong>Datos de newsletter:</strong> Hasta que solicites la baja</li>
                        <li><strong>Datos de navegación:</strong> Máximo 24 meses</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        8. TUS DERECHOS
                    </h2>
                    <p>De acuerdo con el RGPD, tienes derecho a:</p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                        <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                        <li><strong>Supresión:</strong> Solicitar el borrado de tus datos</li>
                        <li><strong>Oposición:</strong> Oponerte a ciertos tratamientos</li>
                        <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                        <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        Para ejercer estos derechos, contacta con nosotros en <strong>info@mrpresident.es</strong>. Si consideras que tus derechos no han sido atendidos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        9. SEGURIDAD
                    </h2>
                    <p>
                        Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, pérdida o destrucción. Los pagos se procesan a través de Stripe, que cuenta con certificación PCI DSS Nivel 1.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        10. MODIFICACIONES
                    </h2>
                    <p>
                        Nos reservamos el derecho de modificar esta Política de Privacidad. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
                    </p>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #333' }}>
                    <Link href="/aviso-legal" style={{ color: 'var(--color-gold)', marginRight: '2rem' }}>
                        Aviso Legal
                    </Link>
                    <Link href="/politica-cookies" style={{ color: 'var(--color-gold)' }}>
                        Política de Cookies
                    </Link>
                </div>
            </div>
        </div>
    );
}
