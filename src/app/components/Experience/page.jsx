"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 w-[92%] mx-auto my-10 rounded-3xl">

      {/* Header */}
      <div className="mb-8">
        <p className="text-[15px] font-bold tracking-widest uppercase text-gray-800 dark:text-orange-500">
          EXPERIENCE
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Professional <span className="text-red-500">Experience</span>
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">

        {/* 1 */}
        <motion.div
          {...fadeInUp}
          className="bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-[27px] font-bold text-slate-800 dark:text-orange-500">
                Bengal-IT
              </h2>

              <p className="text-xl text-gray-700 dark:text-white/75 mt-1 font-bold">
                Full Stack Developer & Software Engineer
              </p>
            </div>

            <div className="text-right">
              <p className="text-pink-600 font-semibold">Now</p>
            </div>
          </div>

          <p className="text-gray-500 leading-relaxed">
            I worked at Bengal-IT as a Full Stack Developer & Software Engineer,
            where I developed role-based SaaS applications, handled theme
            development, and managed full web app deployment processes.
          </p>
        </motion.div>

        {/* 2 */}
        <motion.div
          {...fadeInUp}
          className="bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-[27px] font-bold text-slate-800 dark:text-orange-500">
                Frontend Developer (Internship)
              </h2>

              <p className="text-xl text-gray-700 dark:text-white/75 mt-1 font-bold">
                Frontend Web Developer
              </p>
            </div>

            <div className="text-right">
              <p className="text-pink-600 font-semibold">Q4 - 2026</p>
            </div>
          </div>

          <p className="text-gray-500 leading-relaxed">
            This company specializes in frontend web development, crafting
            visually stunning and highly functional websites.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          {...fadeInUp}
          className="bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-[27px] font-bold text-slate-800 dark:text-orange-500">
                Wordpress Developer
              </h2>

              <p className="text-xl text-gray-700 dark:text-white/75 mt-1 font-bold">
                Wordpress Web Developer
              </p>
            </div>

            <div className="text-right">
              <p className="text-pink-600 font-semibold">
                Q3 - Q4 2025
              </p>
            </div>
          </div>

          <p className="text-gray-500 leading-relaxed">
            This company specializes in wordpress development, crafting visually
            stunning and highly functional websites.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;