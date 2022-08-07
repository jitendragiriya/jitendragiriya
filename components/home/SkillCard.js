import Link from "next/link";
import React from "react";
//icons
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SkillCard = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="w-full bg-white shadow-md rounded-md px-3 py-2">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-xl capitalize font-semibold">{data.name}</h2>
            <p className="text-sm bg-green-700 rounded px-2 text-white">
              {data.special}
            </p>
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-3xl">
              {data.name === "leetcode" ? <SiLeetcode /> : <></>}
              {data.name === "geeksforgeeks" ? <SiGeeksforgeeks /> : <></>}
              {data.name === "codestudio" ? <FiCodesandbox /> : <></>}
              {data.name === "linkedin" ? <FaLinkedinIn /> : <></>}
              {data.name === "github" ? <AiFillGithub /> : <></>}
            </div>
            <div className="text-black font-serif shadow-md px-4 rounded bg-gray-100">
              <Link href={data.link}>
                <a target={"_blank"}>view profile</a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SkillCard;
