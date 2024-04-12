import React from "react";
import { SkillTech, SkilTools } from "@/data/Skill";
import Card_Skill from "./card/Card_Skill";

const Skill = () => {
  return (
    <main className="w-full flex justify-center pt-10 bg-DARK " id="Skill">
      <div className="container py-6">
        <span className="text-white font-bold text-5xl border-b-4 border-RED01 max-w-fit">
          --Skill
        </span>

        <div className=" font-bold mt-8 text-lg text-YELLOW01">Tech Stack:</div>
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 mt-2 gap-6">
          {SkillTech.map((data) => (
            <Card_Skill key={data.id} data={data} />
          ))}
        </div>
        <div className=" font-bold mt-6 text-lg text-YELLOW01">Tools:</div>
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 mt-2 gap-6">
          {SkilTools.map((data) => (
            <Card_Skill key={data.id} data={data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skill;
