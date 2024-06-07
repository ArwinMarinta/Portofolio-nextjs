import React, { useState } from "react";
import { Button, SkillTech, SkilTools } from "@/data/Skill";
import Card_Skill from "./card/Card_Skill";
export { Button } from "../data/Skill";

const Skill = () => {
  const [type, setType] = useState("Tech Stack");

  const getSkillsByType = () => {
    switch (type) {
      case "Tech Stack":
        return SkillTech.filter(
          (skill) =>
            skill.name === "HTML" ||
            skill.name === "CSS" ||
            skill.name === "JavaScript" ||
            skill.name === "Python" ||
            skill.name === "React js" ||
            skill.name === "Vue js" ||
            skill.name === "Dart" ||
            skill.name === "Flutter" ||
            skill.name === "Express js" ||
            skill.name === "MySQL" ||
            skill.name === "Redux" ||
            skill.name === "Riverpod" ||
            skill.name === "Next js" ||
            skill.name === "Tailwind" ||
            skill.name === "Booststrap"
        );

      case "Tools":
        return SkilTools;
      default:
        return [];
    }
  };
  return (
    <main className="w-full flex justify-center pt-10 bg-DARK " id="Skill">
      <div className="container py-6">
        <span className="text-white font-bold text-5xl border-b-4 border-RED01 max-w-fit">
          Skill
        </span>
        <div className="mt-8 flex gap-2">
          {Button.map((data) => (
            <button
              key={data.id}
              onClick={() => setType(data.name)}
              className={`py-[4px] rounded-md border-white px-3 text-gray-200 font-semibold ${
                type === data.name
                  ? type === "Tech Stack"
                    ? "bg-DARK03"
                    : "bg-DARK03"
                  : ""
              }`}
            >
              {data.name}
            </button>
          ))}
        </div>

        <div className="grid mt-4 lg:grid-cols-5 grid-cols-2 sm:grid-cols-3  gap-6">
          {getSkillsByType().map((data) => (
            <Card_Skill key={data.id} data={data} />
          ))}
        </div>

        {/* <div className=" font-bold mt-8 text-lg text-YELLOW01">Tech Stack:</div>
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
        </div> */}
      </div>
    </main>
  );
};

export default Skill;
