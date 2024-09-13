import React, { useState } from 'react';
import Para from '@/components/ui/Paragraph/Para';
import Button from '@/components/ui/Button/Button';
import Faqs from '@/components/ui/Faqs/Faqs';
import Card from '@/components/ui/Cards/Cards';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const Placements = () => {
  const [showMore, setShowMore] = useState(false);
  const name = ["Unstop", "HackerEarth"];
  const cards = [
    { imgurl: "/src/assets/images/full stack.svg", topic: "Full stack Development", company: "Company A", salary: "50,000 USD", status: "Open", skills: "React, Node.js", city: "New York" },
    { imgurl: "/src/assets/images/java.png", topic: "Java Development", company: "Company B", salary: "60,000 USD", status: "Open", skills: "Java, Spring", city: "San Francisco" },
    { imgurl: "/src/assets/images/python.png", topic: "Python Development", company: "Company C", salary: "55,000 USD", status: "Closed", skills: "Python, Django", city: "Austin" },
    { imgurl: "/src/assets/images/full stack.svg", topic: "Full stack Development", company: "Company A", salary: "50,000 USD", status: "Open", skills: "React, Node.js", city: "New York" },
    { imgurl: "/src/assets/images/java.png", topic: "Java Development", company: "Company B", salary: "60,000 USD", status: "Open", skills: "Java, Spring", city: "San Francisco" },
    { imgurl: "/src/assets/images/python.png", topic: "Python Development", company: "Company C", salary: "55,000 USD", status: "Closed", skills: "Python, Django", city: "Austin" },
  ];

  const visibleCards = showMore ? cards : cards.slice(0, 3);

  return (
    <div className="font-serif">
      <div className="flex mt-12 ">
      <div className="flex flex-col justify-evenly items-start">
      <NavLink to="/home">
        <div className="flex m-8">
          <FaChevronLeft className="font-light text-5xl mt-[40px] my-2 mx-2" />
          <h1 className=" text-blue-600 font-bold mt-[40px]">Placement Support</h1>
        </div>
      </NavLink>
        <Para
          className="w-4/5 text-2xl m-10 text-blue-900"
          text="The GoHackathon offers strong placement support by connecting participant with top companies through hiring challenges and providing networking opportunities with industry professionals. This leads to direct job placement and internship for outstanding candidates."
          names={name}
        /></div>
        <img
          src="/src/assets/images/placement.png"
          alt="Workshop"
          className="h-96 mt-14"
        />
        </div>

      <div className="text-center">
        <Button text="weekdays" className="px-4 h-[60px] w-[200px] mb-[100px] mt-20" />
        <div className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-center">
          {visibleCards.map((card, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4 w-[350px] h-[520px] mx-2 my-4">
              <img src={card.imgurl} alt={card.topic} className="w-full"/>
              <div className="mt-3 text-left  ">
                <h3 className="text-[20px] font-bold">{card.topic}</h3>
                <p className='text-[15px]'><strong>Company:</strong> {card.company}</p>
                <p className='text-[15px]'><strong>Salary:</strong> {card.salary}</p>
                <p className='text-[15px]'><strong>Status:</strong> {card.status}</p>
                <p className='text-[15px]'><strong>Skills:</strong> {card.skills}</p>
                <p className='text-[15px]'><strong>City:</strong> {card.city}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-white-500 text-black border-4  px-4 py-2 rounded-[40px]">View JD</button>
                <button className="bg-blue-500 text-white px-5 py-3 rounded-[40px]">Apply Now</button>
              </div>
            </div>
          ))}
          </div>
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-blue-500 text-white px-10 py-3 text-xl rounded-[40px] mt-20"
          style={{ width: '200px', height: '60px' }}
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>

      <div className="mt-20 mb-20 w-4/5 m-auto">
        <Faqs
          que="How do I register for a workshop?"
          ans="Register on our website following the event page instructions for easy sign-up."
        />
        <Faqs
          que="Are there any prerequisites for attending workshops?"
          ans="Prerequisites for attending workshops vary; some require prior knowledge, while others are open to all skill levels."
        />
        <Faqs
          que="Can I get a refund if I need to cancel my registration?"
          ans="Refund policies for cancellations vary by organizer, typically depending on timing and specific terms set during registration."
        />
        <Faqs
          que="What is the cancellation policy?"
          ans="Cancellation policies differ, usually offering full or partial refunds if canceled early, but often no refund near the event date."
        />
        <Faqs
          que="Will I receive a certificate of completion after attending a workshop?"
          ans="Many workshops offer certificates of completion, but it depends on the organizer. Check details during registration for confirmation."
        />
      </div>
    </div>
  );
};

export default Placements;
