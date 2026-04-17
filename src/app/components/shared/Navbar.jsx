'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiMenu, BiX } from 'react-icons/bi';

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/#about" },
  { id: 3, name: "Services", path: "/#services" },
  { id: 4, name: "Projects", path: "/#projects" },
  { id: 5, name: "Contact", path: "/#contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState("/"); // Active path track korar jonno
  const pathname = usePathname();

  // Page load hole ba URL change hole active path set korbe
  useEffect(() => {
    setActivePath(window.location.pathname + window.location.hash);
  }, [pathname]);

  return (
    <nav className='bg-red-100 sticky top-0 z-50 shadow-sm'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-5 relative'>
        
        {/* Logo Section */}
        <div className='flex items-center gap-3'>
          <Link href="/" onClick={() => setActivePath("/")} className='bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0'>
            EA
          </Link>
          <Link href="/" onClick={() => setActivePath("/")} className='text-xl font-bold tracking-tight text-gray-800 uppercase truncate'>
            Eyasin Arafat
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 font-medium'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link 
                href={link.path}
                onClick={() => setActivePath(link.path)}
                className={`transition-colors hover:text-red-500 text-lg ${
                  activePath === link.path ? 'text-red-500 font-bold' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center'>
          <button 
            onClick={() => setOpen(!open)} 
            className='text-3xl text-gray-800'
          >
            {open ? <BiX /> : <BiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <ul className={`
          md:hidden absolute right-3 w-35 bg-white border border-red-100 flex flex-col gap-1 shadow-xl rounded-xl transition-all duration-300 ease-in-out z-50
          ${open ? 'top-[65px] opacity-100 visible' : 'top-[50px] opacity-0 invisible'}
        `}>
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => { setOpen(false); setActivePath(link.path); }}>
              <Link 
                href={link.path}
                className={`block text-base font-medium p-2 rounded-lg transition-colors
                ${activePath === link.path ? 'text-red-500 bg-red-50 font-bold' : 'text-gray-800 hover:bg-red-50 hover:text-red-500'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;