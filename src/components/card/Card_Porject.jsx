import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className=" flex flex-col bg-DARK03 hover:bg-[#2e3142] py-4 rounded-lg w-full cursor-pointer">
      <div className="px-4  flex flex-col gap-4">
        <Image src={data?.image} alt="Picture Project" className="w-full rounded-md" />
        <span className="text-YELLOW01 font-bold flex text-center justify-center">
          {data?.tittle}
        </span>
        <div className="flex text-white text-justify">
          <span className="line-clamp-3 hover:line-clamp-none">{data?.describe}</span>
        </div>
        <div className="flex flex-row justify-between w-full items-end mt-4 ">
          <div className="flex flex-row gap-4">
            {data.tool.map((datas) => (
              <div key={datas.id}>
                <Image src={datas.image} alt="" width={20} height={20} />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 ">
            <Link
              href={data?.pathGit}
              target="_blank"
              className="bg-DARK p-[6px] rounded-full"
            >
              <FaGithub className="text-white" />
            </Link>
            <Link
              href={data?.pathApp}
              target="_blank"
              className="p-[6px] bg-DARK rounded-full "
            >
              <HiExternalLink className="text-white " />
            </Link>
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
