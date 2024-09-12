import React from 'react'
import Para from '@/components/ui/Paragraph/Para';
import Button from '@/components/ui/Button/Button';
import Trainingcard from '@/components/ui/Cards/Trainingcard';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
const Trainings = () => {
 let name = ["FULL STACK DEVELOPMENT" ,"UI / UX Designing ","Advance Learnings" ,"Professional Development",
 ];
 let images ={
    a:'/src/assets/images/python.png',
    b:'/src/assets/images/java.png',
    c:'/src/assets/images/mern.png',
    d:'/src/assets/images/htmlcss.svg',
    e:'/src/assets/images/figma.svg',
    f:'/src/assets/react.svg',
    g:'/src/assets/images/cybersecurity.svg',
    h:'/src/assets/images/softwareTesting.svg',
    i:'/src/assets/images/aiMl copy.svg',
    j:'/src/assets/images/communication.svg',
    k:'/src/assets/images/university.png',
    l:'/src/assets/images/finishing.svg'
 }

  return (
    <div className='font-serif'> 
        <NavLink to="/home">
          <div className="flex m-8">
            <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
            <h1 className=" text-blue-600 font-bold">Trainings</h1>
          </div>
          </NavLink>    <div className='flex justify-evenly'>
          <Para className='w-2/5 text-3xl m-10 text-blue-900 h-96' text="Unlock the secrets to success in our exclusive training series designed to elevate your skills and knowledge" names={name}/>
          <img src="/src/assets/images/TWimage1.png" alt="Workshop" className='h-96'></img>
          </div> 
          <div className='text-center'> 
          <Button text="weekdays"/>
          <div className='mt-20'>
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className='ml-14 text-4xl'>Full Stack Development</h1>
      </div>
            <div className='flex justify-evenly'>
          <Trainingcard  img={images.a} topic="PYTHON FULL STACK DEVELOPMENT" to="/Ourmentor"/>
          <Trainingcard  img={images.b} topic="JAVA FULL STACK DEVELOPMENT" to="/Ourmentor" />
          <Trainingcard  img={images.c} topic="MERN FULL STACK DEVELOPMENT" to="/Ourmentor"/>
          </div>
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className='ml-14 text-4xl'>UI / UX Designing</h1>
      </div>
          <div className='flex justify-evenly'>
          <Trainingcard  img={images.d} topic="HTML, CSS & JAVASCRIPT" to="/Ourmentor"/>
          <Trainingcard  img={images.e} topic="FIGMA" to="/Ourmentor"/>
          <Trainingcard  img={images.f} topic="REACT JS" to="/Ourmentor"/>
          </div>
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className='ml-14 text-4xl'>Advance Learnings</h1>
      </div>
          <div className='flex justify-evenly'>
          <Trainingcard  img={images.g} topic="CYBER SECURITY" to="/Ourmentor"/>
          <Trainingcard  img={images.h} topic="TESTING" to="/Ourmentor"/>
          <Trainingcard  img={images.i} topic="AI & ML" to="/Ourmentor"/>
          </div>
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className='ml-14 text-4xl'>Professional Development</h1>
      </div>
          <div className='flex justify-evenly'>
          <Trainingcard  img={images.j} topic="COMMUNICATION SKILLS & APTITUDE " to="/Ourmentor"/>
          <Trainingcard  img={images.k} topic="ENTRY UNIVERSITY PROGRAM" to="/Ourmentor"/>
          <Trainingcard  img={images.l} topic="FINISHING UNIVERSITY PROGRAM" to="/Ourmentor" />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Trainings