import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      <ul
        className={`w-full flex justify-around text-2xl mb-10 font-black ${props.className}`}
      >
        <li>
          <NavLink to="#about">About Webinar</NavLink>
        </li>
        <li>
          <NavLink to="#highlights">Webinar Highlights</NavLink>
        </li>
        <li>
          <NavLink to="#overview">Webinar Overview</NavLink>
        </li>
        <li>
          <NavLink to="#certificate">Certificate</NavLink>
        </li>
        <li>
          <NavLink to="#faqs">FAQs</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Menu;
