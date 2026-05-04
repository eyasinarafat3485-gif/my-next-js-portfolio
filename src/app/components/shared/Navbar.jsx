'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiMenu, BiX, BiHomeAlt, BiUser, BiCodeBlock, BiBriefcase, BiPhone } from 'react-icons/bi';

const navLinks = [
  { id: 1, name: "Home", path: "/", icon: <BiHomeAlt /> },
  { id: 2, name: "About", path: "/about", icon: <BiUser /> },
  { id: 3, name: "Services", path: "/services", icon: <BiCodeBlock /> },
  { id: 4, name: "Projects", path: "/projects", icon: <BiBriefcase /> },
  { id: 5, name: "Contact", path: "/contact", icon: <BiPhone /> }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (

    // h-20 ফিক্সড হাইট দেওয়া হয়েছে যেন নিচের সেকশনে ক্যালকুলেট করা সহজ হয়
    // <nav className={`sticky left-0 w-full h-20 z-[100] flex items-center transition-all duration-500 ease-in-out ${
    //   scrolled ? ' ' : 'bg-transparent'
    // }`}>

    <nav className={`sticky left-0 w-full h-20 z-[100] flex items-center transition-all duration-500 ease-in-out ${scrolled ? '' : 'bg-transparent'
      }`}>
      <div className='relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-12'>

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
        <ul className='hidden md:flex gap-6 lg:gap-8 font-medium'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                onClick={() => setActivePath(link.path)}
                className={`flex items-center gap-2 transition-colors text-lg ${activePath === link.path ? 'text-red-500 font-bold' : 'text-gray-700'
                  }`}
              >
                <span className='hidden lg:block text-xl'>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setOpen(!open)} className='text-3xl text-gray-800 focus:outline-none'>
            {open ? <BiX /> : <BiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <ul className={`
          md:hidden absolute right-3 w-35 bg-white/95 backdrop-blur-xl border border-red-50 flex flex-col gap-1 shadow-2xl rounded-2xl transition-all duration-300 ease-in-out
          ${open ? 'top-[80px] opacity-100 visible' : 'top-[60px] opacity-0 invisible'}
        `}>
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => { setOpen(false); setActivePath(link.path); }}>
              <Link
                href={link.path}
                className={`flex items-center gap-2 text-base font-medium p-1 rounded-sm transition-colors
                ${activePath === link.path ? 'text-red-500 bg-red-50 font-bold' : 'text-gray-800 hover:bg-red-50 hover:text-red-500'}`}
              >
                <span className='text-xl'>{link.icon}</span>
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

