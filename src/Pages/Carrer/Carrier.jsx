import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import MyCard from "@/components/ui/Cards/MentorCard"; // Import your MyCard component
import JobCard from "@/components/ui/Cards/jobCard";
import Our_Partners from "@/components/ui/Out-Partners/Our_Partners";
const Carrier = () => {
  // Data for the cards
  const jobCards = [
    {
      title: "Software Engineer",
      Location: "New Delhi",
      description:
        "We are looking for a skilled software engineer to join our team. You will be responsible for developing high quality applications.",
    },
    {
      title: "Product Manager",
      Location: "New Delhi",
      description:
        "We are seeking a product manager to oversee the development and delivery of innovative software solutions.",
    },
    {
      title: "UX/UI Designer",
      Location: "New Delhi",
      description:
        "Join our design team to create user-centered experiences that are both intuitive and beautiful.",
    },
    {
      title: "Data Analyst",
      Location: "New Delhi",
      description:
        "We are seeking a data analyst to gather insights and help drive data-informed decisions.",
    },
    {
      title: "Marketing Specialist",
      Location: "New Delhi",
      description:
        "Join our marketing team to help promote our brand and products to a wider audience. Join our marketing team to help.",
    },
    {
      title: "DevOps Engineer",
      Location: "New Delhi",
      description:
        "We are looking for a DevOps Engineer to manage our infrastructure and ensure seamless deployment.",
    },
  ];

  return (
    <div className="font-serif">
       <NavLink to="/home">
        <div className="flex m-8">
          <FaChevronLeft className="font-light text-5xl mt-[40px] my-2 mx-2" />
          <h1 className="text-blue-600 font-bold mt-[40px]">Career</h1>
        </div>
      </NavLink>

      <main className="container mx-auto py-6">
        <div className="flex items-center">
          <div className="w-[50%]">
            <h1 className="text-[60px] font-bold mb-4 ml-[50px]">
              <span className="text-[60px] text-blue-600">Build</span>
              <br /> for everyone
            </h1>
            <p className="text-[30px] mb-8 ml-[50px]">
              Find your next job at GoHackathon.
            </p>
          </div>
          <div className="flex justify-end w-[50%]">
            <img
              src="/src/assets/images/career.png"
              className="w-[70%]"
              alt="Career"
            />
          </div>
        </div>

        {/* Job Cards Grid using MyCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-28">
          {jobCards.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              Location={job.Location}
              description={job.description}
            />
          ))}
        </div>
      </main>

      <h1 className="text-center text-[40px] font-[600] m-20">
        Our Mentors
      </h1>
      <div className="flex justify-evenly mb-20 ">
        <MyCard
          imgUrl="/src/assets/images/picture1.png"
          title="Rahul"
          description="Software Architect"
        />
        <MyCard
          imgUrl="/src/assets/images/picture2.png"
          title="Riya"
          description="Tester"
        />
        <MyCard
          imgUrl="/src/assets/images/picture3.png"
          title="Harsha"
          description="DevOps Engineer"
        />
        <MyCard
          imgUrl="/src/assets/images/picture4.png"
          title="Swathi"
          description="UI / UX DESIGNER"
        />
      </div>
      <h1 className="text-center m-28 ">Our Partners</h1>
      <div className="mb-28">
        <Our_Partners />
      </div>
      <h1 className="text-center text-[40px] font-[600] mt-[70px] m-14">
        Working at GoHackathon
      </h1>

      <div className="flex justify-center mt-[10px] mb-20">
        <img
          src="/src/assets/images/career3.png"
          className="w-[50%] mb-[30px] mt-[5px]"
          alt="Career Image"
        />
      </div>
    </div>
  );
};

export default Carrier;
