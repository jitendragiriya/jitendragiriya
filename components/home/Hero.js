import React from "react";
import MainPhoto from "./MainPhoto";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";

const Hero = ({projects, socials}) => {
  return (
    <div className="max-w-7xl p-4 mx-auto flex items-center flex-col">
      <MainPhoto />
      <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 sm:mt-6 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {socials.map((data, index) => {
          return <SkillCard key={index} data={data} />;
        })}
      </div>
      <div className="w-full my-4 text-center text-2xl uppercase font-semibold">
        projects
      </div>
      <div className="w-full grid grid-cols-1 mt-4 sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Hero;
