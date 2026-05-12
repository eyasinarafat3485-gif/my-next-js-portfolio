'use client'
import React, { useState } from 'react';
import Servicesdata from '../../services-data.json';
import Image from 'next/image';

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id='services' className="p-6 bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 w-[92%] mx-auto my-10 rounded-3xl">
      <div className="object-contain mx-auto">
        {/* Section Heading */}
        <div className="mb-8">
          <p className="text-[15px] font-bold tracking-widest uppercase text-gray-800 dark:text-orange-500 ">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            How I Assist <span className="text-red-500">My Clients</span><br /> with Web Development
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto ">
          {Servicesdata.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-sm px-6 pt-10 pb-5 max-w-sm text-center cursor-grab transition-all duration-300 border-[1.5px] border-gray-100 hover:border-red-500"
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}  
            >
              {/* Icon Circle */}
              <div
                className={`w-12 h-12 absolute -top-6 left-1/4 -translate-x-1/2 rounded-full flex items-center justify-center transition-all duration-300 
                  ${hoveredIndex === index ? "bg-white ring-2 ml-21 ring-red-500" : "bg-red-500"}`}
              >
                {/* Fixed width and height here */}
                <Image 
                  width={30} 
                  height={30}
                  src={service.icon}
                  alt={service.title}
                  className={`w-6 h-6 transition-all duration-300
                    ${hoveredIndex === index ? "invert-0" : "invert brightness-0 saturate-0 brightness-200"}
                  `}
                />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                {service.title}
              </h3>

              {/* Card Description */}
              <p className="text-base text-gray-600 pt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;