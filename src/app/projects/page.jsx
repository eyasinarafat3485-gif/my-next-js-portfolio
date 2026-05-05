"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Tickmart E-Commerce",
    description: "A full-stack e-commerce platform with secure authentication.",
    image: "https://i.ibb.co/ynZvzCH9/tikmart.jpg",
    link: "https://tickmart.xyz",
  },
  {
    id: 2,
    title: "Skill-Sphere learning-app",
    description: "An online learning platform with course management.",
    image: "https://i.ibb.co/7xzkkFM2/Skill-Sphare.jpg",
    link: "https://skill-sphere-learning-app-a-8.vercel.app",
  },
  {
    id: 3,
    title: "Alhurrimat",
    description: "Modern shopping experience with seamless checkout.",
    image: "https://i.ibb.co/vvcSmpjr/alhurmat.jpg",
    link: "https://alhurmat.com/farin-hijab",
  },
  {
    id: 4,
    title: "KeenKeeper",
    description: "A modern social networking app with real-time messaging.",
    image: "https://i.ibb.co/FqHw9K55/Keen-Keeper.jpg",
    link: "https://my-a07-keen-keeper-app.vercel.app",
  },
  {
    id: 5,
    title: "Dragon-News Online App",
    description: "A dynamic online news platform with a clean experience.",
    image: "https://i.ibb.co/NdV4G1wQ/dragon-news.jpg",
    link: "https://dragon-news-app-pi.vercel.app",
  },
];

const RecentProjects = () => {
  const loopProjects = [...projects, ...projects];

  return (
    <section id='projects' className="p-6 bg-gradient-to-br from-pink-100 via-slate-100 w-[92%] mx-auto my-10 rounded-3xl animat overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Recent <span className="text-red-500">Projects</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 border-2 border-red-500 text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all cursor-pointer duration-300">
            View all <FiArrowUpRight />
          </button>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="carousel-track flex w-max gap-6 py-4 cursor-grab">
            {loopProjects.map((project, index) => (
              <ProjectCard key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          animation: scroll-left 35s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default RecentProjects;