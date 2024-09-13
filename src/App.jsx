import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/ui/Login/Login";
import About from "./Pages/About/About";
import Carrier from "./Pages/Carrer/Carrier";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import NavFooter from "./components/NavFooter/NavFooter";
import Placement from "./Pages/Training/4pProgram/Placement";
import Preparation from "./Pages/Training/4pProgram/Preparation";
import Professional from "./Pages/Training/4pProgram/Professional";
import Project from "./Pages/Training/4pProgram/Project";
import Workshops from "./Pages/Services/Workshops";
import Webinar from "./Pages/Services/Webinar";
import Placements from "./Pages/Services/Placements";
import Internships from "./Pages/Services/Internships";
import AiAndMl from "./Pages/Training/AdvancedLearning/AiAndMl";
import CyberSecurity from "./Pages/Training/AdvancedLearning/CyberSecurity";
import Testing from "./Pages/Training/AdvancedLearning/Testing";
import Java from "./Pages/Training/FullStack/Java";
import Python from "./Pages/Training/FullStack/Python";
import Mern from "./Pages/Training/FullStack/Mern";
import Figma from "./Pages/Training/UiUx/Figma";
import HtmlCss from "./Pages/Training/UiUx/HtmlCss";
import ReactUi from "./Pages/Training/UiUx/ReactUi";
import Hackathons from "./Pages/Services/Hackathons";
import Projects from "./Pages/Services/Projects";
import StartUpProgram from "./Pages/Services/StartUpProgram";
import Ourmentor from "./Pages/ourmentor/Ourmentor";
import Research from "./Pages/Services/Research";
import Register from "./components/ui/Register/Register";
import Thanku from "./components/ui/Thanku/Thanku";
import Reviews from "./components/ui/Trainer/Reviews";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<NavFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ourmentor" element={<Ourmentor />} />

          <Route path="/services">
            <Route path="worksops" element={<Workshops />} />
            <Route path="webinars" element={<Webinar />} />
            <Route path="placementsupport" element={<Placements />} />
            <Route path="internships" element={<Internships />} />
            <Route path="hackathons" element={<Hackathons />} />
            <Route path="projects" element={<Projects />} />
            <Route path="research" element={<Research />} />
            <Route path="startup" element={<StartUpProgram />} />
          </Route>
          <Route>
            <Route path="Register" element={<Register />} />
            <Route path="Thanku" element={<Thanku />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
          <Route path="/4pprogram">
            <Route path="placement" element={<Placement />} />
            <Route path="preparation" element={<Preparation />} />
            <Route path="professional" element={<Professional />} />
            <Route path="project" element={<Project />} />
          </Route>

          <Route path="/advanced">
            <Route path="aiml" element={<AiAndMl />} />
            <Route path="cybersecurity" element={<CyberSecurity />} />
            <Route path="testing" element={<Testing />} />
          </Route>

          <Route path="/fullstack">
            <Route path="java" element={<Java />} />
            <Route path="python" element={<Python />} />
            <Route path="mern" element={<Mern />} />
          </Route>

          <Route path="/uiux">
            <Route path="figma" element={<Figma />} />
            <Route path="basics" element={<HtmlCss />} />
            <Route path="react" element={<ReactUi />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
