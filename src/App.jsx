import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import shadcnLogo from "/shadcn.svg";
import jsLogo from "/js.svg";
import tailWind from "/tailwind.svg";
import router from "/router.svg";
import "./App.css";
import { Card } from "./components/ui/Cards/baseCard/card";
import MyCard from "./components/ui/Cards/MentorCard";
import JobCard from "./components/ui/Cards/jobCard";

function App() {
  const cardData = {
    imgUrl: "https://example.com/image.jpg",
    title: "Card Title",
    description: "Software Engineer ",
  };
  return (

    
    <div className="bg-white h-screen w-screen flex items-center justify-center text-slate-200">
      
      <div className="flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col  gap-1">
            
          <MyCard
              imgUrl= "https://media.istockphoto.com/id/1499410369/photo/warning-icon-on-a-digital-lcd-display-with-reflection.jpg?s=1024x1024&w=is&k=20&c=42vxbCN9iL3l7F1EGUmiLPFAg5lOIpmhh3d_LWWioYQ="
              title="Rahul"
              description={cardData.description}
            />
            
          </div>
          <div className="flex flex-col gap-1">
          <JobCard
            jobTitle="Software Engineer"
            location="San Francisco,
            CA"
            description="We are looking for a skilled Software Engineer to join our team."    
            />
          </div>
          <div className="flex flex-col gap-1">
            <a
              href="https://ui.shadcn.com/docs/installation/vite"
              target="_blank"
            >
              <img src={shadcnLogo} className="logo shadcn" alt="ShadCN logo" />
            </a>
            <h1 className="text-3xl font-bold">Shadcn</h1>
          </div>

          <div className="flex flex-col gap-1">
            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src={tailWind}
                className="logo tailwind"
                alt="Tailwind css logo"
              />
            </a>
            <h1 className="text-3xl font-bold text-[#2a8ac1]">Tailwind</h1>
          </div>
          <div className="flex flex-col gap-1">
            <a href="https://reactrouter.com/en/main" target="_blank">
              <img
                src={router}
                className="logo react-router-dom"
                alt="JavaScript logo"
              />
            </a>
            <h1 className="text-3xl font-bold">
              <span className="text-red-500">
                <span className="text-white">React </span> Router
              </span>{" "}
            </h1>
          </div>

          <div className="flex flex-col gap-1">
            <a href="https://www.javascript.com/" target="_blank">
              <img src={jsLogo} className="logo js" alt="JavaScript logo" />
            </a>
            <h1 className="text-3xl font-bold text-yellow-400">Javascript</h1>
          </div>
        </div>
        <br />
        <h2 className="text-2xl  flex items-center flex-row gap-2">
          Starter Template Prepared By{" "}
          <a
            className="font-bold text-amber-700"
            href="https://ezoltech.netlify.app"
          >
            EzolTech
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
