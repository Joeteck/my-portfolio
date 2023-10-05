"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
// import DarkModeToggle from './DarkModeToggle';

import { Bars3Icon, XMarkIcon,  MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import MenuBar from './MenuBar';


const navlinks = [
  {
    title: 'About',
    path: '#',
  },
  {
    title: 'Project',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);



  useEffect(() => {
    const isUserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isUserDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 px-1 bg-opacity-80 bg-[#121212] ${
        isDarkMode ? ' bg-opacity-100 dark-mode' : ''
      }`}
    >
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href={"/"} className='text-2xl md:text-3xl text-white font-semibold'>
          JOETECK
          <h3 className='text-[24px] font-light'>IT CONSULT</h3>
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-2 py-2 border rounded  border-zinc-400 hover:border-white hover:text-white  text-zinc-400'
            >
              <Bars3Icon className='h-6 w-' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-2 py-2 border rounded  border-zinc-400 hover:border-white hover:text-white  text-zinc-400'
            >
              <XMarkIcon className='h-6 w-6' />
            </button>
          )}
        </div>
        <div className='menu hidden md:flex md:w-auto' id='navbar'>
          <ul className='flex  p-4 md:p-0 md:flex-row md:space-x-8'>
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          {/* <button className={` w-fit h-fit ${
              isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
            } rounded-full px-3 py-2 text-[14px]`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <SunIcon className='h-6 w-6'/> : <MoonIcon className='h-6 w-6'/>} 
          </button> */}
        </div>
      </div>
      <div className='absolute block md:hidden right-0'>
        {navbarOpen && <MenuBar links={navlinks} />}
      </div>
    </nav>
  );
};

export default NavBar;
