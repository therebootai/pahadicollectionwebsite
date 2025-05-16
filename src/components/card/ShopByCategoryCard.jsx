import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopByCategoryCard = ({ categoryimg, catgeoryName, categoryLink }) => {
  return (
    <div className="flex flex-col rounded hover:shadow-custom-light duration-300 !h-full">
      <div className=" relative h-[13rem] md:h-[15rem] w-full ">
        <Image
          src={categoryimg}
          alt={catgeoryName}
          fill
          className="object-cover rounded-t"
        />
      </div>
      <div className="p-4 flex-grow justify-between rounded rounded-t-none flex flex-col gap-4 border-x border-b border-[#2222221A]  items-center">
        <div className="text-base lg:text-lg text-custom-darkgreen font-medium text-center">
          {catgeoryName}
        </div>
        <Link
          href={categoryLink}
          className="h-[2rem] bg-custom-yellow px-4 text-base font-medium text-custom-darkgreen rounded flex justify-center items-center"
        >
          Explore &#x2192;
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;
