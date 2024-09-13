import React from "react";

const Menu = (props) => {
  return (
    <>
      <ul
        className={`w-full flex justify-around text-2xl mb-10 font-black ${props.className}`}
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#highlights">Highlights</a>
        </li>
        <li>
          <a href="#overview">Overview</a>
        </li>
        <li>
          <a href="#certificate">Certificate</a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
