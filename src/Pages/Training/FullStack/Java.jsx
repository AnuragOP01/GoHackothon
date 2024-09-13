import Button from "@/components/ui/Button/Button";
import Menu from "@/components/ui/Menu/Menu";
import Trainer from "@/components/ui/Trainer/Trainer";
import Faqs from "@/components/ui/Faqs/Faqs";
import React from "react";

const Java = () => {
  return (
    <div className="font-serif">
    <br></br>
    <Menu className="p-8" />
    <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
      <h1 className="ml-14 text-4xl">Java Full Stack</h1>
    </div>
    <div className="text-left m-12 text-4xl grid gap-y-2">
      <li>
        <span className="font-bold">Topic:</span>Java Full Stack
      </li>
      <li>
        <span className="font-bold">Date:</span> Wednesday, April 24, 2024{" "}
      </li>
      <li>
        <span className="font-bold">Time:</span> 01:00 PM - 2:30 PM EST
      </li>
    </div>
    <div className="text-center">
      <Button text="Regitser" to="/Register" className="p-8" />
    </div>
    <div className="w-4/5 flex justify-between ml-64 m-10" id="about">
      <div></div>
      <div className="bg-[url('/src/assets/images/section-title-bg-odd.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center">
        <h1 className="ml-44 text-4xl">About Mentor</h1>
      </div>
    </div>
    <Trainer image="/src/assets/images/trainer image.png" />
    <div
      className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center"
      id="highlights"
    >
      <h1 className="ml-14 text-4xl">Highlights</h1>
    </div>
    <div className="text-left m-12 ml-32 text-2xl grid gap-y-2 list-none items-center">
      <li>
        <i class="fa-solid fa-check text-blue-600"></i> Introduction and
        welcome
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Overview of the job
        market and current trends
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Resume tips and
        tricks
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Interview strategies
        and best practices
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Q&A session
      </li>
    </div>

    <div
      className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center"
      id="highlights"
    >
      <h1 className="ml-14 text-4xl">What you’ll get</h1>
    </div>
    <div className="text-left m-12 ml-32 text-2xl grid gap-y-2 list-none items-center">
      <li>
        <i class="fa-solid fa-check text-blue-600"></i> Learn from experts and
        gain insights
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Cost-effective and
        flexible option for busy professionals
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Offers networking
        opportunities and access to resources
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Helps you stay
        up-to-date on the latest trends and best practices
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Convenient and
        accessible way to learn new skills and gain knowledge.
      </li>
      <li>
        <i class="fa-solid fa-check  text-blue-600"></i> Q&A session
      </li>
    </div>
    <div
      className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-3/5 h-20 text-white flex items-center"
      id="certificate"
    >
      <h1 className="ml-14 text-4xl">Certificate</h1>
    </div>
    <img
      src="/src/assets/images/certificate.jpg"
      className="m-auto mt-20 mb-20 border-blue-600 border-2 rounded-xl h-96"
    ></img>
    <div className="text-center" id="faqs">
      <Button text="FAQs" className="p-8" />
    </div>
    <div className="mt-20 mb-20 w-4/5 m-auto">
      <Faqs
        que="Why should I take this course?"
        ans="Taking the course enhances your skills, boosts career opportunities, and provides valuable knowledge for personal and professional growth."
      />
      <Faqs
        que="Is this course provided by GoHackathon Online?"
        ans="Yes, GoHackathon Online provides this course, offering hands-on experience and valuable insights for skill development and career growth."
      />
      <Faqs
        que="How do I know more about the course?"
        ans="You can learn more about the course by visiting the official GoHackathon Online website or contacting their support team."
      />
      <Faqs
        que="I could not find a course on this site, what should I do?"
        ans="If you can't find the course, try contacting GoHackathon Online support, or explore similar platforms for relevant courses."
      />
    </div>
  </div>
  )
}

export default Java