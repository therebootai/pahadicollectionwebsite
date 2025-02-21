import Link from "next/link";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const FilterSection = ({ categories }) => {
  return (
    <div className=" flex flex-col border border-[#cccccc] rounded-sm ">
      <div className="flex flex-col ">
        <div className=" h-[3.5rem] px-6 flex justify-between w-full items-center bg-custom-light-gray text-xl font-medium text-custom-darkgreen">
          <h1 className="  ">Category</h1>
          <span>
            <IoMdArrowDropdown />
          </span>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {categories.map((item, index) => (
            <Link
              href={""}
              key={index}
              className=" text-lg text-custom-black hover:text-transparent hover:bg-gradient-to-r bg-clip-text from-custom-darkgold to-custom-gold"
            >
              &#x2022; {item.mainCategory}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
