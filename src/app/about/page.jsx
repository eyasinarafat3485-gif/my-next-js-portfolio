'use client'
import React, { useState } from 'react';
import lightWork from '../../assets/tech.png'
import darkWork from '../../assets/darkmode.png'

import Image from 'next/image';

const AboutMe = () => {
    const handleDownloadCv = () => {
        const cvUrl = "/Full Stack Dev .pdf";

        const link = document.createElement("a");
        link.href = cvUrl;

        link.setAttribute("download", "Eyasin_Arafat_CV.pdf");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const introductoryText = " Hi Everyone, This is Eyasin Arafat — a Full Stack Developer. My love for technology goes beyond profession; it is a part of who I am. On the frontend, I weave responsive and vibrant user interfaces using React, TypeScript, and Tailwind CSS—where beauty is not just seen, but felt."

    const hiddenText = " On the backend, I build a strong foundation with Node.js and Express.js, creating a secure and high-performance ecosystem that brings together RESTful APIs, GraphQL, JWT authentication, Redis caching, and WebSockets. I don't just write code—I fight against threats like XSS, control traffic with rate limiting, and use DevOps tools like Docker to prepare applications for takeoff on a production-ready platform. I ensure an SEO-friendly structure in every project, helping them rank higher in search engines. To me, every project is like a living entity—where the elegance of the frontend and the power of the backend come together in perfect harmony. My goal is not just to build applications, but to create fast, secure, and user-friendly web experiences that touch people's lives, grow businesses, and make the digital world more beautiful, faster, and more reliable. I focus on clean architecture, smooth performance, and a polished user experience. Every line of code I write is aimed at solving real-world problems with reliability, security, and speed."

    const infoData = [
        { label: "Name", value: "Eyasin Arafat" },
        { label: "Birthday", value: "21 Feb 2005" },
        { label: "Job", value: "Full Stack Developer" },
        { label: "Email", value: "eyasinwebdev@gmail.com" },
        { label: "Nick Name", value: "Eyasin" },
    ];

    return (
        <section id='about' className="w-[92%] mt-10 md:mt-0 mx-auto shadow-lg rounded-3xl bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 transition-colors duration-500">
            <div className="w-full mx-auto flex flex-col lg:flex-row gap-12 items-start">
                {/* Left (Image & Timeline) */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start ">
                    {/* Illustration Image */}
                    <div className="w-full">

                        {/* Light Mode Image */}
                        <Image
                            src={lightWork}
                            alt="Developer Illustration"
                            className=" w-full h-65 object-cover block dark:hidden rounded-tl-3xl rounded-tr-3xl md:rounded-tr-sm md:rounded-tl-3xl"/>

                        {/* Dark Mode Image */}
                        <Image src={darkWork} alt="Developer Illustration Dark" className=" w-full h-65 object-cover hidden dark:block rounded-tl-3xl rounded-tr-3xl md:rounded-tr-sm md:rounded-tl-3xl"/>
                    </div>

                    {/* Timeline Info */}
                    <div className='flex flex-col md:pl-8 pt-5 dark:pt-8'>
                        <div className="relative border-l-2 border-red-500 ">
                            {infoData.map((item, index) => (
                                <div key={index} className="mb-3 ml-6 relative">
                                    {/* Red Dot */}
                                    <div className="absolute h-3.5 w-3.5 mt-1.5 -left-8 bg-red-500 rounded-full border-2 border-white dark:border-white/80"></div>

                                    <p className="text-gray-800">
                                        <span className="font-semibold text-lg  dark:text-orange-500 light:text-black">{item.label}: </span> <span className='text-[16px]  dark:text-white light:text-black'>{item.value}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Download Button */}
                    <button onClick={handleDownloadCv} className=" relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden group ml-8 m-5 cursor-pointer">

                        {/* Animated Red Gradient Border */}
                        <span className=" absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#ea580c,#fdba74,#f97316,#ea580c)] animate-[spin_4s_linear_infinite] opacity-90 group-hover:opacity-100 blur-[0.4px]"></span>

                        {/* Soft Red Glow */}
                        <span
                            className="absolute inset-0rounded-full bg-red-500/20 blur-2xlopacity-0group-hover:opacity-100transition-all duration-500"></span>

                        {/* Button Content */}
                        <span
                            className=" relative z-10 flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 border-2 text-white font-bold tracking-wide transition-all duration-300 group-hover:scale-[1.05] group-hover:from-red-500 group-hover:to-red-600 active:scale-95 shadow-[0_12px_35px_rgba(220,38,38,0.45)]">

                            {/* Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                            </svg>

                            Download CV
                        </span>
                    </button>
                </div>

                {/* Right (Content) */}
                <div className="w-full lg:w-2/3 md:pr-10 ">
                    <div className="w-fit">
                        <h2 className="text-3xl font-extrabold text-[#0F172A] text-center md:text-left p-5 md:pl-4  dark:text-white/75 light:text-black">About Me— <span className="text-gray-700 decoration-red-500  dark:text-orange-500 ">Full Stack Web Developer</span></h2>
                        <div className="h-0.5 mb-4 md:mb-8 bg-red-500 w-[92%] mx-auto "></div>
                    </div>

                    <div className="text-gray-500 leading-relaxed space-y-3 md:space-y-6 text-lg text-justify p-5">
                        <p className='text-[16px] leading-relaxed  dark:text-white/65 light:text-black'>
                            {introductoryText}

                            <span className={`${isExpanded ? 'inline' : 'hidden'} md:inline`}>
                                {hiddenText}
                            </span>

                            {/* Device show/hidden condition */}
                            <span className={`${isExpanded ? 'hidden' : 'inline'} md:hidden`}>
                                ....
                            </span>
                        </p>


                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 bg-[#FF5A5F] text-white px-5 py-1 rounded-full font-semibold md:hidden">
                            {isExpanded ? "See less" : "See more"}
                        </button>
                        <p className='text-[16px] dark:text-white/65 light:text-black'>
                            I focus on clean architecture, smooth performance, and a polished user experience. Every line of code I write is aimed at solving real-world problems with reliability, security, and speed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;