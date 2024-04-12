import React from "react";
import Navbar from "@/components/Navigation/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Education from "@/components/Education";
import Footer from "@/components/Navigation/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Project />
      <Footer/>
    </>
  );
};

export default Index;
