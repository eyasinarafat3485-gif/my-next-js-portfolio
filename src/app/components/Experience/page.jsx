import React from 'react';


const Experience = () => {
    return (
        <div className="p-6 bg-gradient-to-br from-pink-100 via-slate-100 w-[92%] mx-auto  my-10 rounded-3xl">
      {/* Header */}
      <div className="mb-8">
          <p className="text-[15px] font-bold tracking-widest uppercase text-gray-800">EXPERIENCE </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Professional <span className="text-red-500">Experience</span>
                </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {/* 1. Pixelfit */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-[27px] font-bold text-gray-900">Bengal-IT</h2>
                <p className="text-xl text-gray-700 mt-1 font-bold">Full Stack Developer & Software Engineer</p>
              </div>
              <div className="text-right">
                <p className="text-pink-600 font-semibold">Q1 2026</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              I worked at Bengal-IT as a Full Stack Developer & Software Engineer, where I developed role-based SaaS applications, 
              handled theme development, and managed full web app deployment processes. I also managed 
              VPS servers and implemented security measures to ensure stable, secure, and high-performing web
              applications.
            </p>
          </div>

          {/* 2. ITCoreLTD */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-[27px] font-bold text-gray-900">Frontend Developer (Internship)</h2>
                <p className="text-xl text-gray-700 mt-1 font-bold">Frontend Web Developer</p>
              </div>
              <div className="text-right">
                <p className="text-pink-600 font-semibold">Q4 - 2026</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              This company specializes in frontend web development, crafting visually stunning and highly functional websites design, responsive layouts, and performance optimization. The gap bridge between design and technology, transforming static concepts into interactive, high-performance web experiences.
            </p>
          </div>

          {/* 3. Wordpress Developer (Internship) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-[27px] font-bold text-gray-900">Wordpress Developer (Internship)</h2>
                <p className="text-xl text-gray-700 mt-1 font-bold">Wordpress Web Developer</p>
              </div>
              <div className="text-right">
                <p className="text-pink-600 font-semibold"> Q3 - Q4 2025</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              This company specializes in wordpress development, crafting visually stunning and 
              highly functional websites design, elementor & plugin experts, wordpress customize, responsive layouts, and performance optimization. 
            </p>
          </div>

        </div>
      </div>
    // </div>
    );
};

export default Experience;