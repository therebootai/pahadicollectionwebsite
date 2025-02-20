import React from "react";
import HeadingComponent from "../global/HeadingComponent";
import Image from "next/image";
import ShopByCategoryCard from "../card/ShopByCategoryCard";
import useElementHeight from "@/hooks/useElementHeight";

const ShopByCategory = ({ categories }) => {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col xlg:gap-8 gap-6">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="relative w-fit text-center flex flex-col gap-2  justify-center items-center">
          <HeadingComponent
            heading1={"Shop By"}
            heading2={"Category"}
            heading3={"for Your"}
            heading4={"Style"}
          />

          {/* Icon Positioned Below the Heading */}
          <div className="relative w-[60%] h-[0.8rem] ">
            <Image src={"/images/headingicon.png"} alt="" fill className="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div
          ref={leftSideRef}
          className="xlg:w-[85%] lg:w-[80%] w-full grid grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-3 xlg:gap-5"
        >
          {categories.map((item, index) => (
            <div key={index} className="h-full">
              <ShopByCategoryCard
                categoryLink={"/"}
                categoryimg={item.categoryImage.secure_url}
                catgeoryName={item.mainCategory}
              />
            </div>
          ))}
        </div>
        <div
          className="xlg:w-[15%] lg:w-[20%] lg:flex hidden"
          style={{ height: `${rightSideHeight}px` }}
        >
          <div className=" w-full h-full">
            <Image
              src="/images/productbg.png"
              alt=""
              width={918}
              height={3870}
              className=" h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
