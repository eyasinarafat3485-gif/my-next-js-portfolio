
'use client'
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import myImg from '../../../assets/Eyasin portfolio.png'
import { IoLogoWhatsapp } from 'react-icons/io';
import Image from 'next/image';
import SkillsCarousel from './Skills';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import DownloadButton from '../DownloadButton';
import ViewWorkButton from '../ViewWorkButton';
import Link from 'next/link';

const Banner = () => {
    // Parent orchestrator to reveal content sequentially
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    // Clean, modern slide-up with spring physics
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 60, damping: 15 }
        }
    };

    return (
        <main className='relative z-10 w-full pt-10 md:pt-2 md:pb-10'>
            {/* Main Content Wrapper utilizing staggered animations */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-[92%] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-2 md:gap-5"
            >
                {/* Banner Left */}
                <motion.div
                    variants={itemVariants}
                    className='bannerLeft w-[80%] md:w-[30%] order-2 md:order-1 space-y-5 md:space-y-6 mt-10 md:mt-50'
                >
                    {/* Status Badge with balanced pulsing scale */}
                    <div className='border border-red-500 w-56 rounded-full mx-auto md:mx-0 md:px-4 py-1 flex items-center justify-center gap-2 bg-red-50/5 dark:bg-red-950/10'>
                        <span className='h-2 w-2 bg-red-500 rounded-full animate-ping' />
                        <p className='animate-bounce text-sm font-medium'>Open to opportunities</p>
                    </div>

                    <div className='text-center md:text-left md:w-full md:items-start mx-auto md:mx-0'>
                        <h3 className="text-lg md:text-xl text-gray-500 mb-2">
                            Hey, I'm{' '}
                            <motion.span
                                animate={{ rotate: [0, 15, -10, 15, 0] }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: "easeInOut",
                                }}
                                className="text-2xl md:text-3xl origin-bottom-right inline-block"
                            >
                                👋
                            </motion.span>
                        </h3>
                        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 from-30% via-red-500 to-orange-500 dark:from-white dark:from-30% dark:via-red-400 dark:to-orange-400 tracking-normal antialiased subpixel-antialiased pb-1">
                            Eyasin Arafat
                        </h1>
                    </div>

                    <div className="text-xl md:text-2xl text-gray-500 text-center md:text-start font-medium">
                        <span className="mr-1">I am a</span>
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer', 2000,
                                'MERN Stack Expert', 2000,
                                'WordPress Developer', 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-red-500 font-bold text-[22px]"
                        />
                    </div>

                    {/* Social Handles with premium scale & subtle bounce triggers */}
                    <div className='flex gap-4 text-center md:text-left md:w-full items-center w-[80%] md:items-start mx-auto'>
                        <p className='font-semibold text-gray-600 dark:text-gray-300'>Connect :</p>
                        <div className='flex text-center gap-3 md:gap-4 align-center'>
                            <motion.a whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/md-eyasin-arafat-webdev">
                                <FaLinkedin className='w-8 h-8 p-1.5 rounded-full border border-gray-500 dark:text-black bg-gray-200 hover:bg-[#0077B5] hover:text-white transition-colors duration-300' />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href="https://github.com/eyasinarafat3485-gif">
                                <FaGithub className='w-8 h-8 p-1.5 rounded-full border border-gray-500 dark:text-black bg-gray-200 hover:bg-black hover:text-white transition-colors duration-300' />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href="https://www.facebook.com/eyasinarafatwebdev12">
                                <FaFacebook className='w-8 h-8 p-1.5 rounded-full border border-gray-500 dark:text-black bg-gray-200 hover:bg-[#1877F2] hover:text-white transition-colors duration-300' />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href="https://wa.me/8801960421858">
                                <IoLogoWhatsapp className='w-8 h-8 p-1.5 rounded-full border border-gray-500 dark:text-black bg-gray-200 hover:bg-[#25D366] hover:text-white transition-colors duration-300' />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Banner Middle (Hero Avatar Animation) */}
                <div className='bannerMiddle w-[80%] order-1 md:order-2 md:w-[40%] mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -8, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.8, ease: "easeOut" },
                            scale: { duration: 0.8, ease: "easeOut" },
                            y: {
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        whileHover={{ scale: 1.03 }}
                        className='w-full h-auto drop-shadow-xl'
                    >
                        <Image src={myImg} alt="Eyasin Arafat" className="w-full h-auto" priority />
                    </motion.div>
                </div>

                {/* Banner Right */}
                <motion.div
                    variants={itemVariants}
                    className='bannerRight mt-10 order-3 md:w-[40%] text-center md:text-start md:mt-60'
                >
                    <p className='text-[18px] md:text-[22px] dark:text-white/65 leading-relaxed'>Crafting exceptional web experiences with</p>
                    <p className='text-[20px] md:text-[24px] font-semibold text-red-500 my-1'>Node.js, React.js, Next.js, Express.js</p>
                    <p className='text-[18px] md:text-[22px] dark:text-white/65 leading-relaxed'>and modern technologies. Transforming ideas into scalable digital solutions.</p>

                    {/* Interactive CTA Buttons */}
                    <div className='mt-8 space-x-5 flex justify-center md:justify-start items-center'>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link href='/#projects'><ViewWorkButton /></Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <DownloadButton />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Section - Skills Carousel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <SkillsCarousel />
            </motion.div>
        </main>
    );
};

export default Banner;