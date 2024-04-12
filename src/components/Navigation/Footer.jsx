import React from "react";

const Footer = () => {
  const curretDate = new Date();
  const Years = curretDate.getFullYear();

  return (
    <div className="w-full bg-DARK flex justify-center py-8">
      <div className="container text-[#F5F5F5] font-bold text-sm justify-center flex">
        © {Years} Arwin Marinta. Copyright Reserved.
      </div>
    </div>
  );
};

export default Footer;
