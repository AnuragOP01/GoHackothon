import React from 'react'
import Para from '@/components/ui/Paragraph/Para';
import Button from '@/components/ui/Button/Button';
import Faqs from '@/components/ui/Faqs/Faqs';
import Card from '@/components/ui/Cards/Cards';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
const Hackathons = () => {
 let name = ["Full stack web Development" ,"Python Development","Java Development"];

  return (
    <div className='font-serif'> 
        <NavLink to="/home">
          <div className="flex m-8">
            <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
            <h1 className=" text-blue-600 font-bold">Hackathons</h1>
          </div>
          </NavLink>    <div className='flex justify-evenly'>
          <Para className='w-2/5 text-3xl m-10 text-blue-900 h-96' text="Unlock the secrets to success in our exclusive hachathon series designed to elevate your skills and knowledge." names={name}/>
          <img src="/src/assets/images/hackathone.png" alt="Workshop" className='h-96'></img>
          </div> 
          <div className='text-center'> <Button text="weekdays"/>
          <div className='flex justify-evenly'>
            <Card imgurl="/src/assets/images/full stack.svg" topic="Full stack Development" text="Slot:" time1="10:00AM to 01:00PM" time2="02:00PM to 05:00PM"  to='/Register'/>
            <Card imgurl="/src/assets/images/java.png" topic="Java Development" text="Slot:" time1="10:00AM to 01:00PM" time2="02:00PM to 05:00PM" to="/Register"/>
            <Card imgurl="/src/assets/images/python.png" topic="Python Development" text="Slot:"  time1="10:00AM to 01:00PM" time2="02:00PM to 05:00PM" to="/Register"/>
          </div>
          <Button text="FAQs"/>
        </div>
        <div className='mt-20 mb-20 w-4/5 m-auto'>
    <Faqs que="What topics will be covered in the Hackathons?" ans="Hackathon topics include coding, problem-solving, innovation, collaboration, design, AI, web development, data analysis, IoT, and blockchain solutions." />
      <Faqs que="Is there a cost to attend the Hackathons?" ans="Hackathon attendance costs vary, but many are free; others may charge for registration, materials, or accommodations." />
      <Faqs que="How do I access the Hackathon on the day of the event?" ans="Access the Hackathon via event website, virtual platform, or physical venue with registration confirmation or code. "/>
      <Faqs que="Will the Hackathons be recorded for later viewing?" ans="Some Hackathons are recorded for later viewing, but it depends on the organizers and event format." />
   </div>
    </div>
  )
}

export default Hackathons