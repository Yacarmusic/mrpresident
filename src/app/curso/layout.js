"use client";
import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { CheckCircle2, Circle, Menu, X, Lock, ChevronDown, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import './curso.css'; // Import custom CSS

import { courseContent } from '@/config/courseContent';

export default function CourseLayout({ children }) {
    const { user, isLoaded } = useUser();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Determine which module is active based on the current path
    const activeModuleId = React.useMemo(() => {
        const match = pathname.match(/\/curso\/([^/]+)/);
        return match ? match[1] : null;
    }, [pathname]);

    // Track expanded modules - auto-expand the active module
    const [expandedModules, setExpandedModules] = React.useState(() => {
        // Start with active module expanded, or modulo-0 if on welcome page
        return new Set(activeModuleId ? [activeModuleId] : ['modulo-0']);
    });

    // Update expanded when navigating to a different module
    React.useEffect(() => {
        if (activeModuleId) {
            setExpandedModules(prev => {
                const next = new Set(prev);
                next.add(activeModuleId);
                return next;
            });
        }
    }, [activeModuleId]);

    const toggleModule = (moduleId) => {
        setExpandedModules(prev => {
            const next = new Set(prev);
            if (next.has(moduleId)) {
                next.delete(moduleId);
            } else {
                next.add(moduleId);
            }
            return next;
        });
    };

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
                    {courseContent.map((module) => {
                        const isExpanded = expandedModules.has(module.id);
                        const hasLessons = !module.locked && module.lessons.length > 0;

                        return (
                            <div key={module.id} className="module-section">
                                <h3
                                    className={`module-title flex items-center gap-2 ${hasLessons ? 'module-title-clickable' : ''}`}
                                    onClick={() => hasLessons && toggleModule(module.id)}
                                >
                                    {module.locked ? (
                                        <Lock size={12} className="text-zinc-500 shrink-0" />
                                    ) : hasLessons ? (
                                        isExpanded ?
                                            <ChevronDown size={14} className="text-gold shrink-0" /> :
                                            <ChevronRight size={14} className="text-zinc-500 shrink-0" />
                                    ) : null}
                                    <span className={module.locked ? "opacity-50" : ""}>{module.title}</span>
                                </h3>
                                {hasLessons && isExpanded && (
                                    <ul className="lesson-list">
                                        {module.lessons.map((lesson) => {
                                            const path = `/curso/${module.id}/${lesson.id}`;
                                            const isActive = pathname === path;
                                            const progress = user?.publicMetadata?.progress || {};
                                            const progressKey = `${module.id}-${lesson.id}`;
                                            const isCompleted = progress[progressKey] === true;

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
                                )}
                            </div>
                        );
                    })}
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
