
// "use client";

// import React, { useEffect } from "react";
// import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
// import { motion } from "framer-motion";

// const ProjectModal = ({ project, isOpen, onClose }) => {
//   useEffect(() => {
//     if (isOpen) {
//       const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
//       document.body.style.overflow = "hidden";
//       document.body.style.paddingRight = `${scrollBarWidth}px`; 
//     } else {
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = "";
//     };
//   }, [isOpen]);

//   if (!isOpen || !project) return null;

//   const liveUrl = project.link || project.liveLink;
//   const githubUrl = project.githubLink || project.githubClient;

//   const handleWheel = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div 
//       onClick={onClose} 
//       onWheel={handleWheel}
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6 overflow-hidden touch-none"
//     >
//       {/* Modal Container */}
//       <motion.div
//         onClick={(e) => e.stopPropagation()} 
//         onWheel={handleWheel} // ব্যাকগ্রাউন্ডে স্ক্রল যাওয়া ঠেকানো
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ duration: 0.25, ease: "easeOut" }}
//         style={{ overscrollBehavior: "contain" }} 
//         className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-300/30 dark:border-slate-700/50 bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 text-slate-800 dark:text-slate-100"
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 bg-slate-200 dark:bg-slate-800 hover:bg-red-500 hover:text-white p-2 rounded-full transition-all duration-200 text-slate-600 dark:text-slate-300 shadow-md z-10"
//         >
//           <FiX size={20} />
//         </button>

//         {/* Project Title */}
//         <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400 pr-8">
//           {project.title || project.name}
//         </h2>

//         {/* Clickable Image with Framer Motion Animation */}
//         {project.image && (
//           <a
//             href={liveUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="block relative group overflow-hidden rounded-2xl mb-6 border border-slate-300 dark:border-slate-700 shadow-lg cursor-pointer"
//           >
//             <motion.img
//               src={project.image}
//               alt={project.title}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="w-full h-52 md:h-64 object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
//               <FiExternalLink size={18} /> Visit Live Project
//             </div>
//           </a>
//         )}

//         {/* Overview & Description */}
//         <div className="mb-5">
//           <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300">
//             Description
//           </h3>
//           <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
//             {project.description}
//           </p>
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-5">
//           <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300">
//             Technology Stack
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {project.techStack?.map((tech, index) => (
//               <span
//                 key={index}
//                 className="bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-xs px-3 py-1 rounded-full font-medium"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Challenges Faced */}
//         <div className="mb-5">
//           <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300">
//             Challenges Faced
//           </h3>
//           <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
//             {project.challenges || "No specific challenges noted."}
//           </p>
//         </div>

//         {/* Future Plans */}
//         <div className="mb-6">
//           <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300">
//             Future Improvements
//           </h3>
//           <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
//             {project.futurePlans || "Planned UI and feature enhancements."}
//           </p>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-300 dark:border-slate-700">
//           <a
//             href={liveUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-150 shadow-md"
//           >
//             <FiExternalLink /> Live Project
//           </a>
//           <a
//             href={githubUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-150 border border-orange-600 shadow-md"
//           >
//             <FiGithub /> Client Repository
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectModal;



"use client";

import React, { useEffect, useState } from "react";
import { 
  FiX, 
  FiExternalLink, 
  FiGithub, 
  FiInfo, 
  FiCode, 
  FiAlertCircle, 
  FiTrendingUp, 
  FiImage 
} from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`; 
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const [activeImage, setActiveImage] = useState(project?.image);

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const liveUrl = project.link || project.liveLink;
  const githubUrl = project.githubLink || project.githubClient;

  const handleWheel = (e) => {
    e.stopPropagation();
  };

  const currentImage = activeImage || project.image;

  return (
    <div 
      onClick={onClose} 
      onWheel={handleWheel}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6 overflow-hidden touch-none"
    >
      {/* Modal Container */}
      <motion.div
        onClick={(e) => e.stopPropagation()} 
        onWheel={handleWheel}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ overscrollBehavior: "contain" }} 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-300/30 dark:border-slate-700/50 bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 text-slate-800 dark:text-slate-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-200 dark:bg-slate-800 hover:bg-red-500 hover:text-white p-2 rounded-full transition-all duration-200 text-slate-600 dark:text-slate-300 shadow-md z-10"
        >
          <FiX size={20} />
        </button>

        {/* Project Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400 pr-8">
          {project.title || project.name}
        </h2>

        {/* Active Main Image */}
        {currentImage && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="block relative group overflow-hidden rounded-2xl mb-3 border border-slate-300 dark:border-slate-700 shadow-lg cursor-pointer"
          >
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={project.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
              <FiExternalLink size={18} /> Visit Live Project
            </div>
          </a>
        )}

        {/* Small Gallery Thumbnails */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <FiImage className="text-orange-500" /> Project Screenshots
            </h4>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {project.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentImage === imgUrl
                      ? "border-orange-500 scale-105 shadow-md"
                      : "border-slate-300 dark:border-slate-700 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Overview & Description */}
        <div className="mb-5">
          <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <FiInfo className="text-orange-500" /> Description
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <FiCode className="text-orange-500" /> Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech, index) => (
              <span
                key={index}
                className="bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges Faced */}
        <div className="mb-5">
          <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <FiAlertCircle className="text-orange-500" /> Challenges Faced
          </h3>
          {Array.isArray(project.challenges) ? (
            <ul className="space-y-2 mt-2">
              {project.challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-orange-500 font-bold mt-1 text-xs">⚡</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.challenges || "No specific challenges noted."}
            </p>
          )}
        </div>

        {/* Future Plans */}
        <div className="mb-6">
          <h3 className="text-base font-semibold border-b border-slate-300 dark:border-slate-700 pb-1 mb-2 text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <FiTrendingUp className="text-orange-500" /> Future Improvements
          </h3>
          {Array.isArray(project.futurePlans) ? (
            <ul className="space-y-2 mt-2">
              {project.futurePlans.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-red-500 font-bold mt-1 text-xs">🚀</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.futurePlans || "Planned UI and feature enhancements."}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-300 dark:border-slate-700">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-150 shadow-md"
          >
            <FiExternalLink /> Live Project
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-150 border border-orange-600 shadow-md"
          >
            <FiGithub /> Client Repository
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;