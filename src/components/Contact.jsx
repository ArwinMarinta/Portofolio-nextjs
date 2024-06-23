import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaGithub, FaSpotify } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

const Contact = () => {
  return (
    <main className="w-full flex justify-center bg-DARK">
      <div className="container flex flex-col items-center">
        <a
          href="mailto:septianushendra3@gmail.com"
          title="send email to employee"
          target="_blank"
          className="text-blue-600 underline"
        ></a>
        {/* <div className="text-RED01 text-center font-bold text-5xl ">
          Contact <a className="text-white">Me</a>
        </div>
        <span className="text-white">
          Tertarik dengan portofolio saya? anda dapat menghubungi saya melalui sosial
          media di bawah ini.
        </span>
        <div className="flex flex-col gap-4 mt-10">
          <Link href="" className="bg-white p-2 rounded-full hover:bg-[#E4405F] flex ">
            <FaInstagram />
            <p>@wynn_1</p>
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
        </div> */}
      </div>
    </main>
  );
};

export default Contact;
