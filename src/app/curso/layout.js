"use client";
import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { CheckCircle2, Circle, Menu, X, Lock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import './curso.css'; // Import custom CSS

import { courseContent } from '@/config/courseContent';

export default function CourseLayout({ children }) {
    const { user, isLoaded } = useUser();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    if (!isLoaded) return <div className="flex items-center justify-center min-h-screen bg-black text-gold">Cargando...</div>;

    return (
        <div className="course-layout">
            {/* Mobile Header */}
            <div className="mobile-header">
                <span className="font-cinzel text-gold font-bold">MR. PRESIDENT</span>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`course-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h1 className="sidebar-title">MR. PRESIDENT</h1>
                    <p className="sidebar-subtitle">Área de Alumnos</p>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {courseContent.map((module) => (
                        <div key={module.id} className="module-section">
                            <h3 className="module-title flex items-center gap-2">
                                {module.locked && <Lock size={12} className="text-zinc-500" />}
                                <span className={module.locked ? "opacity-50" : ""}>{module.title}</span>
                            </h3>
                            <ul className="lesson-list">
                                {module.lessons.map((lesson) => {
                                    const path = `/curso/${module.id}/${lesson.id}`;
                                    const isActive = pathname === path;
                                    const progress = user?.publicMetadata?.progress || {};
                                    const progressKey = `${module.id}-${lesson.id}`;
                                    const isCompleted = progress[progressKey] === true;

                                    if (module.locked) {
                                        return (
                                            <li key={lesson.id} className="lesson-item">
                                                <div className="lesson-link locked">
                                                    <Lock size={16} />
                                                    <span className="truncate">{lesson.title}</span>
                                                </div>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li key={lesson.id} className="lesson-item">
                                            <Link
                                                href={path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`lesson-link ${isActive ? 'active' : ''}`}
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

                <div className="user-footer">
                    <div className="user-profile">
                        <UserButton afterSignOutUrl="/" appearance={{
                            elements: { userButtonAvatarBox: "w-8 h-8" }
                        }} />
                        <div className="user-info overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">{user?.fullName}</p>
                            <p className="text-xs text-zinc-500 truncate">{user?.primaryEmailAddress?.emailAddress}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="course-main">
                <div className="max-w-5xl mx-auto animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
}
