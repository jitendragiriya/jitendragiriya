import React, { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import AddProject from "../components/project/AddProject";
import EditProjectCard from "../components/project/EditProjectCard";
import { BASE_URL } from "../constants";

const projects = (props) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.data) {
      setDatas(props.data);
      setLoading(false);
    }
  }, [props.data]);

  return (
    <>
      {!loading ? (
        <div className="bg-[#fefefe71] w-full relative min-h-screen p-4">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 mt-4 sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {datas.map((project) => {
              return <EditProjectCard data={project} key={project._id} />;
            })}
            <button
              className="w-full h-10 bg-gray-300 font-semibold text-white rounded-sm"
              onClick={() => setOpen(true)}
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
      {open ? (
        <AddProject
          close={() => setOpen(false)}
          datas={datas}
          setDatas={setDatas}
        />
      ) : (
        <></>
      )}
    </>
  );
};

//getting serveside props
export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/api/projects`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default projects;
