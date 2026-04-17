import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-100 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand/Name */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-red-500 text-2xl font-bold tracking-tight">
            Eyasin Arafat
          </h2>
        </div>

        {/* Center: Copyright */}
        <div className="flex-1 text-center ">
          <p className="text-sm">
            © {currentYear} Your Website. All rights reserved.
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex-1 flex justify-center md:justify-end gap-6 font-medium ">
          <a href="/home" className="hover:text-red-500 transition-colors duration-200">
            Home
          </a>
          <a href="#about" className="hover:text-red-500 transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="hover:text-red-500 transition-colors duration-200">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;