import React from 'react';

const Card = () => {
  return (
    <div className="flex justify-center items-center rounded-lg bg-white">
      <div className="border-2 border-gray-300 h-[400px] w-72 m-12 rounded-lg  p-4">
        <img
          src={`https://media.istockphoto.com/id/1499410369/photo/warning-icon-on-a-digital-lcd-display-with-reflection.jpg?s=1024x1024&w=is&k=20&c=42vxbCN9iL3l7F1EGUmiLPFAg5lOIpmhh3d_LWWioYQ=`}
          alt="Image"
          className="mt-2 mx-auto h-1/2 w-64 object-cover"
        />
        <h3 className="text-left mt-4 text-xl font-semibold">Career Guidance Webinar</h3>
        <p className="mt-2 ml-2 text-sm">
          Slot: <span className="text-blue-600 font-medium">10:00AM to 11:00AM</span> <br />
          Slot: <span className="text-blue-600 font-medium">10:00AM to 11:00AM</span>
        </p>
        <h4 className=" w-10 mt-2 ml-2 text-white bg-red-600 font-semibold">• Live</h4>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 ml-auto block">
          <a href="webinar career.html">Register</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
