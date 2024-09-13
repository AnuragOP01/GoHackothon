import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const Research = () => {
  const cards = [
    {
      title: "VISION",
      description:
        "The vision is to be a leading provider of education and career placement, empowering individuals and fostering innovation for lifelong success.",
      imgurl: "/src/assets/images/image(1).png", // Path to your image
    },
    {
      title: "MISSION",
      description:
        "The mission is to provide quality education, skill development, and career placement support, fostering growth and lifelong success.",
      imgurl: "/src/assets/images/image(3).png", // Path to your image
    },
    {
      title: "VALUES",
      description:
        "The values emphasize integrity, excellence, innovation, and commitment to empowering individuals through education and career support.",
      imgurl: "/src/assets/images/image(4).png", // Path to your image
    },
  ];

  return (
    <div className="font-serif">
      <NavLink to="/home">
        <div className="flex m-8 mt-16">
          <FaChevronLeft className="font-light text-5xl mt-[40px] my-2 mx-2" />
          <h1 className="text-blue-600 font-bold mt-[40px]">Research</h1>
        </div>
      </NavLink>

      <div className="flex w-[100%] justify-center">
        <img className="w-[50%] h-80" src="/src/assets/images/research.png" alt="Research" />
      </div>

    
      <h1
  className=" text-[35px] font-[800] bg-[url('/src/assets/images/image(2).png')] bg-center  bg-contain bg-no-repeat text-white py-8 text-center mt-40 mb-4 relative"
 
  >
  Introduction to Company and Mission
</h1>


<div className='flex justify-center'>
        <div className="grid grid-cols-3 gap-8 mt-[50px]">
          {cards.map((card, index) => (
            <div key={index } className='flex justify-center'>
              {/* Image */}
              <div>
              <img src={card.imgurl} alt={card.title} className="w-[300px] h-[150px] " />
              {/* Card Title */}
              <div  className="bg-gray-100 rounded-md p-6 w-[300px] h-[230px] flex flex-col items-center">
                
              <h2 className="text-xl font-bold mb-4">{card.title}</h2>
              {/* Card Description */}
              <p className="text-gray-700 text-center">{card.description}</p>
            </div>
            </div>
            </div>

          ))}
        </div>
        </div>
        <h2 class="text-[45px] font-bold text-center mt-[90px] mb-14 bg-blue-500 text-white">
        Importance of Continuous Learning
      </h2>

      <div class="grid grid-cols-2 ">
        <div class="flex items-center justify-center ">
          <img
            src="/src/assets/images/lear.jpg"
            alt="Continuous Learning Illustration"
            class="w-full h-[400px]"
          />
        </div>

        <div class="bg-gray-50 rounded-lg  p-6 w-[80%] text-[20px] mt-20">
          <p className=''>
            Continuous learning is crucial for staying ahead in tech. It
            involves constantly updating skills and knowledge to adapt to
            evolving challenges. By embracing continuous learning,
            participants can innovate, solve complex problems, and excel in
            hackathons, turning every challenge into an opportunity for growth
            and development.
          </p>
        </div>
      </div>
      <h2 class="text-[45px] font-bold text-center mt-20 mb-14">
        Benefits of GoHackathon
      </h2>
<div className="flex justify-center">

     
      <img src=" /src/assets/images/image(5).png" className='   mb-16 w-[70%]'></img>
    </div>
      </div>
   
    
  );
};

export default Research;
