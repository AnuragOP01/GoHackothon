import React, { useState } from 'react';
import { FaHome, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import goLogo from './../../../assets/images/Go-Hackthon.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleTraining = () => {
    setServicesOpen(false); // Close services dropdown if open
    setTrainingOpen(!trainingOpen); // Toggle training dropdown
  };

  const toggleServices = () => {
    setTrainingOpen(false); // Close training dropdown if open
    setServicesOpen(!servicesOpen); // Toggle services dropdown
  };

  const closeDropdowns = () => {
    setTrainingOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className='Navbar mt-10 flex justify-around relative'>
      <img src={goLogo} alt="hg" height="200px" />
      <nav className="w-[830px] h-[70px] bg-[#0071D1] rounded-full flex items-center justify-center relative z-50">
        <ul className="flex list-none items-center text-white text-lg space-x-6 mr-5 relative">
          <li className="flex items-center">
            <NavLink to='/'>
            <button className='bg-white text-[#0071D1] px-10 py-2 rounded-full'>
              <FaHome className="text-[25px]" />
            </button>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/about" className="hover:underline">About Us</NavLink>
          </li>

          {/* Training Dropdown */}
          <li onClick={toggleTraining} className="cursor-pointer flex items-center relative">
            Training {trainingOpen ? (
              <FaChevronDown className="text-sm ml-1" />
            ) : (
              <FaChevronUp className="text-sm ml-1" />
            )}

            {/* Dropdown Menu */}
            {trainingOpen && (
              <div className="absolute top-full left-0 w-[200px] bg-white mt-3 text-black shadow-lg rounded-md p-4 space-y-2 z-50">
                <NavLink to='/4pprogram/placement' className="block hover:underline text-center">placement</NavLink>
                <NavLink to='/4pprogram/preparation' className="block hover:underline text-center">preparation </NavLink>
                <NavLink to='/4pprogram/professional' className="block hover:underline text-center">professional </NavLink>
                <NavLink to='/4pprogram/project' className="block hover:underline text-center">project </NavLink>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li onClick={toggleServices} className="cursor-pointer flex items-center relative">
            Services {servicesOpen ? (
              <FaChevronDown className="text-sm ml-1" />
            ) : (
              <FaChevronUp className="text-sm ml-1" />
            )}

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full left-0 w-[200px] mt-3 bg-white text-black shadow-lg rounded-md p-4 space-y-2 z-50">
                <NavLink to="/services/worksops" className="block hover:underline  text-center">Worksops</NavLink>
                <NavLink to="/services/webinars" className="block hover:underline  text-center">Webinars</NavLink>
                <NavLink to="/services/placementsupport" className="block hover:underline  text-center">Placement Support</NavLink>
                <NavLink to="/services/internships" className="block hover:underline  text-center">Internships</NavLink>
              </div>
            )}
          </li>

          <li className="flex items-center">
            <NavLink to="/carrier" className=" hover:underline">carrier</NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
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
