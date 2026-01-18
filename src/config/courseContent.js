export const courseContent = [
    {
        id: "modulo-1",
        title: "MÓDULO 1: LA NATURALEZA DEL PODER",
        lessons: [
            {
                id: "bienvenida",
                title: "Bienvenida y Mentalidad",
                vimeoId: "76979871" // EJEMPLO: Cambia esto por tu ID de Vimeo
            },
            {
                id: "mapa-relaciones",
                title: "El Mapa de Relaciones",
                vimeoId: "76979871" // EJEMPLO
            },
        ]
    },
    {
        id: "modulo-2",
        title: "MÓDULO 2: ACCESO Y APROXIMACIÓN",
        lessons: [
            {
                id: "identificacion",
                title: "Identificación de Objetivos",
                vimeoId: "76979871" // EJEMPLO
            },
            {
                id: "primer-contacto",
                title: "El Primer Contacto",
                vimeoId: "76979871" // EJEMPLO
            },
        ]
    }
];

export const getLesson = (moduleId, lessonId) => {
    const module = courseContent.find(m => m.id === moduleId);
    if (!module) return null;
    return module.lessons.find(l => l.id === lessonId);
};
