'use client'
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import myImg from '../../../assets/Eyasin portfolio.png'
import { Download, ArrowRight } from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io';
import Image from 'next/image';
import SkillsCarousel from './Skills';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import DownloadButton from '../DownloadButton';
import ViewWorkButton from '../ViewWorkButton';
import Link from 'next/link';

const Banner = () => {
    return (
        <main className='relative z-10 w-full pt-10 md:pt-2 md:pb-10'>
            {/* Banner Left */}
            <div className="w-[92%] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-2 md:gap-5">
                <div className='bannerLeft w-[80%] md:w-[30%] order-2 md:order-1 space-y-5 md:space-y-6  mt-10 md:mt-50 '>
                    <div className='border border-red-500 w-56 rounded-full mx-auto md:mx-0 md:px-4 py-1 flex items-center justify-center gap-2'>
                        <p className='h-2 w-2 bg-red-500 rounded-full animate-ping '></p>
                        <p className='animate-bounce'>Open to opportunities</p>
                    </div>

                    <div className='text-center md:text-left md:w-full md:items-start mx-auto md:mx-0 '>
                        <h3 className="text-lg md:text-xl text-gray-400 mb-2">
                            Hey, I'm <motion.span
                                animate={{ rotate: [0, 20, 0, 20, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="text-2xl md:text-3xl origin-bottom-right inline-block"
                            >
                                👋
                            </motion.span>
                        </h3>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-500 tracking-tight">
                            Eyasin Arafat
                        </h1>

                    </div>
                    <div className="text-xl md:text-2xl text-gray-500 text-center md:text-start font-medium">
                        <span className="mr-1">I am a</span>
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'MERN Stack Expert',
                                2000,
                                'WordPress Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-red-500 font-bold text-[22px]"
                        />
                    </div>
                    <div className='flex gap-4 text-center md:text-left md:w-full items-center w-[80%] md:items-start mx-auto'>
                        <p className='font-semibold'>Connect :</p>
                        <div className='flex text-center gap-3 md:gap-4 align-center '>
                            <a href="https://www.linkedin.com/in/md-eyasin-arafat-webdev"><FaLinkedin className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></FaLinkedin       ></a>

                            <a href="https://github.com/eyasinarafat3485-gif"><FaGithub className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></FaGithub></a>

                            <a href="https://www.facebook.com/share/14QVNWQSDuN/"><FaFacebook className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></FaFacebook> </a>

                            <a href="https://api.whatsapp.com/qr/2KWLCN3HKN3BI1?autoload=1&app_absent=0"><IoLogoWhatsapp className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></IoLogoWhatsapp > </a>
                        </div>
                    </div>
                </div>

                {/* Banner Middle */}
                <div className='bannerMiddle w-[80%] order-1 md:order-2 md:w-[40%] mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: [0, -5, 0] }}
                        transition={{
                            opacity: { duration: 1, delay: 0.5 },
                            y: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        whileHover={{ scale: 1.02 }}
                        className='w-full h-auto'
                    >
                        <Image src={myImg} alt="Eyasin Arafat" className="w-full h-auto" priority />
                    </motion.div>
                </div>

                {/* Banner Right */}
                <div className='bannerRight mt-10 order-3 md:w-[40%] text-center md:text-start md:mt-60'>
                    <p className='text-[18px] md:text-[22px] '>Crafting exceptional web experiences with</p>
                    <p className='text-[20px] md:text-[24px] font-semibold  text-red-500'>Node.js, React.js, Next.js, Express.js</p>
                    <p className='text-[18px] md:text-[22px] '>and modern technologies.Transforming ideas into scalable digital solutions.</p>

                    <div className='mt-8 space-x-5 flex'>
                       <Link href='/projects' ><ViewWorkButton /> </Link>
                        <DownloadButton />
                    </div>
                </div>

            </div>
            <div>
                <SkillsCarousel />
            </div>
        </main>

    );
};

export default Banner;

