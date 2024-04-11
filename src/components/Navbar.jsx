import React from "react";
import { DataNav } from "@/data/Navbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-DARK flex justify-center fixed top-0" id="Navbar">
      <div className="container flex flex-row justify-between py-3 ">
        <Link href="/" className="text-RED01  font-extrabold text-2xl">
          Wynn.
        </Link>
        <div className="flex flex-row font-bold text-white gap-6 ">
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
      </div>
    </nav>
  );
};

export default Navbar;
