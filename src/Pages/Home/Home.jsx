import Button from "@/components/ui/Button/Button";
import ServiceCard from "@/components/ui/Cards/ServiceCard";
import Faqs from "@/components/ui/Faqs/Faqs";
import Para from "@/components/ui/Paragraph/Para";
import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  let name = ["Hackathons", "Workshop", "Webinar", "Trainings", "Mentiorship"];
  let images = {
    a: "src/assets/images/Workshop-img-services.svg",
    b: "src/assets/images/webiner-img-services.svg",
    c: "src/assets/images/Training-img-services.svg",
    d: "src/assets/images/startup-img-services.svg",
    e: "src/assets/images/hackthons-img-services.svg",
    f: "src/assets/images/internships-img-services.svg",
    g: "src/assets/images/projects-img-services.svg",
    h: "src/assets/images/placement-img-services.svg",
    i: "src/assets/images/research-img-services.svg",
  };
  return (
    <div className="font-serif">
      <div className="flex">
        <Para
          className="w-2/5 text-6xl m-20 text-blue-900 mt-40"
          text="Go Hackathon  Academic Alliance Initiative "
          names={name}
        />
        <img
          src="src/assets/images/hero-section-header-img.svg"
          className="h-96 mt-20"
        ></img>
      </div>
      <div className="text-center mt-28 ">
        <h1>Our Services</h1>
        <div className="flex justify-evenly flex-wrap w-4/5 m-auto mb-20 mt-20">
          <NavLink to="/services/worksops">
            {" "}
            <ServiceCard img={images.a} name="Workshop" />
          </NavLink>
          <NavLink to="/Services/Webinars">
            {" "}
            <ServiceCard img={images.b} name="Webinar" />
          </NavLink>
          <NavLink to="/services/trainings">
            {" "}
            <ServiceCard img={images.c} name="Training" />
          </NavLink>
          <NavLink to="/services/startup">
            {" "}
            <ServiceCard img={images.d} name="Mentorship program" />
          </NavLink>
          <NavLink to="/services/hackathons">
            {" "}
            <ServiceCard img={images.e} name="Hackthons" />
          </NavLink>
          <NavLink to="/services/internships">
            {" "}
            <ServiceCard img={images.f} name="Internship" />
          </NavLink>
          <NavLink to="/services/projects">
            {" "}
            <ServiceCard img={images.g} name="Project" />
          </NavLink>
          <NavLink to="/services/placementsupport">
            {" "}
            <ServiceCard img={images.h} name="Placement" />
          </NavLink>
          <NavLink to="/services/research">
            {" "}
            <ServiceCard img={images.i} name="Research" />
          </NavLink>
        </div>
        <Button text="FAQs" className="px-10" />
      </div>
      <div className="mt-20 mb-20 w-4/6 m-auto">
        <Faqs
          que="How can I register for a webinar or training workshop?"
          ans="Register on our website following the event page instructions for easy sign-up."
        />
        <Faqs
          que=" What topics are covered in the webinars and training workshops?"
          ans="Our events cover a variety of topics, including industry trends, personal development, and specialized skills training."
        />
        <Faqs
          que=" Are the webinars and training workshops free to attend?"
          ans="Most events are free, although some may require a registration fee for specialized workshops or premium content."
        />
        <Faqs
          que=" How do I access the webinar or training workshop on the day of the event?"
          ans="Simply log in to your account at the scheduled time to access the live session."
        />
        <Faqs
          que=" Will recordings be available for the webinars and training workshops?"
          ans="Yes, recordings are typically provided after the event for participants to review at their convenience."
        />
      </div>
    </div>
  );
};

export default Home;
