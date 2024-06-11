import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import IconHome from "@/assets/icon_home.svg";
import Image from "next/image";
import { IoPersonAdd } from "react-icons/io5";
import Link from "next/link";
const { URL_PORTO } = process.env;

const Home = () => {
  return (
    <main className="w-full h-full lg:h-screen bg-DARK flex justify-center" id="Home">
      <div className="container flex lg:flex-row  flex-col items-center mt-20">
        <div data-aos="fade-right" className="flex flex-col lg:w-[60%] gap-8">
          <span className="flex flex-row gap-2 text-RED01 font-bold text-xl lg:text-3xl">
            Hello lm,
            <a className="text-white">Arwin Marinta</a>
          </span>
          <div className=" font-bold text-white text-4xl  md:text-5xl xl:text-6xl gap-2">
            Front End <a className="text-RED01">Developer</a>
          </div>

          <p className="text-lg text-white text-justify lg:max-w-[90%] ">
            A dedicated front-end developer with expertise in creating responsive and
            engaging user interfaces, possessing deep skills, and experience in
            implementing innovative designs to enhance user experience.
          </p>
          <div className="flex flex-row gap-4 ">
            {/* <button className="py-2 px-4 flex flex-row items-center rounded-[4px] border-2 border-RED01 text-RED01 font-semibold gap-1">
              <IoPersonAdd />
              <span>Hire Me</span>
            </button> */}
            <Link
              href={`${URL_PORTO}`}
              target="_blank"
              className="py-2 px-4 bg-RED01 rounded-[4px] text-white flex items-center justify-center font-semibold gap-1"
            >
              <HiOutlineDownload className="font-bold text-xl" />
              <p>Download CV</p>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="lg:flex justify-center lg:w-[40%] mt-10 lg:mt-0 hidden"
        >
          <Image src={IconHome} alt="Icon" className="rounded-xl w-full" />
        </div>
      </div>
    </main>
  );
};

export default Home;
