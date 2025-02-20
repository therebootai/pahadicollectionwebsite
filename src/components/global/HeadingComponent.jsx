import React from "react";

const HeadingComponent = ({ heading1, heading2, heading3, heading4 }) => {
  return (
    <div className="">
      <h1 className="xlg:text-3xl md:text-[1.7rem] text-2xl font-medium text-custom-darkgreen">
        {heading1}{" "}
        <span className=" bg-gradient-to-r from-[#E59434] to-[#7F521D] text-transparent bg-clip-text">
          {heading2}
        </span>{" "}
        {heading3}{" "}
        <span className=" bg-gradient-to-r from-[#E59434] to-[#7F521D] text-transparent bg-clip-text">
          {heading4}
        </span>
      </h1>
    </div>
  );
};

export default HeadingComponent;
