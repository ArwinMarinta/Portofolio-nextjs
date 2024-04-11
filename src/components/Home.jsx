import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import IconHome from "@/assets/arwin.svg";
import Image from "next/image";
import { IoPersonAdd } from "react-icons/io5";

const Home = () => {
  return (
    <main className="w-full h-full lg:h-screen bg-DARK flex justify-center" id="Home">
      <div className="container flex lg:flex-row  flex-col items-center">
        <div className="flex flex-col lg:w-[60%] gap-8">
          <div className="flex flex-row gap-2 font-bold text-3xl">
            <span className="text-RED01">Hello lm,</span>
            <span className="text-white">Arwin Marinta</span>
          </div>
          <div className="flex flex-row font-bold text-6xl gap-2">
            <span className="text-white">Front End </span>
            <span className="text-RED01">Developer</span>
          </div>
          <p className="text-lg text-white max-w-[90%] ">
            A dedicated front-end developer with expertise in creating responsive and
            engaging user interfaces, possessing deep skills, and experience in
            implementing innovative designs to enhance user experience.
          </p>
          <div className="flex flex-row gap-4 ">
            <button className="py-2 px-4 flex flex-row items-center rounded-sm border-2 border-RED01 text-RED01 font-semibold gap-1">
              <IoPersonAdd />
              <span>Hire Me</span>
            </button>
            <button className="py-2 px-4 bg-RED01 rounded-sm text-white flex items-center justify-center font-semibold gap-1">
              <HiOutlineDownload className="font-bold text-xl" />
              <p>Download CV</p>
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:w-[40%] mt-10 lg:mt-0">
          <Image
            src={IconHome}
            width={350}
            height={300}
            alt="Icon"
            className="rounded-xl"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
