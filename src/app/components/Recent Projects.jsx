"use client";

import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Tickmart E-Commerce",
    description:
      "A full-stack e-commerce platform with secure authentication, product management & seamless checkout experience.",
    image: "https://i.ibb.co/ynZvzCH9/tikmart.jpg",
    link: "https://tickmart.xyz",
  },
  {
    id: 2,
    title: "Skill-Sphere learning-app",
    description:
      "An online learning platform with course management and authentication.",
    image: "https://i.ibb.co/7xzkkFM2/Skill-Sphare.jpg",
    link: "https://skill-sphere-learning-app-a-8.vercel.app",
  },
  {
    id: 3,
    title: "Alhurrimat",
    description: "Modern shopping experience with seamless checkout and UI",
    image: "https://i.ibb.co/vvcSmpjr/alhurmat.jpg",
    link: "https://alhurmat.com/farin-hijab",
  },
  {
    id: 4,
    title: "KeenKeeper",
    description:
      "A modern social networking app that helps you stay connected with friends through real-time messaging activity sharing",
    image: "https://i.ibb.co/FqHw9K55/Keen-Keeper.jpg",
    link: "https://my-a07-keen-keeper-app.vercel.app",
  },
  {
    id: 5,
    title: "Dragon-News Online App",
    description:
      "A dynamic online news platform delivering real-time breaking news with category-based browsing and a clean, modern reading experience.",
    image: "https://i.ibb.co/NdV4G1wQ/dragon-news.jpg",
    link: "https://dragon-news-app-pi.vercel.app",
  },
];

const RecentProjects = () => {
  const loopProjects = [...projects, ...projects];

  return (
    <section className="overflow-hidden py-10">
      <div className="carousel-track flex w-max gap-6">
        {loopProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="group relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-2xl p-2 border-2 border-gray-600 cursor-pointer"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-black/65 border-gray-500 p-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <h3 className="translate-y-4 text-xl font-semibold transition duration-300 group-hover:translate-y-0">
                {project.title}
              </h3>

              <p className="mt-2 translate-y-4 text-sm text-gray-200 transition duration-300 delay-75 group-hover:translate-y-0">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit translate-y-4 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-red-500 transition duration-200  group-hover:translate-y-0"
              >
                See More <FiArrowUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .carousel-track {
          animation: scroll-left 28s linear infinite;
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

