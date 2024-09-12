import React from 'react';
import { NavLink } from 'react-router-dom';

const Trainingcard = (props) => {
  return (
    <div className="flex justify-center rounded-lg bg-white">
      <div className="border-2 border-gray-300 h-[400px] w-80 m-12 rounded-lg p-2">
        <img
          src={props.img}
          alt="Image"
          className="mt-2 mx-auto h-60 w-64 object-contain"
        />
        <h3 className="text-left mt-4 text-xl ">{props.topic}</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 ml-auto block">
          <NavLink to={props.to}>Register</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Trainingcard;
