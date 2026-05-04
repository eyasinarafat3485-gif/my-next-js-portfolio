"use client"; // Next.js Client Component

import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-red-100 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Name */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-red-500 text-2xl font-bold tracking-tight">
            Eyasin Arafat
          </h2>
        </div>

        {/* Center: Copyright */}
        <div className="flex-1 text-center">
          <p className="text-sm text-gray-700">
            © {currentYear} All rights reserved.
          </p> 
        </div>

        {/* Right Side: Links & Scroll Button */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 font-medium">
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-red-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="#about" className="hover:text-red-600 transition-colors duration-200">
              About
            </Link>
            <Link href="#contact" className="hover:text-red-600 transition-colors duration-200">
              Contact
            </Link>
          </nav>

          <button
            onClick={scrollToTop}
            className="p-3 cursor-pointer bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:-translate-y-1 transition-all duration-300 focus:outline-none active:scale-95"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;