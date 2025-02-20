import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CategoryCard = ({ imgsrc, categoryname }) => {
  return (
    <div className=" relative ">
      <div className=" ">
        <Image
          src={imgsrc}
          alt={categoryname}
          width={918}
          height={1041}
          className=" w-full h-[14rem] md:h-[18rem] xlg:h-[20rem] xl:h-[21rem] xxl:h-[24rem] object-cover"
        />
      </div>
      <div className=" flex justify-end items-end absolute  w-full bottom-0 h-[50%] bg-gradient-to-b from-transparent to-black/50 bg-opacity-35 px-4  ">
        <div className=" flex justify-between items-center text-sm md:text-lg font-medium bg-gradient-to-r from-white to-custom-gold text-transparent bg-clip-text w-full pb-2">
          <h1>{categoryname}</h1>
          <FaArrowRightLong className=" text-white text-sm font-normal" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
