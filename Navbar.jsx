import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Button from './Button';

const Navbar = () => {
  const [arrow, setArrow] = useState(false);

  const toggle = () => {
    setArrow(!arrow);
  };

  return (
    <div className='Navbar mt-10 flex justify-end'>
      <nav className="w-[830px] h-[70px] bg-[#0071D1] rounded-full flex items-center justify-center">
        <ul className="flex list-none items-center text-white text-lg space-x-6 mr-5">
          <li className="flex items-center">
            <button className='bg-white text-[#0071D1] px-10 py-2 rounded-full'>
              <i className="fa-solid fa-house text-[25px]"></i>
            </button>
          </li>
          <li className="flex items-center">
            <a href='' className="hover:underline">About Us</a>
          </li>
          <li onClick={toggle} className="cursor-pointer flex items-center">
            Training {arrow ? (
              <i className="fa-solid fa-chevron-down text-sm ml-1"></i>
            ) : (
              <i className="fa-solid fa-chevron-up text-sm ml-1"></i>
            )}
          </li>
          <li onClick={toggle} className="cursor-pointer flex items-center">
            Services {arrow ? (
              <i className="fa-solid fa-chevron-down text-sm ml-1"></i>
            ) : (
              <i className="fa-solid fa-chevron-up text-sm ml-1"></i>
            )}
          </li>
          <li className="flex items-center">
            <a href='' className="hover:underline">Career</a>
          </li>
          <li className="flex items-center">
            <a href='' className="hover:underline">Contact Us</a>
          </li>
          <li className="flex items-center">
            <button className='bg-white text-[#0071D1] px-4 py-2 rounded-[10px]'>
              Log In/Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
