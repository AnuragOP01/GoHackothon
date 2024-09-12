import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="flex justify-center rounded-lg bg-white">
      <div className="border-2 border-gray-300 h-[400px] w-72 m-12 rounded-lg p-4">
        <img
          src={props.imgurl}
          alt="Image"
          className="mt-2 mx-auto h-1/2 w-64 object-contain"
        />
        <h3 className="text-left mt-4 text-xl font-semibold">{props.topic}</h3>
        <p className="mt-2 text-sm">
          {props.text}{" "}
          <span className="text-blue-600 font-medium">{props.time1}</span>{" "}
          <br />
          {props.text}
          <span className="text-blue-600 font-medium">{props.time2}</span>
        </p>
        <h4 className=" w-20 mt-2 ml-2 text-white bg-red-600 font-semibold">
          • Live
        </h4>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-full mt-4 ml-auto block">
          <NavLink to={props.to}>Register</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Card;
