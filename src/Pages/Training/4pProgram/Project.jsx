import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import InfoCard from '@/components/ui/Cards/baseCard/InfoCard';

const Project = () => {
  const info = [
    {
      icon: <i className="fa-solid fa-graduation-cap" />,
      heading: "Expert Instructors",
      description: "Learn from industry experts with years of experience",
    },
    {
      icon: <i className="fa-solid fa-clock" />,
      heading: "Comprehensive Material",
      description: "Access a wide range of study materials and resources.",
    },
    {
      icon: <i className="fa-solid fa-book" />,
      heading: "Flexible Schedule",
      description: "Choose a schedule that fits your lifestyle and commitments.",
    },
  ];

  return (
    <div classname="font-serif">
      {/* Navigation Header */}
      <NavLink to="/home">
        <div className="flex items-center p-8">
          <FaChevronLeft className="text-blue-600 text-2xl mr-2" />
          <h1 className="text-blue-600 font-bold text-xl">
            4P Program / Project
          </h1>
        </div>
      </NavLink>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center bg-blue-500 text-white w-full h-96">
        <h3 className="text-2xl font-semibold">Get Ready for Success</h3>
        <p className="text-center mt-2 max-w-md">
          Join our comprehensive preparation program to excel in your exams and achieve your dreams.
        </p>
        <button className="bg-white text-blue-500 rounded-full px-6 py-2 mt-4 hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
<h1 className='text-center mt-[50px] font-[500]'>Our Programs</h1>

      {/* First InfoCard */}
      <div className='flex justify-center ml-[20px] '>
      <div className="my-8 flex justify-center  ml-[20px] w-[30%] h-[250px]">
        <InfoCard
          title="Program 1"
          description="Our program offers detailed preparation guides for exams to help you succeed.Our program offers detailed preparation guides for exams to help you succeed."
        />
      </div> 
      <div className="my-8 flex justify-center ml-[20px] w-[30%]">
        <InfoCard
          title="Program 2"
          description="Our program offers detailed preparation guides for exams to help you succeed.Our program offers detailed preparation guides for exams to help you succeed."
        />
      </div>
      <div className="my-8 flex justify-center ml-[20px] w-[30%]">
        <InfoCard
          title="Program 3  "
          description="Our program offers detailed preparation guides for exams to help you succeed.Our program offers detailed preparation guides for exams to help you succeed."
        />
      </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-300 py-12 flex flex-col items-center h-96">
        <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {info.map((item, index) => (
            <div key={index} className="p-6 max-w-sm text-center">
              <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
              <h4 className="font-bold text-lg mb-2">{item.heading}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <h2 className='text-center mt-[50px]  text-[40px] font-[500]'>What our Student Says?</h2>

      {/* Second InfoCard */}
      <div className='flex justify-center ml-[20px]  mb-[50px] '>
      <div className="my-8 flex justify-center  ml-[20px] w-[30%] h-[250px]">
        <InfoCard
          title=""
          description="Our program offers detailed preparation guides for exams to help you succeed.Our program offers detailed preparation guides for exams to help you succeed."
        />
      </div> 
      <div className="my-8 flex justify-center ml-[20px] w-[30%]">
        <InfoCard
          title=""
          description="Our program offers detailed preparation guides for exams to help you succeed.Our program offers detailed preparation guides for exams to help you succeed."
        />
      </div>
      <div className="my-8 flex justify-center ml-[20px] w-[30%]">
        <InfoCard
          title=""
          description="Our program offers detailed preparation guides for exams to help you succeed.Our program offers detailed preparation guides for exams to help you succeed."
        />
      </div>
      </div>
    </div>
  );
};

export default Project;
