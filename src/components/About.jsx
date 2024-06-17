import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaGithub, FaSpotify } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import AboutMe from "@/assets/arwin.svg";
import Image from "next/image";

const About = () => {
  return (
    <main className="w-full flex bg-DARK pt-10 justify-center " id="About">
      <div className="container mt-14">
        <div
          data-aos="fade-up"
          className="flex lg:flex-row flex-col gap-8 bg-DARK03 py-6 rounded-lg border-b-4 border-RED01"
        >
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
              // data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col px-4 lg:w-[60%] xl:w-full">
            <span
              // data-aos="zoom-in"
              className="text-white hidden font-bold text-5xl lg:flex justify-center"
            >
              About <a className="text-RED01">Me</a>
            </span>
            <p
              // data-aos="fade-left"
              className="text-white indent-10 font-semibold mt-6 text-lg text-justify lg:pr-8 "
            >
              I am Arwin Marinta who is more familiarly called Arwin. I come from Tarakan,
              North Kalimantan. I am currently studying informatics at the Kalimantan
              Institute of Technology, Balikpapan, East Kalimantan. I am currently in my
              <a className="ordinal">3rd</a> year of college. I have high passion and
              enthusiasm in learning new technology and able to work together in a team.
            </p>
            <p
              // data-aos="fade-left"
              className="text-white indent-10o font-semibold mt-6 text-lg text-justify lg:pr-8 "
            >
              I focus my expertise on software development especially in front end. I have
              experience in application development projects using technologies such as
              React.js, Next.js, Tailwind CSS, Flutter, Express.js, redux and github and
              GIT as tools. In addition, I am also skilled in developing responsive
              applications, well accessible on various types of devices.
            </p>
            <div
              // data-aos="fade-up"
              className="flex flex-col justify-center items-center"
            >
              <p className="mt-4 text-white font-bold border-b-4 border-RED01 max-w-fit text-lg ">
                Social Media
              </p>
              <div className="mt-6 flex flex-row gap-4">
                <Link
                  href="https://www.instagram.com/wynnn_1/"
                  target="_blank"
                  className="bg-white p-2 rounded-full hover:bg-[#E4405F]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/arwin-marinta/"
                  target="_blank"
                  className="bg-white p-2 rounded-full hover:bg-[#0077B5] "
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/ArwinMarinta"
                  target="_blank"
                  className="bg-white p-2 rounded-full hover:bg-[#181717]  hover:text-white"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://open.spotify.com/user/31hjabaul3l36cbsftund7fhr6gq?si=iIYsvCvrRrG4o3werXF2XQ&nd=1&dlsi=f7e4445f67674860"
                  target="_blank"
                  className="bg-white p-2 rounded-full hover:bg-[#1DB954]"
                >
                  <FaSpotify />
                </Link>
                <Link
                  href="https://link-tree.arwinmarinta.com"
                  target="_blank"
                  className="bg-white p-2 rounded-full hover:bg-[#FF69B4]"
                >
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
