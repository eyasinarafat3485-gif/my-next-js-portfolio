
"use client";

import { motion } from "framer-motion";

const Experience = () => {
  // Balanced spring transition for smooth visual feedback
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, type: "spring", stiffness: 60, damping: 15 },
    viewport: { once: true, margin: "-50px" }
  };

  // Left Border Line Animation Configuration
  const borderVariants = {
    hidden: { height: "0%" },
    visible: {
      height: "100%",
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 }
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 w-[92%] mx-auto my-10 rounded-3xl">

      {/* Header */}
      <div className="mb-8">
        <p className="text-[15px] font-bold tracking-widest uppercase text-gray-800 dark:text-orange-500">
          EXPERIENCE
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Professional <span className="text-red-500">Experience</span>
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        <motion.div
          {...fadeInUp}
          whileHover={{ x: 6 }}
          className="relative bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 p-5 md:p-8 hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          {/* Professional Left Progress Border Layer */}
          <motion.div
            variants={borderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 top-0 w-1 bg-red-500 origin-top"
          />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
            <div>
              <h2 className="text-lg sm:text-[27px] font-bold text-slate-800 dark:text-orange-500">
                MERN Stack Developer (Remote)
              </h2>

              <p className="text-sm sm:text-lg text-gray-700 dark:text-white/75 mt-1 font-semibold">
                <a
                  href="https://bengalit.com.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-red-500 dark:text-red-400 font-bold"
                >
                  Bengal-IT
                </a>{" "}
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal">(Mirpur, Dhaka, Bangladesh)</span>
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="inline-block text-xs sm:text-sm font-semibold text-red-500 dark:text-red-400 bg-red-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                Q2 2025 - Now
              </span>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
            Bengal-it excels in full-stack web development, building robust, scalable, and highly functional web applications. As a Hybrid MERN Stack Developer in Bangladesh, I am eager to leverage modern technologies like MongoDB, Express.js, React.js, and Node.js to develop responsive, pixel-perfect user interfaces and seamless backend architectures.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          {...fadeInUp}
          whileHover={{ x: 6 }}
          className="relative bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 p-5 md:p-8 hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          {/* Professional Left Progress Border Layer */}
          <motion.div
            variants={borderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 top-0 w-1 bg-red-500 origin-top"
          />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
            <div>
              <h2 className="text-lg sm:text-[27px] font-bold text-slate-800 dark:text-orange-500">
                WordPress Developer
              </h2>

              <p className="text-sm sm:text-lg text-gray-700 dark:text-white/75 mt-1 font-semibold">
                WordPress Development <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal">(Internship)</span>
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="inline-block text-xs sm:text-sm font-semibold text-red-500 dark:text-red-400 bg-red-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                Q4 2024 - Q1 2025
              </span>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
            This company specializes in WordPress development, crafting visually stunning and highly functional websites. Through my tenure, I have proven a strong track record of executing complex projects with speed, precision, and exceptional quality.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;