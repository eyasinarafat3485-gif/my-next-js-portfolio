"use client"; // Framer Motion use korle eiti add kora dorkar
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // 1. Framer motion import kora holo

const CraftedProjects = () => {
    const projects = [
        {
            id: "01",
            title: "Product Landing + Conversion System",
            description: "Designed and delivered a conversion-focused landing experience with fast load times, SEO-ready structure, and crisp mobile layout. The build includes reusable UI blocks, analytics events, and clean handoff for marketing teams.",
            tags: ["Next.js", "SEO", "UI/UX", "Analytics"],
            image: "/project1.jpeg",
            bg: "bg-orange-500"
        },
        {
            id: "02",
            title: "Multi-step Client Onboarding",
            description: "Built a guided onboarding flow with validation, progress tracking, and a minimal admin view. The experience reduces drop-off and improves activation with smart defaults and clear microcopy.",
            tags: ["React", "Forms", "Automation", "Dashboard"],
            image: "/project2.jpg",
        },
        {
            id: "03",
            title: "Commerce Catalog + Search",
            description: "Developed a fast product catalog with category filters, smart search, and optimized image delivery. The layout keeps products discoverable on mobile and scales smoothly with large data sets.",
            tags: ["React", "Performance", "Filters", "Responsive"],
            image: "/project3.jpeg",
            bg: "bg-cyan-500"
        },
        {
            id: "04",
            title: "Service Booking Workflow",
            description: "Crafted a scheduling experience with availability logic, instant confirmations, and webhook automation. Includes admin controls for managing slots and rescheduling requests.",
            tags: ["Scheduling", "Webhooks", "Integrations", "UX"],
            image: "/project4.jpg",
        },
        {
            id: "05",
            title: "Ops Dashboard + Alerts",
            description: "Designed a compact operations dashboard with real-time metrics and alerting. Optimized for at-a-glance decisions with clear visual hierarchy and scalable component patterns",
            tags: ["Dashboard", "Realtime", "Monitoring", "Design System"],
            image: "/project5.jpeg",
        }
    ];

    return (
        <section className="p-6 bg-gradient-to-br bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 w-[92%] mx-auto my-10 rounded-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <p className="text-[15px] font-bold tracking-widest uppercase text-gray-800 dark:text-orange-500 ">My previous</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Crafted <span className="text-red-500">Projects</span>
                </h2>
                <p className="text-gray-500 dark:text-white mt-4 max-w-2xl text-[18px]">
                    A focused collection of MERN stack and full-stack web development projects...
                </p>
            </motion.div>

            {/* Projects List */}
            <div className="space-y-8 md:space-y-15">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                        className={`flex md:flex-row flex-col items-center md:gap-8 gap-2 w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >

                        {/* Text Side (Card) */}
                        <div className="flex-1 p-4 md:p-2.5 md:pt-5 md:pb-5 bg-white border border-gray-100 rounded-2xl shadow-sm ">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-400 font-semibold border">My Service</span>
                                <span className="text-red-400 text-xs font-bold">• {project.id}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Image Side (Card) */}
                        <motion.div
                            whileHover={{ scale: 1.02 }} // Image-e mouse nile halka zoom hobe
                            className="flex-1 w-full border-10 border-solid border-white shadow-lg rounded-2xl flex items-center justify-center overflow-hidden"
                        >
                            <Image width='400' height='300' src={project.image} alt="ui" className="w-full object-cover" />
                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CraftedProjects;