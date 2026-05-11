"use client"
import { useEffect, useRef, useState } from "react";
import { MessagesSquare } from "lucide-react";
import { FaElementor, FaGit, FaJs, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Skills = [
    { name: "Tailwind & Css3", percent: 100, icon: <FaCss size={32} /> },
    { name: "JavaScript", percent: 90, icon: <FaJs size={32} /> },
    { name: "React js", percent: 100, icon: <FaReact size={32} /> },
    { name: "Next js", percent: 90, icon: <RiNextjsFill size={32} /> },
    { name: "Node.js", percent: 100, icon: <FaNodeJs size={32} /> },
    { name: "Express js", percent: 85, icon: <SiExpress size={32} /> },
    { name: "MongoDB", percent: 95, icon: <DiMongodb size={32} /> },
    { name: "Git", percent: 100, icon: <FaGit size={32} /> },
    { name: "WordPress", percent: 95, icon: <FaWordpress size={32} /> },
    { name: "Elementor", percent: 95, icon: <FaElementor size={32} /> },
    { name: "Communication", percent: 80, icon: <MessagesSquare size={32} /> },
];

export default function SkillsCarousel() {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const isPausedRef = useRef(false);
    const scrollPosRef = useRef(0);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    useEffect(() => {
        let animationFrame;
        const animate = () => {
            if (containerRef.current && !isPausedRef.current && !isDragging) {
                scrollPosRef.current += 0.8;
                if (scrollPosRef.current >= containerRef.current.scrollWidth / 3) {
                    scrollPosRef.current = 0;
                }
                containerRef.current.scrollLeft = scrollPosRef.current;
            }
            animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isDragging]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        isPausedRef.current = true;
        startXRef.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeftRef.current = containerRef.current.scrollLeft;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
        if (containerRef.current) {
            scrollPosRef.current = containerRef.current.scrollLeft;
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.5;
        containerRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    return (
        <section className="w-[92%] mx-auto bg-slate-50 overflow-hidden select-none">

            <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className={`flex gap-8 overflow-x-hidden whitespace-nowrap px-10 py-5 ${isDragging ? "cursor-auto" : "cursor-grab"
                    }`}
            >
                {[...Skills, ...Skills, ...Skills].map((skill, i) => (
                    <SkillCard
                        key={i}
                        skill={skill}
                        isDragging={isDragging}
                        onHover={(state) => (isPausedRef.current = state)}
                    />
                ))}
            </div>
        </section>
    );
}

function SkillCard({ skill, onHover, isDragging }) {
    const [hovered, setHovered] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval;
        if (hovered && !isDragging) {
            // setCount(0);
            interval = setInterval(() => {
                setCount(prev => (prev < skill.percent ? prev + 1 : prev));
            }, 10);
        }
        return () => clearInterval(interval);
    }, [hovered, skill.percent, isDragging]);

    return (
        <div
            onMouseEnter={() => { setHovered(true); onHover(true); }}
            onMouseLeave={() => { setHovered(false); onHover(false); }}
            className="relative p-[2px] rounded-2xl transition-all duration-500 min-w-[120px] md:min-w-[180px]"
            style={{
                background: hovered && !isDragging
                    ? `conic-gradient(#ff0000 ${count}%, #e2e8f0 ${count}%)`
                    : "#e2e8f0"
            }}
        >
            <div className="flex flex-col items-center justify-center h-[90px] md:h-[150px] w-full bg-white rounded-[14px] md:rounded-[14px] transition-all duration-300 relative overflow-hidden border border-gray-50 md:border-none shadow-sm md:shadow-none">

                {/* Percentage Count */}
                {hovered && !isDragging && (
                    <span className="absolute top-1 right-2 md:static md:bottom-3 text-[10px] md:text-xl font-black text-red-600 animate-pulse">
                        {count}%
                    </span>
                )}

                {/* Icon Container */}
                <div
                    className={`p-1.5 md:p-3 rounded-lg md:rounded-xl mb-1 md:mb-3 transition-all duration-500 ${hovered && !isDragging ? 'bg-red-50 scale-105 md:scale-110 text-red-600' : 'text-slate-600'
                        }`}
                >
                    {/* Icon */}
                    <div className="text-lg md:text-3xl">
                        {skill.icon}
                    </div>
                </div>

                {/* Skill Name */}
                <span className={`text-[9px] md:text-[12px] font-bold uppercase tracking-wider transition-colors duration-300 ${hovered && !isDragging ? 'text-red-600' : 'text-slate-500'
                    }`}>
                    {skill.name}
                </span>
            </div>

        </div>
    );
}