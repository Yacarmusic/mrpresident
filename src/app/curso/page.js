export default function CourseWelcome() {
    return (
        <div className="space-y-6">
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
