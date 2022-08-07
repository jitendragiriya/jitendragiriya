import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BASE_URL } from "../../constants";
import { notifySuccess } from "../alerts";
import FormLoader from "../FormLoader";

const AddProject = ({ close, datas, setDatas }) => {
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  //update project details
  const handleAdd = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = {
      name,
      tech,
      description,
      link,
    };

    const api = `${BASE_URL}/api/project/add`;
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(api, options);
    const result = await response.json();
    if (result) {
      setLoading(false);
      setDatas([...datas, result]);
      notifySuccess("Project Added Successfully.");
      close();
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-[#00000021] p-4 md:p-8 z-30"
        onClick={close}
      ></div>
      <div className="fixed w-fit h-fit bg-white opacity-100 z-40 overflow-auto mx-auto top-6 left-1/2 -translate-x-1/2 rounded">
        {/* first row */}
        <div className="w-full flex justify-end p-2">
          <button onClick={close} className="text-xl hover:text-red-500">
            <IoMdClose />
          </button>
        </div>

        <form
          onSubmit={handleAdd}
          className="w-full mx-auto p-4 sm:p-6 min-w-[320px] sm:min-w-[400px]"
        >
          <div className="mt-6 relative">
            <input
              type={"text"}
              placeholder={"Project Name"}
              className="outline-none border p-2 w-full border-black"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mt-6 relative">
            <input
              type={"text"}
              placeholder={"Project Tech Used"}
              className="outline-none border p-2 w-full border-black"
              onChange={(e) => setTech(e.target.value)}
              value={tech}
            />
          </div>
          <div className="mt-6 relative">
            <textarea
              type={"text"}
              placeholder={"Project description"}
              className="outline-none border p-2 w-full border-black"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="mt-6 relative">
            <input
              type={"text"}
              placeholder={"Project link"}
              className="outline-none border p-2 w-full border-black"
              onChange={(e) => setLink(e.target.value)}
              value={link}
            />
          </div>
          <button className="uppercase mx-auto bg-blue-500 mt-6 text-white h-10 w-32 font-semibold rounded">
            {loading ? <FormLoader /> : <>add</>}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
