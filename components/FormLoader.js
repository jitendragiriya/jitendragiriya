import React from "react";

const FormLoader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-transparent my-0">
      <div className="h-7 w-7 rounded-full border-4 border-white border-t-transparent animate-spin relative"></div>
    </div>
  );
};

export default FormLoader;
