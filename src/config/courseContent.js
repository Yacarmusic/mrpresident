export const courseContent = [
    {
        id: "modulo-0",
        title: "MÓDULO 0: BIENVENIDA DE MR. PRESIDENT",
        lessons: [
            {
                id: "bienvenida",
                title: "Introducción y Bienvenida",
                vimeoId: "76979871" // CAMBIAR POR ID REAL
            }
        ]
    },
    {
        id: "modulo-1",
        title: "MÓDULO 1: LA NATURALEZA DEL PODER",
        locked: true,
        lessons: [
            {
                id: "bienvenida-mentalidad",
                title: "Bienvenida y Mentalidad",
                vimeoId: ""
            },
            {
                id: "mapa-relaciones",
                title: "El Mapa de Relaciones",
                vimeoId: ""
            },
        ]
    },
    {
        id: "modulo-2",
        title: "MÓDULO 2: ACCESO Y APROXIMACIÓN",
        locked: true,
        lessons: [
            {
                id: "identificacion",
                title: "Identificación de Objetivos",
                vimeoId: ""
            },
            {
                id: "primer-contacto",
                title: "El Primer Contacto",
                vimeoId: ""
            },
        ]
    }
];

export const getLesson = (moduleId, lessonId) => {
    const module = courseContent.find(m => m.id === moduleId);
    if (!module || module.locked) return null; // Prevent access to locked modules
    return module.lessons.find(l => l.id === lessonId);
};
