import React from "react";
import {BrowserRouter,  Routes, Route } from "react-router-dom";
import Login  from "./components/ui/Login/Login";
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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<NavFooter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/contact" element={<ContactUs />} />


          <Route path="/services">
            <Route path="worksops" element={<Workshops />} />
            <Route path="webinars" element={<Webinar />} />
            <Route path="placementsupport" element={<Placements />} />
            <Route path="internships" element={<Internships />} />
          </Route>

          <Route path="/4pprogram" >
            <Route path="placement" element={<Placement />} />
            <Route path="preparation" element={<Preparation />} />
            <Route path="professional" element={<Professional />} />
            <Route path="project" element={<Project />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
