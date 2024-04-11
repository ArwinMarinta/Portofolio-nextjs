import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaGithub, FaSpotify } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

const About = () => {
  return (
    <main className="w-full flex bg-DARK justify-center " id="About">
      <div className="container mt-14">
        <div className="flex lg:flex-row flex-col gap-8 bg-DARK03 py-4 rounded-lg">
          <div className="flex flex-row gap-2 font-bold text-5xl w-full items-center justify-center px-4">
            <span className="text-white">About</span>
            <span className="text-RED01">Me</span>
          </div>
          <div className="flex flex-col px-4">
            <p className="text-white font-semibold text-lg text-justify">
              Hi, Im Arwin Marinta, Im a student at the Kalimantan Institute of
              Technology, Balikpapan, East Kalimantan. I come from the city of Tarakan,
              North Kalimantan. I have an interest in the field of Front-End Web
              Developer. I am an individual who is passionate and committed to the
              development of attractive and responsive user interfaces in the web world.
            </p>

            <p className="mt-4 text-white font-bold border-b-4 border-RED01 max-w-fit text-lg ">
              Social Media
            </p>
            <div className="mt-7 flex flex-row gap-4">
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
    </main>
  );
};

export default About;
