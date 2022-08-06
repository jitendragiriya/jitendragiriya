import Image from "next/image";
import React from "react";
import { imageLoader } from "../../middleware/imageLoader";

const MainPhoto = () => {
  return (
    <div className="h-52 w-52 bg-white relative rounded-full overflow-hidden z-0 border-4 border-black">
      <Image
        loader={imageLoader}
        src={"images/jitendragiriya.jpg"}
        alt="no "
        height={500}
        width={500}
        className="-rotate-2"
      />
    </div>
  );
};

export default MainPhoto;
