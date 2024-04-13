import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaGithub, FaSpotify } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import AboutMe from "@/assets/arwin.svg";
import Image from "next/image";

const About = () => {
  return (
    <main className="w-full flex bg-DARK pt-10 justify-center " id="About">
      <div className="container mt-14 ">
        <div className="flex lg:flex-row flex-col gap-8 bg-DARK03 py-6 rounded-lg border-b-4 border-RED01">
          <div className="flex lg:w-[40%] flex-col  gap-2 font-bold text-5xl w-full items-center justify-center px-4">
            <span className="text-white mb-6 lg:hidden font-bold text-5xl flex justify-center">
              About
              <a className="text-RED01">Me</a>
            </span>
            <Image
              src={AboutMe}
              alt="Arwin marinta"
              className="rounded-lg "
              height={300}
              width={300}
            />
          </div>
          <div className="flex flex-col px-4 lg:w-[60%] xl:w-full">
            <span className="text-white hidden font-bold text-5xl lg:flex justify-center">
              About <a className="text-RED01">Me</a>
            </span>
            <p className="text-white font-semibold mt-6 text-lg text-justify lg:pr-8 ">
              Hi, Im Arwin Marinta from Tarakan, North Kalimantan.{" "}
              <a className="ordinal ">6th</a> semester Informatics Engineering student at
              Kalimantan Institute of Technology, Balikpapan, East Kalimantan. I have an
              interest in a career in software development, especially in the front end.
              My ambition is to become an expert in creating attractive and responsive
              user interfaces. I have high passion and enthusiasm in learning the latest
              technology and can work together in a team. I have project experience during
              college such as creating web-based, mobile, and UI/EX applications.
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className="mt-4 text-white font-bold border-b-4 border-RED01 max-w-fit text-lg ">
                Social Media
              </p>
              <div className="mt-6 flex flex-row gap-4">
                <Link href="" className="bg-white p-2 rounded-full hover:bg-[#E4405F]">
                  <FaInstagram />
                </Link>
                <Link href="" className="bg-white p-2 rounded-full hover:bg-[#0077B5] ">
                  <FaLinkedinIn />
                </Link>
                <Link
                  href=""
                  className="bg-white p-2 rounded-full hover:bg-[#181717]  hover:text-white"
                >
                  <FaGithub />
                </Link>
                <Link href="" className="bg-white p-2 rounded-full hover:bg-[#1DB954]">
                  <FaSpotify />
                </Link>
                <Link href="" className="bg-white p-2 rounded-full hover:bg-[#FF69B4]">
                  <SiLinktree />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
