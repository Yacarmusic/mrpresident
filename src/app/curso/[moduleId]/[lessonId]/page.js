import { notFound } from "next/navigation";
import { getLesson } from "@/config/courseContent";
import CourseVideoPlayer from "@/components/CourseVideoPlayer";

// We need to await params in Next.js 16/15+ if using dynamic routes in some contexts, 
// but standard page props usually provide params as object.
// To be safe with latest versions, we treat it as potentially async or direct object.

export default async function LessonPage({ params }) {
    // In Next.js 15+, params is a Promise.
    const resolvedParams = await params;
    const { moduleId, lessonId } = resolvedParams;

    const lesson = getLesson(moduleId, lessonId);

    if (!lesson) {
        return notFound();
    }

    const progressKey = `${moduleId}-${lessonId}`;

    return (
        <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-4">
                <h1 className="text-2xl lg:text-3xl font-cinzel text-white mb-2">{lesson.title}</h1>
            </div>

            <CourseVideoPlayer
                videoId={lesson.vimeoId}
                lessonId={progressKey}
                title={lesson.title}
            />

            {lesson.professor ? (
                <div className="mt-8 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
                        {lesson.professor.charAt(0)}
                    </div>
                    <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Profesor</p>
                        <p className="text-white font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>{lesson.professor}</p>
                    </div>
                </div>
            ) : (
                <div className="mt-8 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
                    <h3 className="text-gold font-bold mb-4">RECURSOS</h3>
                    <p className="text-zinc-500 text-sm">No hay recursos adjuntos para esta lección.</p>
                </div>
            )}
        </div>
    );
}
