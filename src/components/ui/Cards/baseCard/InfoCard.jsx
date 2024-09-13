import React from 'react';

const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className=" flex justify-center">
      <button className="  text-blue-500 font-bold py-2 px-4 rounded mt-4">
        Read More
      </button>
      </div>
    </div>
  );
};
  
export default InfoCard;
