import Link from "next/link";
import React from "react";

const SkillCard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data ? (
        <div className="w-full bg-[#fff7ed] shadow-md rounded-xl px-3 py-2">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-xl capitalize font-semibold">{data.name}</h2>
            <p className="text-sm bg-green-700 rounded px-2 text-white">
              {data.special}
            </p>
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-3xl">
              <data.Icon />
            </div>
            <div className="text-blue-500 font-serif">
              <a target={"_blank"} href={data.link} rel="">
                view profile
              </a>
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
