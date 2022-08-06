import React from "react";
import { TbExternalLink } from "react-icons/tb";

const ProjectCard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data ? (
        <div className="w-full bg-white shadow-md rounded-sm">
          {/* first row */}
          <div className="flex w-full justify-between items-center border-b p-4 pb-2">
            <div className="text-4xl">
              <data.Icon />
            </div>
            <div className="text-blue-500 font-semibold text-2xl">
              <a target={"_blank"} href={data.link}>
                <TbExternalLink />
              </a>
            </div>
          </div>
          {/* second row */}
          <div className="p-4 pt-2">
            <div className="text-xl font-semibold capitalize text-gray-800">
              {data.name}
            </div>
            <div className="text-gray-600 mt-1 font-serif">
              &emsp;&emsp;
              {data.description}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectCard;
