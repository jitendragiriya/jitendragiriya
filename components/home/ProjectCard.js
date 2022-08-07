import React from "react";
import Link from "next/link";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbExternalLink } from "react-icons/tb";

const ProjectCard = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="w-full bg-white shadow-md rounded-sm">
          {/* first row */}
          <div className="flex w-full justify-between items-center border-b p-4 pb-2">
            <div className="text-4xl">
              {data.tech === "django" ? <SiDjango /> : <></>}
              {data.tech === "reactjs" ||
              data.tech === "nodejs" ||
              data.tech === "mern" ? (
                <FaReact />
              ) : (
                <></>
              )}
              {data.tech === "nextjs" ? <TbBrandNextjs /> : <></>}
            </div>
            <div className="text-blue-500 font-semibold text-2xl">
              <Link href={data.link}>
                <a target={"_blank"}>
                  <TbExternalLink />
                </a>
              </Link>
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
