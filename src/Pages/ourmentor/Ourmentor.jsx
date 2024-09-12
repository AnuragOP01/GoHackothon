import Button from '@/components/ui/Button/Button'
import Menu from '@/components/ui/Menu/Menu'
import Trainer from '@/components/ui/Trainer/Trainer'
import Faqs from '@/components/ui/Faqs/Faqs'
import React from 'react'

const Ourmentor = () => {
  return (
    <div className='font-serif'>
      <br></br>
<Menu/>
<div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className='ml-14 text-4xl'>Webinar Schedule</h1>
      </div>
      <div className='text-left m-12 text-4xl grid gap-y-2'>
      <li><span className='font-bold'>Topic:</span>FULL STACK WEB DEVELOPMENT</li>
      <li><span className='font-bold'>Date:</span> Wednesday, April 24, 2024  </li>
      <li><span className='font-bold'>Time:</span> 01:00 PM - 2:30 PM EST</li>
          </div>
          <div className='text-center'>
          <Button text="Regitser" to="/Register"/>
          </div>
          <div className='w-4/5 flex justify-between ml-64 m-10' id="about">
            <div></div>
          <div className="bg-[url('/src/assets/images/section-title-bg-odd.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className='ml-44 text-4xl'>About  Webinar Mentor</h1>
      </div>
      </div>
     <Trainer image="/src/assets/images/trainer image.png"/>
     <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center" id="highlights">
      <h1 className='ml-14 text-4xl'>Webinar  Highlights</h1>
      </div>
      <div className='text-left m-12 ml-32 text-2xl grid gap-y-2 list-none items-center'>
      <li><i class="fa-solid fa-check text-blue-600"></i> Introduction and welcome</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Overview of the job market and current trends</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Resume tips and tricks</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Interview strategies and best practices</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Q&A session</li>
          </div>
          <div className='w-4/5 flex justify-between ml-64' id="overview">
            <div></div>
          <div className="bg-[url('/src/assets/images/section-title-bg-odd.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className='m-auto text-4xl'>What you’ll get</h1>
      </div>
      </div>
      <div className='text-left m-12 ml-32 text-2xl grid gap-y-2 list-none items-center'>
      <li><i class="fa-solid fa-check text-blue-600"></i> Learn from experts and gain insights</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Cost-effective and flexible option for busy professionals</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Offers networking opportunities and access to resources</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Helps you stay up-to-date on the latest trends and best practices</li>
      <li><i class="fa-solid fa-check  text-blue-600"></i> Convenient and accessible way to learn new skills and gain knowledge.</li>
          </div>
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center" id="certificate">
      <h1 className='ml-14 text-4xl'>Webinar Certificate</h1>
      </div>
      <img src="/src/assets/images/hackathon certificate.png" className='m-auto mt-20 mb-20 border-blue-600 border-2 rounded-xl'></img>
      <div className='text-center' id="faqs">
      <Button text="FAQs"/>
      </div>
      <div className='mt-20 mb-20 w-4/5 m-auto'>
    <Faqs que="How do I register for a workshop?" ans="Register on our website following the event page instructions for easy sign-up." />
      <Faqs que="Are there any prerequisites for attending workshops?" ans="Prerequisites for attending workshops vary; some require prior knowledge, while others are open to all skill levels." />
      <Faqs que="Can I get a refund if I need to cancel my registration?" ans="Refund policies for cancellations vary by organizer, typically depending on timing and specific terms set during registration."/>
      <Faqs que="What is the cancellation policy?" ans="Cancellation policies differ, usually offering full or partial refunds if canceled early, but often no refund near the event date." />
      <Faqs que="Will I receive a certificate of completion after attending a workshop?" ans="Many workshops offer certificates of completion, but it depends on the organizer. Check details during registration for confirmation."/>       
    </div>
          </div>
  )
}

export default Ourmentor
