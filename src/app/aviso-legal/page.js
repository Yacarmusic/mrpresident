import Link from "next/link";

export const metadata = {
    title: "Aviso Legal | Mr. President",
    description: "Aviso legal y condiciones de uso de Mr. President",
};

export default function AvisoLegal() {
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
                    AVISO LEGAL
                </h1>

                <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '1rem', color: '#888', fontSize: '0.85rem' }}>
                        Última actualización: Diciembre 2025
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        1. DATOS IDENTIFICATIVOS
                    </h2>
                    <p>
                        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen a continuación los datos identificativos de la empresa:
                    </p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Denominación social:</strong> Instituto Internacional de Conexiones Estratégicas</li>
                        <li><strong>CIF:</strong> B21717046</li>
                        <li><strong>Domicilio social:</strong> Muelle De La Puntilla, 51002, Ceuta, España</li>
                        <li><strong>Correo electrónico:</strong> info@mrpresident.es</li>
                        <li><strong>Sitio web:</strong> mrpresident.es</li>
                    </ul>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        2. OBJETO Y ÁMBITO DE APLICACIÓN
                    </h2>
                    <p>
                        El presente Aviso Legal regula el uso del sitio web mrpresident.es (en adelante, "el Sitio Web") y la contratación del curso online "Mr. President" (en adelante, "el Curso"), un programa formativo de contenido digital sobre networking y conexiones estratégicas.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        3. CONDICIONES DE COMPRA DEL CURSO
                    </h2>
                    <h3 style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        3.1. Naturaleza del producto
                    </h3>
                    <p>
                        El Curso es un producto digital de formación online que proporciona acceso a contenidos educativos en formato de vídeo, textos y materiales complementarios. El acceso se otorga de forma vitalicia desde el momento de la compra.
                    </p>

                    <h3 style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        3.2. Precio y forma de pago
                    </h3>
                    <p>
                        El precio del Curso se muestra en la página de venta e incluye todos los impuestos aplicables. El pago se realiza mediante pasarela de pago segura (Stripe) admitiendo tarjetas de crédito/débito y otros métodos de pago electrónicos.
                    </p>

                    <h3 style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        3.3. Política de no devolución
                    </h3>
                    <p style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-gold)' }}>
                        <strong style={{ color: 'var(--color-gold)' }}>IMPORTANTE:</strong> De conformidad con el artículo 103.m) del Real Decreto Legislativo 1/2007 (Ley General de Defensa de los Consumidores y Usuarios), el derecho de desistimiento NO es aplicable a los contratos de suministro de contenido digital que no se preste en un soporte material cuando la ejecución haya comenzado con el previo consentimiento expreso del consumidor.
                        <br /><br />
                        Al realizar la compra y acceder al contenido del Curso, el usuario acepta expresamente que la ejecución del contrato comienza inmediatamente, renunciando a su derecho de desistimiento. <strong>NO SE ADMITEN DEVOLUCIONES</strong> una vez completada la compra.
                    </p>

                    <h3 style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        3.4. Acceso al Curso
                    </h3>
                    <p>
                        Tras la confirmación del pago, el usuario recibirá un correo electrónico con las instrucciones y credenciales de acceso al contenido del Curso. El acceso es personal e intransferible.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        4. PROPIEDAD INTELECTUAL E INDUSTRIAL
                    </h2>
                    <p>
                        Todos los contenidos del Sitio Web y del Curso, incluyendo pero no limitado a textos, imágenes, vídeos, gráficos, logotipos, iconos, software y cualquier otro material, están protegidos por derechos de propiedad intelectual e industrial titularidad del Instituto Internacional de Conexiones Estratégicas o de terceros que han autorizado su uso.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación, cesión, alquiler o cualquier otra forma de explotación de los contenidos sin autorización expresa y por escrito del titular.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        5. LIMITACIÓN DE RESPONSABILIDAD
                    </h2>
                    <p>
                        El Instituto Internacional de Conexiones Estratégicas no garantiza resultados específicos derivados del uso del Curso. Los resultados dependen del esfuerzo, dedicación y circunstancias particulares de cada usuario.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        No nos hacemos responsables de interrupciones temporales del servicio por causas técnicas, mantenimiento o causas de fuerza mayor.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        6. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
                    </h2>
                    <p>
                        Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Ceuta, salvo que la normativa aplicable establezca otro fuero.
                    </p>

                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>
                        7. CONTACTO
                    </h2>
                    <p>
                        Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros a través de:
                    </p>
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                        <li><strong>Email:</strong> info@mrpresident.es</li>
                        <li><strong>Dirección:</strong> Muelle De La Puntilla, 51002, Ceuta, España</li>
                    </ul>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #333' }}>
                    <Link href="/politica-privacidad" style={{ color: 'var(--color-gold)', marginRight: '2rem' }}>
                        Política de Privacidad
                    </Link>
                    <Link href="/politica-cookies" style={{ color: 'var(--color-gold)' }}>
                        Política de Cookies
                    </Link>
                </div>
            </div>
        </div>
    );
}
