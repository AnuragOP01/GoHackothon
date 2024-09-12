import React, { useState } from "react";
import people from "@/assets/images/Frame34.png";
import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";
import card4 from "@/assets/images/picture4.png";
import CourseCard from "@/components/ui/Cards/CourseCard";
import Faqs from "@/components/ui/Faqs/Faqs";

import {
  FaAlignRight,
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaLocationArrow,
  FaPaperPlane,
  FaRegBuilding,
} from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { TiTick, TiTickOutline } from "react-icons/ti";

const Projects = () => {
  const navigate = useNavigate();

  const cards = [
    { img: card1, name: "Character Generator" },
    { img: card2, name: "Dashboard" },
    { img: card3, name: "Blog" },
    { img: card4, name: "Data Science" }, // Example additional card
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleCards = 3; // Set the maximum number of cards to show at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + maxVisibleCards < cards.length ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const Change = () => {
    navigate("/home");
  };

  return (
    <div className="font-serif">
      <div className=" flex mt-14">
        <div className="flex flex-col just between w-1/2">
          <NavLink to="/home">
            <div className="flex m-8">
              <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
              <h1 className=" text-blue-600 font-bold">Projects</h1>
            </div>
          </NavLink>
          <div>
            <h2 className="text-2xl mt-10 first-letter:text-4xl first-letter:font-bold px-4 xl:p-0 xl:ml-14 xl:mr-4">
              Explore our diverse portfolio of innovative projects, showcasing
              our expertise and passion for delivering excellence.
            </h2>
          </div>
        </div>
        <div>
          <img src={people} className="mr-16" alt="people" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-2 my-8 mt-60 ">
        <div className="relative w-full mx-auto px-4 py-8">
          <FaChevronLeft
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="font-light text-5xl my-2 m-auto absolute top-1/2 left-14 transform -translate-y-1/2 z-10"
          />
          <div className="relative overflow-hidden w-full">
            <div
              className="w-[80%] mx-auto flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / maxVisibleCards)
                }%)`,
              }}
            >
              {cards.map((partner, index) => {
                const isVisible =
                  index >= currentIndex &&
                  index < currentIndex + maxVisibleCards;
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[34%]  duration-500 px-4 ${
                      !isVisible ? "opacity-0" : ""
                    }`}
                  >
                    <CourseCard
                      onclick={Change}
                      img={partner.img}
                      CourseName={partner.name}
                      btnName="Explore"
                      imgHei="h-52"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <FaChevronRight
            onClick={nextSlide}
            aria-label="Next Slide"
            className="font-light text-5xl my-2 mx-2 absolute top-1/2 right-14 transform -translate-y-1/2 z-10"
          />
        </div>
      </div>

      <div className=" my-20 mt-40">
        <h1 className=" text-center font-bold ">Key Highlights Of Projects</h1>
        <h1 className=" text-blue-600 text-center font-extralight">_______</h1>
        <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
          ___
        </h1>
      </div>

      {/* Project Hightlight Cards */}

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6 w-[80%] m-auto my-20  mb-40">
        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <MdOutlineEdit className="text-white p-4 text-7xl m-auto bg-blue-600 rounded-full" />
          <h1 className="text-lg font-medium text-center translate-y-5">
            Updated Products
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <h1 className="text-center">
            <FaRegBuilding className="text-white p-4 text-7xl m-auto bg-blue-600 rounded-full" />
          </h1>
          <h1 className="text-lg  font-medium text-center translate-y-5">
            Private Sector Focus
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <FaPaperPlane className="text-white text-4xl" />
          </span>
          <h1 className="text-lg  font-medium text-center translate-y-5">
            New Projects
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <TiTick className="text-white text-4xl" />
          </span>

          <h1 className="text-lg  font-medium text-center translate-y-5">
            All Project Types
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <FaBars className="text-white text-4xl" />
          </span>

          <h1 className="text-lg  font-medium text-center translate-y-5">
            Wide Sector Coverage{" "}
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <FaPaperPlane className="text-white text-4xl" />
          </span>

          <h1 className="text-lg  font-medium text-center translate-y-5">
            Real-time Contract
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <FaRegBuilding className="text-white text-4xl" />
          </span>

          <h1 className="text-lg  font-medium text-center translate-y-5">
            Daily Tenders
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <TiTick className="text-white text-4xl" />
          </span>

          <h1 className="text-lg  font-medium text-center translate-y-5">
            Project Stats
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <FaBars className="text-white text-4xl" />
          </span>

          <h1 className="text-lg  font-medium text-center translate-y-5">
            {" "}
            Product Leads
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-extralight -translate-y-10">
            ___
          </h1>
        </div>

        <div className=" max-w-[240px] max-h-[240px] rounded-lg border shadow-inner p-2 pb-12 ">
          <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center m-auto">
            <MdOutlineEdit className="text-white text-4xl" />
          </span>

          <h1 className="text-lg  font-medium text-center translate-y-5">
            Trusted
          </h1>
          <h1 className=" text-blue-600 text-center font-extralight">____</h1>
          <h1 className=" text-blue-600 text-center font-thin -translate-y-10">
            ___
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
