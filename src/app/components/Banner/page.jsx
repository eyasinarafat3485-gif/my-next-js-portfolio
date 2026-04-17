import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import myImg from '../../../assets/Eyasin portfolio.png'
import { Download, ArrowRight } from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io';
import Image from 'next/image';
import SkillsCarousel from './Skills';


const Banner = () => {
    return (
        <main className='w-full bg-white pt-10 md:py-10'>
            {/* Banner Left */}
            <div className="w-[92%] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-2 md:gap-5">
            <div className='bannerLeft w-[80%] md:w-[30%] order-2 md:order-1 space-y-5 md:space-y-10  mt-10 md:mt-45 '>
                <div className='border border-red-500 w-56 rounded-full mx-auto md:mx-0 md:px-4 py-1 flex items-center justify-center gap-2'>
                    <p className='h-2 w-2 bg-red-500 rounded-full animate-ping '></p>
                    <p className='animate-bounce'>Open to opportunities</p>
                </div>

                <div className='text-center md:text-left md:w-full md:items-start mx-auto md:mx-0 '>
                    <h1 className='text-3xl md:text-5xl font-bold '>Full Stack Developer In Bangladesh</h1>
                </div>
                <div className='flex gap-4 text-center md:text-left md:w-full items-center w-[80%] md:items-start mx-auto'>
                    <p className='font-semibold'>Connect :</p>
                    <div className='flex text-center gap-3 md:gap-4 align-center '>
                        <a href="https://www.linkedin.com/in/md-eyasin-arafat-webdev"><FaLinkedin className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></FaLinkedin    ></a>

                        <a href="https://github.com/eyasinarafat3485-gif"><FaGithub className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></FaGithub></a>

                        <a href="https://www.facebook.com/share/14QVNWQSDuN/"><FaFacebook className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></FaFacebook> </a>

                         <a href="https://api.whatsapp.com/qr/2KWLCN3HKN3BI1?autoload=1&app_absent=0"><IoLogoWhatsapp  className='transition: 0.3s w-8 h-8 p-1.5 rounded-full border border-gray-500 bg-gray-200 hover-3d hover:bg-red-500 hover:text-white'></IoLogoWhatsapp > </a>
                    </div>
                </div>
            </div>

            {/* Banner Middle */}
            <div className='bannerMiddle w-[80%] order-1 md:order-2 md:w-[40%] mx-auto'>
                <Image src={myImg} alt="" />
            </div>

            {/* Banner Right */}
            <div className='bannerRight mt-10 order-3 md:w-[40%] text-center md:text-start md:mt-60'>
                <p className='text-[18px] md:text-[22px] '>Crafting exceptional web experiences with</p>
                <p className='text-[20px] md:text-[24px] font-semibold  text-red-500'>Node.js, React.js, Next.js, Express.js</p>
                <p className='text-[18px] md:text-[22px] '>and modern technologies.Transforming ideas into scalable digital solutions.</p>

                <div className='mt-8 space-x-5'>
                    <button className="btn btn-secondary bg-red-500 rounded-full text-[17px] hover:focus-within:-translate-y-1 hover:bg-red-600 transition-all shadow-lg">View My Work <ArrowRight></ArrowRight> </button>

                    <button className="btn btn-outline  bg-white text-black rounded-full hover:border-2 border-red-400"><Download></Download> Download CV</button>
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