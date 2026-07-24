// "use client";

// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import ProjectCard from "../components/ProjectCard";
// import projects from "@/projects-data.json"
// import Link from "next/link";

// const RecentProjects = () => {
//   const loopProjects = [...projects, ...projects];

//   return (
//     <section id='projects' className="p-6 bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 w-[92%] mx-auto my-10 rounded-3xl animat overflow-hidden">
//       <div className="container mx-auto">

//         {/* Header Section */}
//         <div className="flex justify-between items-end mb-6 md:mb-12">
//           <div>
//             <span className="text-black dark:text-orange-500 font-bold uppercase tracking-widest text-sm">Portfolio</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
//               Recent <span className="text-red-500">Projects</span>
//             </h2>
//           </div>
//           <Link href='https://github.com/eyasinarafat3485-gif' className="hidden md:flex items-center gap-2 border-2 border-red-500 dark:bg-black dark:text-white text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all cursor-pointer duration-300">
//             View all in github <FiArrowUpRight />
//           </Link>
//         </div>

//         {/* Carousel Section */}
//         <div className="relative">
//           <div className="carousel-track flex w-max gap-6 py-1 cursor-grab">
//             {loopProjects.map((project, index) => (
//               <ProjectCard key={`${project.id}-${index}`} project={project} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .carousel-track {
//           animation: scroll-left 35s linear infinite;
//         }

//         .carousel-track:hover {
//           animation-play-state: paused;
//         }

//         @keyframes scroll-left {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default RecentProjects;



"use client";

import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import projects from "@/projects-data.json";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "./ProjectModal";

const RecentProjects = () => {
  // 👈 ২. Selected project-এর স্টেট তৈরি করা হলো
  const [selectedProject, setSelectedProject] = useState(null);

  const loopProjects = [...projects, ...projects];

  return (
    <section id='projects' className="p-6 bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 w-[92%] mx-auto my-10 rounded-3xl animat overflow-hidden">
      <div className="container mx-auto">

        {/* Header Section */}
        <div className="flex justify-between items-end mb-6 md:mb-12">
          <div>
            <span className="text-black dark:text-orange-500 font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Recent <span className="text-red-500">Projects</span>
            </h2>
          </div>
          <Link href='https://github.com/eyasinarafat3485-gif' className="hidden md:flex items-center gap-2 border-2 border-red-500 dark:bg-black dark:text-white text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all cursor-pointer duration-300">
            View all in github <FiArrowUpRight />
          </Link>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="carousel-track flex w-max gap-6 py-1 cursor-grab">
            {loopProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`} 
                project={project} 
                /* 👈 ৩. Prop পাস করা হলো যা আগের এররটি ফিক্স করবে */
                onOpenDetails={(proj) => setSelectedProject(proj)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* 👈 ৪. Modal রেন্ডার করা হলো */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

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