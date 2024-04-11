import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

const Card = ({ data }) => {
  return (
    <div className=" flex flex-col bg-DARK03 py-4 rounded-lg w-full">
      <div className="px-4  flex flex-col gap-4">
        <Image src={data.image} alt="Picture Project" className="w-full rounded-md" />
        <span className="text-YELLOW01 font-bold flex text-center justify-center">
          {data.tittle}
        </span>
        <span className="flex text-white text-justify">{data.describe}</span>
        <div className="flex flex-row justify-between w-full items-center mt-4">
          <div className="text-RED01 text-sm">{data.tool}</div>
          <div className="flex items-center gap-2">
            <button className="bg-DARK p-[6px] rounded-full">
              <FaGithub className="text-white" />
            </button>
            <button className="p-[6px] bg-DARK rounded-full ">
              <HiExternalLink className="text-white " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
