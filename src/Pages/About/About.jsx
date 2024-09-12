import MyCard from '@/components/ui/Cards/MentorCard'
import Our_Partners from '@/components/ui/Out-Partners/Our_Partners'
import ReadMore from '@/components/ui/ReadMore/ReadMore'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='font-serif'>
        <NavLink to="/home">
          <div className="flex m-8">
            <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
            <h1 className=" text-blue-600 font-bold">About</h1>
          </div>
          </NavLink>     <div className='flex justify-evenly'>
      <div className='w-2/4 text-2xl'>
<p>Empowering your digital journey with expert web development, hands-on workshops, comprehensive training, and dedicated placement support for your career success.</p>
<p className='mt-10'>To create a community of talented and experienced tech professionals who can contribute to the growth of the economy and society.</p>
{/* <ReadMore text="sachin"/> */}
      </div>
      <img src="src/assets/images/About.png" alt="about us" className='h-96'></img>
     </div>
     <div className='flex justify-evenly m-10' >
      <img src="src/assets/images/about2.png" alt="about gohackthone" className='h-96'></img>
      <div>
     <h1 className=''>About GoHackthone</h1>
     <p className='text-xl m-10'>Go Hackathon is a platform that brings together industry professionals, educators, and students to foster talent and innovation. It aims to equip students with advanced skills, software, and industry best practices, and provides a ecosystem for industry-academia partnership to develop impactful ideas. Through a series of events, seminars, hackathons, internships, and projects, Go Hackathon offers nurturing, mentorship, skills, and professional opportunities to its members and participants.</p>
     </div>
     </div>
      <h1 className='text-center'>Our Mentors</h1>
      <div className='flex justify-evenly m-10 '>
        <MyCard imgUrl="src/assets/images/picture1.png" title="Rahul" description="Software Architect"/>
        <MyCard imgUrl="src/assets/images/picture2.png" title="Riya" description="Tester"/>
        <MyCard imgUrl="src/assets/images/picture3.png" title="Harsha" description="DevOps Engineer"/>
        <MyCard imgUrl="src/assets/images/picture4.png" title="Swathi" description="UI / UX DESIGNER"/>
      </div>
      <h1 className='text-center'>Our Partners</h1>
      <div className=''>
        <Our_Partners/>
      </div>
    </div>
  )
}

export default About