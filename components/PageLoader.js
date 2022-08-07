import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-transparent flex justify-center items-center">
      <div className="h-9 w-9 flex items-center justify-center bg-transparent">
        <div className="h-full w-full rounded-full border-4 border-cyan-500 border-t-transparent animate-spin relative"></div>
      </div>
    </div>
  );
};

export default PageLoader;
