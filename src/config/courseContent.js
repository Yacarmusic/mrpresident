export const courseContent = [
    {
        id: "modulo-0",
        title: "MÓDULO 0: BIENVENIDA DE MR. PRESIDENT",
        lessons: [
            {
                id: "bienvenida",
                title: "Introducción y Bienvenida",
                vimeoId: "1156007083"
            },
            {
                id: "evento-mr-president",
                title: "Evento Mr. President",
                vimeoId: "1161150993"
            }
        ]
    },
    {
        id: "modulo-1",
        title: "MÓDULO 1: LA GEOGRAFÍA DEL PODER",
        lessons: [
            {
                id: "la-naturaleza-del-poder",
                title: "La Naturaleza del Poder",
                vimeoId: "1167196246",
                professor: "Felipe Debasa"
            }
        ]
    },
    {
        id: "modulo-2",
        title: "MÓDULO 2: PROTOCOLO DE ALTO NIVEL",
        locked: true,
        lessons: []
    },
    {
        id: "modulo-3",
        title: "MÓDULO 3: CONSEGUIR TU PADRINO",
        locked: true,
        lessons: []
    },
    {
        id: "modulo-4",
        title: "MÓDULO 4: COMUNICACIÓN E INTELIGENCIA EMOCIONAL",
        locked: true,
        lessons: []
    },
    {
        id: "modulo-5",
        title: "MÓDULO 5: CONOCIMIENTO CULTURAL MÍNIMO",
        locked: true,
        lessons: []
    }
];

export const getLesson = (moduleId, lessonId) => {
    const module = courseContent.find(m => m.id === moduleId);
    if (!module || module.locked) return null; // Prevent access to locked modules
    return module.lessons.find(l => l.id === lessonId);
};
