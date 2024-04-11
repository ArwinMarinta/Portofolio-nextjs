import React from "react";
import { Projects } from "@/data/Project";
import Card from "@/components/card/Card";

const Project = () => {
  return (
    <main className="w-full flex justify-center  bg-DARK py-8" id="Project">
      <div className="container flex flex-col mt-10">
        <div className="text-white font-bold text-5xl border-b-4 border-RED01 max-w-fit">
          Project
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {Projects.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Project;
