import React, { useState } from "react";
import { Button, SkillTech, SkilTools } from "@/data/Skill";
import Card_Skill from "./card/Card_Skill";
export { Button } from "../data/Skill";

const Skill = () => {
  const [type, setType] = useState("Frontend");

  const getSkillsByType = () => {
    switch (type) {
      case "Languages":
        return SkillTech.filter((skill) => ["Python", "JavaScript", "TypeScript", "Dart"].includes(skill.name));

      case "Frontend":
        return SkillTech.filter((skill) => ["HTML", "CSS", "React js", "Vue js", "Next js", "Tailwind", "Booststrap", "Redux", "Flutter", "Bloc", "Riverpod", "Django"].includes(skill.name));

      case "Backend":
        return SkillTech.filter((skill) => ["Express js", "Django", "MySQL", "Nest js", "Prisma", "Sequelize", "TypeORM", "Postgresql"].includes(skill.name));

      case "Tools":
        return SkilTools;

      default:
        return [];
    }
  };
  return (
    <main className="w-full flex justify-center pt-10 bg-DARK " id="Skill">
      <div className="container py-6">
        <div data-aos="fade-left" className="text-white font-bold text-5xl border-b-4 border-RED01 max-w-fit">
          Skill
        </div>
        <div data-aos="fade-right" className="flex flex-col">
          <div className="mt-8 flex gap-2">
            {Button.map((data) => (
              <button key={data.id} onClick={() => setType(data.name)} className={`py-[4px] rounded-md border-white px-3 text-gray-200 font-semibold ${type === data.name ? (type === "Tech Stack" ? "bg-DARK03" : "bg-DARK03") : ""}`}>
                {data.name}
              </button>
            ))}
          </div>

          <div className="grid mt-4 lg:grid-cols-5 grid-cols-2 sm:grid-cols-3  gap-6">
            {getSkillsByType().map((data) => (
              <Card_Skill key={data.id} data={data} />
            ))}
          </div>
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
