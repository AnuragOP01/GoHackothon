import React from "react";
import logo from "./../../../assets/images/Go-Hackthon.png";
const Footer = () => {
  return (
    <footer className="bg-[#E4EBF4] text-black py-8 w-full font-serif">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Address Column */}
          <div className="flex flex-col">
            <img src={logo} alt="Company Logo" className="w-40 mb-4" />
            <p className="text-left text-sm">
              India Office: <br />
              H-59, Sector-63, Noida,
              <br />
              U.P, 201301
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h2 className="text-lg font-bold mb-4 pb-2">Company</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="text-lg font-bold mb-4  pb-2">Services</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Budding Tech Professionals
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Startup Tech Assistance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Hackathon Events
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-black">
                  Research & Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="text-lg font-bold mb-4  pb-2">Contact</h2>
            <ul>
              <li className="mb-2 flex items-center">
                <i className="fa-solid fa-phone mr-2 text-black"></i>
                <a href="#" className="hover:underline text-black">
                  +91 99100 18925
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <i className="fa-solid fa-envelope mr-2 text-black"></i>
                <a href="#" className="hover:underline text-black">
                  info@gohackathon.in
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <i className="fa-solid fa-envelope mr-2 text-black"></i>
                <a href="#" className="hover:underline text-black">
                  hr@gohackathon.in
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h2 className="text-lg font-bold mb-4  pb-2">Follow Us</h2>
            <div className="flex space-x-4 text-2xl">
              <a href="#">
                <i className="fa-brands fa-facebook-f text-black hover:text-blue-400 "></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram text-black hover:text-pink-500"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in text-black hover:text-blue-700"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-black">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
