import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-6 py-4 bg-gradient-to-r from-orange-300 to-orange-500 text-white'>
      <ul className='flex gap-7 items-center px-3'>
        {[
          { name: 'Home', path: '/' },
          // { name: 'About Me', path: '/About-me' },
          { name: 'Add Recipe', path: '/Add-Recipe' }
        ].map((item, index) => (
          <li key={index} className='font-bold text-lg cursor-pointer relative overflow-hidden group'>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => `relative z-10 ${isActive ? 'border-b-2 border-white' : ''}`}
            >
              {item.name}
            </NavLink>
            <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>
        ))}
      </ul>
      <div className="logo">
        <h1 className='font-extrabold mr-7 border border-4 p-3 rounded-full bg-orange-400'>Cook-Nest</h1>
      </div>
    </nav>
  );
};

export default Navbar;
