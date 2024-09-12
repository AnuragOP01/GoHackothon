import React, { useState, useEffect } from "react";

const defaultPartners = [
  "/../../../../public/router.svg",
  "/images/partner2.png",
  "/images/partner3.png",
  "/images/partner4.png",
  "/images/partner5.png",
];

const Our_Partners = ({ imgArray }) => {
  const partners = imgArray && imgArray.length > 0 ? imgArray : defaultPartners;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [partners]);

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      {/* Navigation Dots */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2 mt-[20px]">
        {partners.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
            style={{ border: "none" }} // Remove default border
          ></button>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Our Partners
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-full px-4">
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="w-full h-24 object-cover bg-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{ fontSize: "1.5rem" }}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{ fontSize: "1.5rem" }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Our_Partners;
