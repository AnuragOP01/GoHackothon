import React, { useState } from "react";
import people from "@/assets/images/Frame34.png";
import card1 from "@/assets/images/Rectangle 35.png";
import card2 from "@/assets/images/Rectangle 36.png";
import card3 from "@/assets/images/Rectangle 53.png";
import card4 from "@/assets/images/picture4.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CourseCard from "@/components/ui/Cards/CourseCard";
import Faqs from "@/components/ui/Faqs/Faqs";
import Button from "@/components/ui/Button/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Internships = () => {
  const navigate = useNavigate();

  const cards = [
    { img: card1, name: "Cloud Development" },
    { img: card2, name: "Web Development - MERN Stack" },
    { img: card3, name: "Business Development" },
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
    <div>
      <div className=" flex mt-4">
        <div className="flex flex-col just between w-1/2">
        <NavLink to="/home">
          <div className="flex m-8">
            <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
            <h1 className=" text-blue-600 font-bold">Internships</h1>
          </div>
          </NavLink>
          <div>
            <h2 className="text-2xl first-letter:text-4xl first-letter:font-bold ml-12">
              Embark on a transformative journey and gain hands-on experience
              through our diverse range of internship opportunities.
            </h2>
          </div>
        </div>
        <div>
          <img src={people} className="mr-16" alt="people" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-2 my-8 ">
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
                    className={`flex-shrink-0 w-[34%] duration-500 px-4 ${
                      !isVisible ? "opacity-0" : ""
                    }`}
                  >
                    <CourseCard
                      onclick={Change}
                      img={partner.img}
                      CourseName={partner.name}
                      btnName="Apply"
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

      <div className="w-full flex justify-center my-20">
        <Button text="FAQ's" className="px-10 m-auto " />
      </div>

      <div className="w-[80%] m-auto my-8 mb-16 footer grid gap-y-6 bg-transparent mt-10">
        <Faqs
          que="What topics will be covered in the webinar?"
          ans="Register on our website following the event page instructions for easy sign-up."
        />
        <Faqs
          que="Is there a cost to attend the webinar?"
          ans="Our events cover a variety of topics, including industry trends, personal development, and specialized skills training."
        />
        <Faqs
          que=" Are the webinars and training workshops free to attend?"
          ans="Most events are free, although some may require a registration fee for specialized workshops or premium content."
        />
        <Faqs
          que="How do I access the webinar on the day of the event?"
          ans="Simply log in to your account at the scheduled time to access the live session."
        />
        <Faqs
          que="Will the webinar be recorded for later viewing?"
          ans="Yes, recordings are typically provided after the event for participants to review at their convenience."
        />
      </div>
    </div>
  );
};

export default Internships;
