import React from "react";
import { FaStar, FaStarHalfAlt, FaPenNib } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import Button from "../Button/Button";

const Trainer = ({ image, position, description, exxperience, className }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:justify-around justify-evenly font-serif mb-10 lg:mb-20 ${className}`}
    >
      <div className="bg-[url('/src/assets/images/trainerbg.png')] bg-contain bg-no-repeat ml-10 h-96 w-2/4 p-3 text-white">
        <div className="w-40 h-40 rounded-full ml-40">
          <img
            src="/src/assets/images/trainer image.png"
            className="w-36 h-36 rounded-full"
          ></img>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-2xl lg:text-3xl font-bold ml-36">Rahul Srinath</p>
          <p className=" text-lg lg:text-xl">
            Designation:{" "}
            {position ? <>{position}</> : <>Academic Counseling Expert</>}
          </p>
          <p className="mt-2 text-base lg:text-lg w-3/4">
            Description:{" "}
            {description ? (
              <> {description} </>
            ) : (
              <>
                {" "}
                Rahul Srinath is an Academic Counseling Expert who has guided
                thousands of students in planning and choosing their
                professional careers.
              </>
            )}
          </p>
          <p className="mt-4 text-lg lg:text-xl text-left">
            Experience: {exxperience ? <>{exxperience}</> : <>10+ years</>}
          </p>
        </div>
      </div>
      <div className="mt-10 mr-40 lg:mt-0 text-center lg:text-left flex flex-col justify-center">
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
        <Button
          icon="fa-solid fa-pen-nib"
          text="Write a reviews"
          to="/reviews"
          className="w-auto mt-10"
        />
      </div>
    </div>
  );
};

export default Trainer;
