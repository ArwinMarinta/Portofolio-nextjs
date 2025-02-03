import React from "react";
import Navbar from "@/components/Navigation/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Education from "@/components/Education";
import Footer from "@/components/Navigation/Footer";
import Contact from "@/components/Contact";
import Certificate from "@/components/Certificate";
import Experience from "@/components/Experince";

const Index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
