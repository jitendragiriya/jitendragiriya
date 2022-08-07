import React, { useState } from "react";

import { SiDjango } from "react-icons/si";
import { FaReact, FaRegEdit } from "react-icons/fa";
import { TbBrandNextjs, TbExternalLink } from "react-icons/tb";
import ProjectEditModal from "./ProjectEditModal";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { BASE_URL } from "../../constants";

const EditProjectCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  //close
  const close = () => {
    setOpen(false);
  };

  //delete project
  const deleteProject = async (projectId) => {
    const api = `${BASE_URL}/api/project/delete`;
    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId }),
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

export default EditProjectCard;
