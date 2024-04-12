import React from "react";
import PropTypes from "prop-types";

const Card_Skill = ({ data }) => {
  return (
    <div className="flex cursor-pointer hover:bg-DARK03 rounded-sm flex-row shadow-2xl border justify-center items-center gap-2 text-white border-white  py-2 px-3">
      <div>{data.icon}</div>
      <div>{data.name}</div>
    </div>
  );
};

Card_Skill.propTypes = {
  data: PropTypes.object,
};

export default Card_Skill;
