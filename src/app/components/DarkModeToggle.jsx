// components/DarkModeToggle.js
"use client";
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the user's preferred color scheme on page load
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
    <button
      className={` w-fit h-fit ${
        isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
      } rounded-full px-3 py-2 text-[14px]`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <SunIcon className='h-6 w-6'/> : <MoonIcon className='h-6 w-6'/>} 
    </button>
  );
};

export default DarkModeToggle;
