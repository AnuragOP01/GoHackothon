import React from 'react'
import Para from '@/components/ui/Paragraph/Para';
import Button from '@/components/ui/Button/Button';
import Faqs from '@/components/ui/Faqs/Faqs';
import Card from '@/components/ui/Cards/Cards';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
const Workshops = () => {
 let name = ["Full stack web Development" ,"Python Development","Java Development"];

  return (
    <div className="font-serif">
      <NavLink to="/home">
      <div className="flex m-8">
            <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
            <h1 className=" text-blue-600 font-bold">Workshops</h1>
          </div>
      </NavLink>

      <div className="flex justify-evenly">
        <Para
          className="w-2/5 text-3xl m-10 text-blue-900 h-96"
          text="Unlock your potential and hone your skills with our dynamic workshops designed to inspire and empower."
          names={name}
        />
        <img
          src="/src/assets/images/workshop.png"
          alt="Workshop"
          className="h-96"
        ></img>
      </div>
      <div className="text-center">
        {" "}
        <Button text="weekdays" className="px-4" />
        <div className="flex justify-evenly">
          <Card
            imgurl="/src/assets/images/full stack.svg"
            topic="Full stack Development"
            text="Slot:"
            time1="10:00AM to 01:00PM"
            time2="02:00PM to 05:00PM"
            to="/Ourmentor"
          />
          <Card
            imgurl="/src/assets/images/java.png"
            topic="Java Development"
            text="Slot:"
            time1="10:00AM to 01:00PM"
            time2="02:00PM to 05:00PM"
            to="/Ourmentor"
          />
          <Card
            imgurl="/src/assets/images/python.png"
            topic="Python Development"
            text="Slot:"
            time1="10:00AM to 01:00PM"
            time2="02:00PM to 05:00PM"
            to="/Ourmentor"
          />
        </div>
        <div className="text-left m-14">
          <h1 className="text-3xl ml-10 text-blue-600">
            Benefits of Attending Our Workshops:
          </h1>
          <li className="ml-20 mt-4 text-2xl">
            Gain valuable skills and knowledge.
          </li>
          <li className="ml-20 text-2xl">
            Learn from experienced instructors and industry professionals.
          </li>
          <li className="ml-20 text-2xl">
            Network with other participants and expand your professional circle.
          </li>
          <li className="ml-20 text-2xl">
            Receive a certificate of completion.
          </li>
        </div>
        <Button text="FAQs" className="px-8" />
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
}

export default Workshops