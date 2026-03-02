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
            },
            {
                id: "donde-esta-el-poder",
                title: "¿Dónde está el poder?",
                vimeoId: "1169697988",
                professor: "Luis De Las Heras Vives",
                professorDesc: "Doctor en Derecho y Académico de Número de la Real Academia Europea de Doctores"
            },
            {
                id: "el-poder-como-relacion",
                title: "El poder como relación, no como cosa",
                vimeoId: "1169698189",
                professor: "Luis De Las Heras Vives",
                professorDesc: "Doctor en Derecho y Académico de Número de la Real Academia Europea de Doctores"
            },
            {
                id: "el-poder-y-la-creencia",
                title: "El Poder y la creencia: Habita en el imaginario colectivo",
                vimeoId: "1169697830",
                professor: "Luis De Las Heras Vives",
                professorDesc: "Doctor en Derecho y Académico de Número de la Real Academia Europea de Doctores"
            },
            {
                id: "el-poder-en-lo-invisible",
                title: "El poder en lo invisible: estructuras, normas e inconsciente social",
                vimeoId: "1169697578",
                professor: "Luis De Las Heras Vives",
                professorDesc: "Doctor en Derecho y Académico de Número de la Real Academia Europea de Doctores"
            },
            {
                id: "conclusion",
                title: "Conclusión",
                vimeoId: "1169698061",
                professor: "Luis De Las Heras Vives",
                professorDesc: "Doctor en Derecho y Académico de Número de la Real Academia Europea de Doctores"
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
        lessons: [
            {
                id: "habita-el-poder-en-el-lenguaje",
                title: "¿Habita el poder en el lenguaje?",
                vimeoId: "1169697392",
                professor: "Luis De Las Heras Vives",
                professorDesc: "Doctor en Derecho y Académico de Número de la Real Academia Europea de Doctores"
            }
        ]
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
