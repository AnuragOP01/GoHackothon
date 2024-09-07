import React, { useState } from "react";
import { FaHome, FaChevronDown, FaChevronUp } from "react-icons/fa";
import goLogo from "./../../../assets/images/Go-Hackthon.png";
import { NavLink } from "react-router-dom";
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

  return (
    <div className="Navbar mt-10 flex justify-around relative">
      <img src={goLogo} alt="hg" className=" bg-cover object-cover bg-center max-h-20 aspect-auto" />
      <nav className="w-[830px] h-[70px] bg-[#0071D1] rounded-full flex items-center justify-center relative z-50">
        <ul className="flex list-none items-center text-white text-lg space-x-6 mr-5 relative">
          <li className="flex items-center">
            <NavLink to="/home">
              <button className="bg-white text-[#0071D1] px-10 py-2 rounded-full">
                <FaHome className="text-[25px]" />
              </button>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/about" className="hover:underline">
              About Us
            </NavLink>
          </li>

          {/* Training Dropdown */}
          <li
            onClick={toggleTraining}
            className="cursor-pointer flex items-center relative"
          >
            Training{" "}
            {trainingOpen ? (
              <FaChevronDown className="text-sm ml-1" />
            ) : (
              <FaChevronUp className="text-sm ml-1" />
            )}
            {/* Dropdown Menu */}
            {trainingOpen && (
              <div className="absolute top-full left-0 lg:w-[300px] bg-white mt-3 text-black shadow-lg rounded-md p-2 space-y-1 z-50">
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    4P Program
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/4pprogram/placement"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Placement
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/4pprogram/preparation"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Preparation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/4pprogram/professional"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Professional
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/4pprogram/project"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Project
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
                {/* Full Stack Development */}
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    Full Stack Development
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/fullstack/python"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Python Full Stack
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/fullstack/java"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Java Full Stack
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/fullstack/mern"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            MERN Full Stack
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
                {/* UI/UX */}
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    UI/UX Designing
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/uiux/basics"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            HTML, CSS & JS
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/uiux/figma"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Figma
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/uiux/react"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            React
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
                {/* Advanced Learnings */}
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    Advanced Learnings
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/advanced/cybersecurity"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Cyber Security
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/advanced/testing"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Testing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/advanced/aiml"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            AI & ML
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            onClick={toggleServices}
            className="cursor-pointer flex items-center relative"
          >
            Services{" "}
            {servicesOpen ? (
              <FaChevronDown className="text-sm ml-1" />
            ) : (
              <FaChevronUp className="text-sm ml-1" />
            )}
            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full left-0 lg:w-[300px] mt-3 bg-white text-black shadow-lg rounded-md p-2 space-y-1 z-50">
                <NavLink
                  to="/services/worksops"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Workshops
                </NavLink>
                <NavLink
                  to="/services/webinars"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Webinars
                </NavLink>
                <NavLink
                  to="/services/placementsupport"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Placement Support
                </NavLink>
                <NavLink
                  to="/services/internships"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Internships
                </NavLink>
                <NavLink
                  to="/services/trainings"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Trainings
                </NavLink>
                <NavLink
                  to="/services/hackathons"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Hackathons
                </NavLink>
                <NavLink
                  to="/services/projects"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/services/startup"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  StartUp Mentorship Program
                </NavLink>
              </div>
            )}
          </li>

          <li className="flex items-center">
            <NavLink to="/carrier" className=" hover:underline">
              carrier
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/contact" className="hover:underline">
              Contact Us
            </NavLink>
          </li>
          <li className="flex items-center">
            <button className="bg-white text-[#0071D1] px-4 py-2 rounded-[10px]">
              Log In/Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
