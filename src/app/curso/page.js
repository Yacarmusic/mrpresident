import Script from 'next/script';

export default function CourseWelcome() {
    return (
        <div className="space-y-6">
            {/* Tally Survey Embed */}
            <div className="w-full">
                <iframe
                    data-tally-src="https://tally.so/embed/Np6rEO?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="298"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Evento Mr. President"
                ></iframe>
                <Script
                    id="tally-js"
                    src="https://tally.so/widgets/embed.js"
                    onLoad={() => {
                        if (typeof Tally !== 'undefined') {
                            Tally.loadEmbeds();
                        }
                    }}
                />
            </div>

            {/* Important Announcement Banner */}
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
                    🔔 NUEVO VÍDEO CON ANUNCIO IMPORTANTE
                </p>
                <p style={{ color: '#ccc', marginBottom: '0' }}>
                    Hay un nuevo vídeo disponible en la sección de <strong style={{ color: '#fff' }}>Bienvenida</strong>.
                    Por favor, míralopara estar al tanto de las novedades del curso.
                </p>
            </div>

            <h1 className="text-3xl font-cinzel text-white mb-2">BIENVENIDO AL PODER</h1>
            <p className="text-zinc-400">Selecciona un módulo en el menú de la izquierda para comenzar tu formación.</p>
        </div>
    );
}
