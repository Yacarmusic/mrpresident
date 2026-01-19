"use client";
import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Loader2, CheckCircle } from 'lucide-react';
import { markLessonCompleted } from "@/app/actions";
import './video-player.css';

export default function CourseVideoPlayer({ videoId, onComplete, title, lessonId }) {
    const containerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (!containerRef.current || !videoId) return;

        const player = new Player(containerRef.current, {
            id: Number(videoId),
            width: '100%',
            responsive: true,
            title: false,
            byline: false,
            portrait: false
        });

        player.on('loaded', () => {
            setIsLoading(false);
        });

        player.on('ended', async () => {
            setIsCompleted(true);
            if (lessonId) {
                await markLessonCompleted(lessonId);
            }
            if (onComplete) onComplete();
        });

        return () => {
            player.destroy().catch(() => { });
        };
    }, [videoId, onComplete, lessonId]);

    return (
        <div className="video-player-container">
            {isLoading && (
                <div className="video-placeholder">
                    <Loader2 className="animate-spin text-gold" size={40} />
                </div>
            )}

            {/* Transparent overlay to discourage right-click save */}
            <div className="video-protector" onContextMenu={(e) => e.preventDefault()}></div>

            <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>

            <div className="flex justify-end mt-4">
                {isCompleted && (
                    <button disabled className="btn-complete">
                        <CheckCircle size={18} />
                        <span className="btn-text">Lección Completada</span>
                    </button>
                )}
            </div>
        </div>
    );
}
