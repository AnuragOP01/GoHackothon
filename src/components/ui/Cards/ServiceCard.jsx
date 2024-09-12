import React from "react";

const ServiceCard = ({ name, img }) => {
  return (
    <div className="h-48 w-80 border-solid border-2 border-blue-900 rounded-3xl mb-10 ml-8 m-auto font-serif">
      <img src={img} alt="Mentor4" className="ml-14 mt-6" />
      <h1 className="text-2xl">{name}</h1>
    </div>
  );
};

export default ServiceCard;
