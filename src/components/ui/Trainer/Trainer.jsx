import React from 'react';
import { FaStar, FaStarHalfAlt, FaPenNib } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';

const Trainer = ({ image , position , description , exxperience , className }) => {
  return (
    <div className={`flex flex-col lg:flex-row lg:justify-around justify-evenly mb-16 lg:mb-40 ${className}`}>
      <div className="bg-blue-600 w-full lg:w-2/3 rounded-tl-full rounded-br-full text-white p-8 flex flex-col items-center">
        <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-6">
          <img src={image} alt="Trainer" className="w-full h-full object-cover bg-center" />
        </div>
        <div className="text-center lg:text-left p-20">
          <p className="text-2xl lg:text-3xl font-bold">Rahul Srinath</p>
          <p className="mt-4 text-lg lg:text-xl">
            Designation: {position ? <>{position}</>:<>Academic Counseling Expert</>}
          </p>
          <p className="mt-2 text-base lg:text-lg w-[75%]">
          Description: {description ?<> {description} </> : <> Rahul Srinath is an Academic Counseling Expert who has guided thousands of students in planning and choosing their professional careers.</>}
          </p>
          <p className="mt-4 text-lg lg:text-xl text-left">
            Experience: {exxperience ? <>{exxperience}</>:<>10+ years</>}
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 text-center lg:text-left flex flex-col justify-center">
        <div className="text-3xl font-black">
          <p>Rates & Reviews</p>
        </div>
        <div className="mt-4 text-blue-500 text-2xl flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <BsStar />
        </div>
        <button className="mt-6 border-2 border-black py-2 px-6 rounded-2xl text-xl font-semibold hover:bg-black hover:text-white transition duration-300">
          <FaPenNib className="inline-block mr-2" /> Write a Review
        </button>
      </div>
    </div>
  );
};

export default Trainer;
