"use client";
import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Loader2, CheckCircle } from 'lucide-react';
import { markLessonCompleted } from "@/app/actions";

export default function CourseVideoPlayer({ videoId, onComplete, title, lessonId }) {
    const containerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (!containerRef.current || !videoId) return;

        const player = new Player(containerRef.current, {
            id: videoId,
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
            player.destroy();
        };
    }, [videoId, onComplete, lessonId]);

    return (
        <div className="video-player-wrapper" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            {isLoading && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', zIndex: 10 }}>
                    <Loader2 className="animate-spin text-gold" size={40} />
                </div>
            )}

            {/* Transparent overlay to discourage right-click save */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80%', zIndex: 5 }} onContextMenu={(e) => e.preventDefault()}></div>

            <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>

            {isCompleted && (
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#22c55e',
                    border: '1px solid #22c55e',
                    zIndex: 20
                }}>
                    <CheckCircle size={16} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>VISTO</span>
                </div>
            )}
        </div>
    );
}
