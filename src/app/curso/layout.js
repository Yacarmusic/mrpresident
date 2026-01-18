"use client";
import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { BookOpen, LogOut, CheckCircle2, Circle, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { courseContent } from '@/config/courseContent';

export default function CourseLayout({ children }) {
    const { user, isLoaded } = useUser();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    if (!isLoaded) return <div className="flex items-center justify-center min-h-screen text-gold">Cargando...</div>;

    return (
        <div className="flex min-h-screen bg-black text-white font-sans">
            {/* Mobile Header */
                // ... (rest of the file remains similar, but using courseContent)
                // ... (rest of the file remains similar, but using courseContent)}
                <div className="lg:hidden fixed top-0 left-0 w-full bg-zinc-900 border-b border-zinc-800 p-4 z-50 flex justify-between items-center">
                    <span className="font-cinzel text-gold font-bold">MR. PRESIDENT</span>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-0 left-0 h-full w-80 bg-zinc-950 border-r border-zinc-900 
                transform transition-transform duration-300 z-40 overflow-y-auto
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                pt-20 lg:pt-0
            `}>
                <div className="p-6 border-b border-zinc-900">
                    <h1 className="font-cinzel text-xl text-gold mb-2">MR. PRESIDENT</h1>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Área de Alumnos</p>
                </div>

                <div className="p-4">
                    {courseContent.map((module, mIndex) => (
                        <div key={module.id} className="mb-6">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase mb-3 px-2 tracking-wider">
                                {module.title}
                            </h3>
                            <ul className="space-y-1">
                                {module.lessons.map((lesson) => {
                                    const path = `/curso/${module.id}/${lesson.id}`;
                                    const isActive = pathname === path;
                                    // user.publicMetadata is accessible on client if present
                                    const progress = user?.publicMetadata?.progress || {};
                                    // We use a unique key for progress: moduleID-lessonID
                                    const progressKey = `${module.id}-${lesson.id}`;
                                    const isCompleted = progress[progressKey] === true;

                                    return (
                                        <li key={lesson.id}>
                                            <Link
                                                href={path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`
                                                    flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors
                                                    ${isActive
                                                        ? 'bg-gold/10 text-gold border-l-2 border-gold'
                                                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'}
                                                `}
                                            >
                                                {isCompleted ? (
                                                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                                ) : (
                                                    <Circle size={16} className={`shrink-0 ${isActive ? 'text-gold' : 'text-zinc-600'}`} />
                                                )}
                                                <span className="truncate">{lesson.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="p-4 mt-auto border-t border-zinc-900">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/50">
                        <UserButton afterSignOutUrl="/" appearance={{
                            elements: {
                                userButtonAvatarBox: "w-8 h-8"
                            }
                        }} />
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">{user?.fullName}</p>
                            <p className="text-xs text-zinc-500 truncate">{user?.primaryEmailAddress?.emailAddress}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 w-full min-w-0 pt-16 lg:pt-0">
                <div className="max-w-5xl mx-auto p-4 lg:p-12 mb-20 animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
}
