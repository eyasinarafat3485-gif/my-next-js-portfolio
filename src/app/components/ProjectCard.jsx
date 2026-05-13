import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false)}}
      className="relative p-[2px] rounded-[2rem] transition-all duration-50 h-[300px] w-[320px] md:w-[340px] shrink-0">
        
      {/* Inner Content */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-white dark:bg-slate-500/70  shadow-lg p-2">
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gray-200">

          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full object-cover transition-transform duration-50 ease-out ${hovered ? "scale-105" : ""}`}
          />

          {/* Overlay */}
          <div className={`absolute inset-0 flex flex-col justify-end bg-black/65 p-8 text-white transition-all duration-200 ease-out ${hovered ? "opacity-100" : "opacity-0"}`}>

            <div className={`transform transition-transform duration-200 ease-out ${hovered ? "translate-y-0" : "translate-y-3"}`}>
              <h3 className="text-xl font-bold mb-1">
                {project.title}
              </h3>

              <p className="text-sm text-gray-200 mb-4 line-clamp-2 opacity-90">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-red-500 text-white w-fit px-4 py-2 rounded-full text-xs font-semibold hover:bg-red-600 active:scale-95 transition-all duration-150"
              >
                Live Demo <FiArrowUpRight />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default ProjectCard;