import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ text, onClick, to, className, icon }) => {
  return (
    <button
      className={` ${className}  h-16 w-40 text-2xl bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300`}
      onClick={onClick}
    >
      <NavLink to={to}>
        <i class={icon}></i>
        {text}
      </NavLink>
    </button>
  );
};

export default Button;
