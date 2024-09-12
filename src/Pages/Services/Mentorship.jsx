import React from 'react'
import { NavLink } from 'react-router-dom'

const Mentorship = () => {
  return (
    <div className='font-serif'>
       <NavLink to="/home"><h2 className='text-3xl m-10 text-blue-500'><i class="fa-solid fa-arrow-left"></i> StartUp Mentorship Program</h2></NavLink>   
       <div className='bg-blue-500 w-full h-auto flex text-white'>
        <div className='w-2/4 m-auto '>
        <h1 className='text-5xl m-10'><span className='text-6xl'>G</span>row your </h1>
        <h1 className='text-5xl m-10'><span className='text-6xl'>S</span>tartup faster with 1:1 </h1>
        <h1 className='text-5xl m-10'><span className='text-6xl'>M</span>entorship </h1>
        </div>
        <div className=' w-3/5 flex flex-wrap '>
        <div className='mt-14 mb-14 grid gap-y-4 '>
          <img src="/src/assets/images/career guidance.avif" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white' />
          <img src="/src/assets/images/emergingtech.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white'/>
          <img src="/src/assets/images/fs.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white '/>
          <img src="/src/assets/images/image 86.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white '/>
          </div>
          <div className='m-8 grid gap-y-4'>
          <img src="/src/assets/images/image 87.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white'/>
          <img src="/src/assets/images/image 88.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white'/>
          <img src="/src/assets/images/image 89.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white'/>
          <img src="/src/assets/images/ai.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white' />
          </div>
          <div className='mt-14 mb-14 grid' >
          <img src="/src/assets/images/picture1.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white'/>
          <img src="/src/assets/images/picture2.png" alt=" "className='w-48 h-44 rounded-3xl  shadow-lg shadow-black hover:shadow-white' />
          <img src="/src/assets/images/picture3.png" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white' />
          <img src="/src/assets/images/python.jpg" alt="" className='w-48 h-44 rounded-3xl shadow-lg shadow-black hover:shadow-white'/>
          </div>
        </div>
       </div>
       <div className='text-left p-4 mt-10 text-2xl grid gap-y-2 list-none items-center bg-green-100 w-full'>
       <h1 className='text-3xl text-blue-600'>WITH 40+ GROWTH MENTORS JUST A CLICK AWAY, YOU CAN:</h1>
      <li><i class="fa-solid fa-check text-blue-600 ml-10 mt-4"></i>  Get your ideas validated so you’re blazing with confidence</li>
      <li><i class="fa-solid fa-check  text-blue-600 ml-10" ></i>  Get personalized advices on your growth strategy</li>
      <li><i class="fa-solid fa-check  text-blue-600 ml-10 "></i>  Get clarity on things you’re struggling with</li>
      <li><i class="fa-solid fa-check  text-blue-600 ml-10"></i>  Get a virtual shoulder to sob on + practicle advice on how to more forward</li>
          </div>
      <img src="/src/assets/images/startup.png"></img>
    </div>
  )
}

export default Mentorship
