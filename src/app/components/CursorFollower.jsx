'use client';
import { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
    const cursorRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });
    const mouse = useRef({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreenSize(); 
        window.addEventListener('resize', checkScreenSize);

        if (!isDesktop) return;

        const moveMouse = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener('mousemove', moveMouse);

        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.15;
            position.current.y += (mouse.current.y - position.current.y) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);
        const handleEnter = () => {
            const dot = cursorRef.current?.querySelector('.cursor-dot');
            if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1.8)';
        };

        const handleLeave = () => {
            const dot = cursorRef.current?.querySelector('.cursor-dot');
            if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        const elements = document.querySelectorAll('a, button');
        elements.forEach((el) => {
            el.addEventListener('mouseenter', handleEnter);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            window.removeEventListener('mousemove', moveMouse);
            cancelAnimationFrame(animationId);
            elements.forEach((el) => {
                el.removeEventListener('mouseenter', handleEnter);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, [isDesktop]);
    if (!isDesktop) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block"
            style={{ willChange: 'transform' }}
        >
            <div className="cursor-dot"></div>
        </div>
    );
};

export default CursorFollower;