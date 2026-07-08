"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import projects from '@/craftedprojects-data.json'

const CraftedProjects = () => {
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
                <p className="text-gray-500 dark:text-white/65 mt-4 max-w-2xl text-[18px]">
                    A focused collection of MERN stack and full-stack web development projects...
                </p>
            </motion.div>

            {/* Projects List */}
            <div className="space-y-7 md:space-y-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                        className={`flex md:flex-row flex-col items-center md:gap-8 gap-2 w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`} >

                        {/* Text Side (Card) */}
                        <div className="flex-1 p-4 md:p-2.5 md:pt-5 md:pb-5 bg-white border border-gray-100 dark:bg-black/65 rounded-2xl shadow-sm ">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-400 font-semibold border dark:bg-black/65 dark:border-white/65 dark:text-orange-500">My Service</span>
                                <span className="text-red-400 text-xs font-bold">• {project.id}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white/75 mb-4">{project.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white border border-gray-600 rounded-full text-xs text-gray-500 dark:bg-black/65 dark:text-white/65">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Image Side (Card) */}
                        <motion.div
                            whileHover={{ scale: 1.02 }} // Image-e mouse nile halka zoom hobe
                            className="flex-1 w-full border-10 border-solid border-white dark:border-white/10 shadow-lg rounded-2xl flex items-center justify-center overflow-hidden"
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

