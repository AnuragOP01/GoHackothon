import React from "react";

const CourseCard = ({ img, CourseName, onclick, btnName, imgHei }) => {
  return (
    <div className="flex justify-center items-center rounded-lg bg-white">
      <div className="border-2 border-gray-300  w-72  rounded-lg shadow-lg p-2">
        <img
          src={img}
          alt="Image"
          className={`mt-2 object-cover bg-cover min-h-40 rounded-none w-full ${imgHei}`}
        />
        <h3 className="text-left mt-4 text-lg px-4 py-2 h-20 font-semibold text-gray-900">
          {CourseName}
        </h3>

        <button
          onClick={onclick}
          className="bg-[#0071D1] opacity-80 text-white px-12 py-2 rounded-full mb-3 m-auto block"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
