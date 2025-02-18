import React from "react";
import { Projects } from "@/data/Project";
import Card from "@/components/card/Card_Porject";

const Project = () => {
  return (
    <main className="w-full flex justify-center  bg-DARK py-10 " id="Project">
      <div className="container flex flex-col ">
        <div data-aos="fade-right" className="text-white  font-bold text-5xl border-b-4 border-RED01 max-w-fit">
          Project
        </div>
        <div data-aos="fade-up" className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {Projects.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Project;
