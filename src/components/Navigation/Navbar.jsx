import React, { useState } from "react";
import { DataNav } from "@/data/Navbar";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiReactjsFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

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
        <button className="md:hidden flex items-center" onClick={handleOpenSidebar}>
          <GiHamburgerMenu className="text-white text-2xl" />
        </button>
        <div
          className={`lg:hidden w-1/2 h-full  ${
            openSidebar ? "block" : "hidden"
          } fixed top-0 right-0  bg-DARK03 z-50 px-8 py-3 shadow-md`}
        >
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center text-white font-bold text-xl">
              <span>Wynn.</span>
              <button onClick={handleOpenSidebar}>
                <IoClose className="text-3xl font-bold" />
              </button>
            </div>
            <div className="flex flex-col mt-6 gap-2 ">
              {DataNav.map((data) => (
                <Link
                  onClick={handleOpenSidebar}
                  href={data.path}
                  key={data.id}
                  className="hover:underline text-white font-bold text-base hover:text-RED01 cursor-pointer"
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
