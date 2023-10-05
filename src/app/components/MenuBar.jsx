import React from 'react'
import NavLink from './Navlink'
import DarkModeToggle from './DarkModeToggle';


const MenuBar = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center  bg-[#121212] bg-opacity-80 h-[100vh]'>
        {links.map((link, index)=>(
            <li key={index} className='px-10 py-4 items-center'>
                <NavLink href={link.path} title={link.title}/>
            </li>
            
        ))}
        <DarkModeToggle /> {/* Add the dark mode toggle button */}
    </ul>
  )
}

export default MenuBar