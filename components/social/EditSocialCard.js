import React, { useState } from "react";

//icons
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import { FaRegEdit } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import ProjectEditModal from "./SocialEditModal";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { BASE_URL } from "../../constants";

const EditSocialCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  //close
  const close = () => {
    setOpen(false);
  };

  //delete project
  const deleteProject = async (socialId) => {
    const api = `${BASE_URL}/api/social/delete`;
    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ socialId }),
    };

    const response = await fetch(api, options);
    const result = await response.json();
    if (result) {
      setDeleted(true);
    }
  };

  return (
    <>
      {open ? <ProjectEditModal close={close} data={data} /> : <></>}
      {data ? (
        <div
          className={`w-full bg-white shadow-md rounded-sm z-20 ${
            deleted && "hidden"
          }`}
        >
          {/* first row */}
          <div className="flex w-full justify-between items-center border-b p-4 pb-2">
            <div className="text-4xl">
              {data.name === "leetcode" ? <SiLeetcode /> : <></>}
              {data.name === "geeksforgeeks" ? <SiGeeksforgeeks /> : <></>}
              {data.name === "codestudio" ? <FiCodesandbox /> : <></>}
              {data.name === "linkedin" ? <FaLinkedinIn /> : <></>}
              {data.name === "github" ? <AiFillGithub /> : <></>}
            </div>
            <div className="flex items-center text-2xl">
              <button
                className="text-2xl hover:text-red-500 mr-2"
                onClick={() => deleteProject(data._id)}
              >
                <IoMdClose />
              </button>
              <Link href={data.link}>
                <a target={"_blank"}>
                  <TbExternalLink />
                </a>
              </Link>
              <button
                className="text-blue-500 font-semibold text-2xl ml-2"
                onClick={() => setOpen(true)}
              >
                <FaRegEdit />
              </button>
            </div>
          </div>
          {/* second row */}
          <div className="p-4 pt-2 flex justify-between flex-wrap">
            <div className="text-xl font-semibold capitalize text-gray-800">
              {data.name}
            </div>
            <div className="mt-1 font-serif bg-green-500 w-fit px-4 rounded text-white text-sm">
              {data.special}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditSocialCard;
