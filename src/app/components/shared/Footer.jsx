// "use client"; // Next.js Client Component

// import Link from 'next/link';
// import React from 'react';
// import { FaArrowUp } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <footer className="bg-red-100 py-8 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

//         {/* Left Side: Name */}
//         <div className="flex-1 text-center md:text-left">
//           <h2 className="text-red-500 text-2xl font-bold tracking-tight">
//             Eyasin Arafat
//           </h2>
//         </div>

//         {/* Center: Copyright */}
//         <div className="flex-1 text-center">
//           <p className="text-sm text-gray-700">
//             © {currentYear} All rights reserved.
//           </p> 
//         </div>

//         {/* Right Side: Links & Scroll Button */}
//         <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 font-medium">
//           <nav className="flex gap-6">
//             <Link href="/" className="hover:text-red-600 transition-colors duration-200">
//               Home
//             </Link>
//             <Link href="#about" className="hover:text-red-600 transition-colors duration-200">
//               About
//             </Link>
//             <Link href="#contact" className="hover:text-red-600 transition-colors duration-200">
//               Contact
//             </Link>
//           </nav>

//           <button
//             onClick={scrollToTop}
//             className="p-3 cursor-pointer bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:-translate-y-1 transition-all duration-300 focus:outline-none active:scale-95"
//             aria-label="Scroll to top"
//           >
//             <FaArrowUp size={16} />
//           </button>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

'use client'

import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  // স্মুথ স্ক্রল ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden px-12 py-10 font-['Outfit'] text-white linear-gradient(135deg, #7f1d1d, #991b1b, #b91c1c) ">
      {/* Background Gradient & Border Top */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#1a0000_0%,#2d0000_40%,#1a0000_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,#dc1c1c,transparent)]" />

      {/* SVG Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      ></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h2 className="font-['Playfair_Display'] text-[28px] font-bold leading-[1.1] tracking-tight text-orange-400">
              Eyasin  Arafat
            </h2>
            <p className="text-[13px] text-pink-400 mt-2 font-light tracking-wider uppercase">
              Full Stack Developer & Software En.
            </p>
            <div className="w-8 h-[2px] bg-orange-400 my-4" />
            <p className="text-[13.5px] text-white/55 leading-relaxed font-light max-w-[260px]">
              Crafting pixel-perfect digital experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-[11px] tracking-[2.5px] uppercase text-orange-400 font-medium mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors duration-200 font-light"
                  >
                    <span className="w-0 h-[1px] bg-orange-400 transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="relative">
            <h3 className="text-[11px] tracking-[2.5px] uppercase text-orange-400 font-medium mb-5">
              Connect
            </h3>
       <div className="flex gap-3">
  {[
    { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/eyasinarafat3485-gif' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/md-eyasin-arafat-webdev' },
    { icon: <FaFacebookF />, label: 'Facebook', link: 'https://www.facebook.com/share/14QVNWQSDuN/' },
    { icon: <MdEmail />, label: 'Email', link: 'eyasinwebdev@gmail.com' } // Shudhu email address
  ].map((social, i) => (
    <a
      key={i}
      href={social.label === 'Email' ? '#' : social.link}
      onClick={(e) => {
        if (social.label === 'Email') {
          e.preventDefault();
          window.location.href = `mailto:${social.link}`;
        }
      }}
      target={social.label === 'Email' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      title={social.label}
      className="w-[40px] h-[40px] border border-white/40 rounded-full flex items-center justify-center text-white/60 text-[16px] transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:bg-[#dc1c1c]/10 hover:scale-110 cursor-pointer"
    >
      {social.icon}
    </a>
  ))}
</div>
            {/* --- UP ARROW BUTTON ADDED HERE --- */}
            <button
              onClick={scrollToTop}
              className="absolute -right-4 bottom-0 md:right-0 w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center text-white/40 hover:text-orange-400 hover:border-[#dc1c1c] hover:bg-[#dc1c1c]/10 transition-all duration-300 group shadow-lg"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/50 font-light tracking-wide">
            © 2026 <span className="text-orange-400 font-normal">Eyasin Arafat</span> — All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[12px] text-white/55">
            <span className="w-[6px] h-[6px] rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
            Available for work
          </div>

          <p className="text-[12px] text-white/45">
            Built with <span className="text-[#dc1c1c]">♥</span> & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;