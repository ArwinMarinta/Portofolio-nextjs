import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Card_Skill = ({ data }) => {
  return (
    <div className="flex cursor-pointer  hover:bg-DARK03 rounded-[4px] flex-row shadow-2xl border justify-center items-center gap-2 text-white border-white  py-2 px-3">
      <Image src={data.icon} width={20} height={20} alt={data.name} />
      <div className="font-bold">{data.name}</div>
    </div>
  );
};

Card_Skill.propTypes = {
  data: PropTypes.object,
};

export default Card_Skill;
