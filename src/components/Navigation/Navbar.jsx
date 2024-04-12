import React from "react";
import { DataNav } from "@/data/Navbar";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiReactjsFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="w-full bg-DARK flex justify-center fixed top-0 z-[999]" id="Navbar">
      <div className="container flex flex-row justify-between py-3 ">
        <Link href="/" className="text-RED01  font-extrabold text-2xl">
          Wynn.
        </Link>
        <div className="md:flex md:flex-row font-bold text-white gap-6 hidden">
          {DataNav.map((data) => (
            <Link
              href={data.path}
              key={data.id}
              className="hover:underline font-bold text-base hover:text-RED01 cursor-pointer"
            >
              {data.name}
            </Link>
          ))}
        </div>
        <button className="md:hidden flex items-center">
          <GiHamburgerMenu className="text-white text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
