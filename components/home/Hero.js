import React from "react";
import { projects, social } from "../../database";
import MainPhoto from "./MainPhoto";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";

const Hero = () => {
  return (
    <div className="max-w-7xl p-4 mx-auto flex items-center flex-col">
      <MainPhoto />
      <div className="w-full grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 sm:mt-6 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {social.map((data, index) => {
          return <SkillCard key={index} data={data} />;
        })}
      </div>
      <div className="w-full my-4 text-center text-2xl uppercase font-semibold">projects</div>
      <div className="w-full grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Hero;
