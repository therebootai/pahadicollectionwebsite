import Image from "next/image";
import React from "react";

const SubPageBanner = ({ subbanner }) => {
  return (
    <div className="">
      <Image
        src={subbanner}
        alt=""
        width={1920}
        height={435}
        className="h-full w-full"
      />
    </div>
  );
};

export default SubPageBanner;
