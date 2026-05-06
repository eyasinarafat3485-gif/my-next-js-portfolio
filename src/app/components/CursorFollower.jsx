'use client';
import { useEffect, useRef } from 'react';

const CursorFollower = () => {
    const cursorRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });
    const mouse = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const moveMouse = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener('mousemove', moveMouse);

        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.15;
            position.current.y += (mouse.current.y - position.current.y) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            cancelAnimationFrame(animationId);
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const dot = cursor.querySelector('.cursor-dot');

        const handleEnter = () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1.8)';
        };

        const handleLeave = () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        const elements = document.querySelectorAll('a, button');

        elements.forEach((el) => {
            el.addEventListener('mouseenter', handleEnter);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            elements.forEach((el) => {
                el.removeEventListener('mouseenter', handleEnter);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{ willChange: 'transform' }}
        >
            <div className="cursor-dot"></div>
        </div>
    );
};

export default CursorFollower;