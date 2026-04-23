'use client'
import React, { useState } from 'react';
import work from '../../assets/tech.png'
import Image from 'next/image';

// export const metadata={
//     title: "Eyasin | About Page | Full Stack Developer"
// }

const AboutMe = () => {
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
        <section id='about' className="w-[92%] mb-10 mt-10 mx-auto shadow-lg bg-gradient-to-br from-pink-100 via-slate-100 rounded-3xl md:mt-0 mt-10">
            <div className="w-full mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* Left (Image & Timeline) */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start ">
                    {/* Illustration Image */}
                    <div className="w-full ">
                        <Image src={work} alt="Developer Illustration" className="w-full bg-slate-50 border-t-0  rounded-tl-3xl rounded-tr-3xl md:rounded-tr-sm md:rounded-tl-3xl h-65" />
                    </div>

                    {/* Timeline Info */}
                    <div className='flex flex-col md:pl-8 pt-3'>
                        <div className="relative border-l-2 border-red-500 ">
                            {infoData.map((item, index) => (
                                <div key={index} className="mb-3 ml-6 relative">
                                    {/* Red Dot */}
                                    <div className="absolute h-3.5 w-3.5 mt-1.5 -left-8 bg-red-500 rounded-full border-2 border-white "></div>

                                    <p className="text-gray-800">
                                        <span className="font-semibold text-lg">{item.label}: </span> <span className='text-[16px]'>{item.value}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Download Button */}
                    <button className="m-5 bg-red-500 cursor-pointer text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-600 transition-all shadow-lg ml-8 shadow-orange-600 ">
                        Download CV
                    </button>
                </div>

                {/* Right (Content) */}
                <div className="w-full lg:w-2/3 md:pr-10 ">
                    <div className="w-fit">
                        <h2 className="text-3xl font-extrabold text-[#0F172A] text-center md:text-left p-5 md:pl-4">About Me— <span className="text-gray-700 decoration-red-500 ">Full Stack Web Developer</span></h2>
                        <div className="h-0.5 mb-4 md:mb-8 bg-red-500 w-[92%] mx-auto "></div>
                    </div>

                    <div className="text-gray-600 leading-relaxed space-y-3 md:space-y-6 text-lg text-justify p-5">
                        <p className='text-[16px] leading-relaxed'>
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
                        <p className='text-[16px]'>
                            I focus on clean architecture, smooth performance, and a polished user experience. Every line of code I write is aimed at solving real-world problems with reliability, security, and speed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;