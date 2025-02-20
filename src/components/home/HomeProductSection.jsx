import React from "react";
import HeadingComponent from "../global/HeadingComponent";
import useElementHeight from "@/hooks/useElementHeight";
import ProductDesignCard from "../card/ProductDesignCard";
import Image from "next/image";

const HomeProductSection = () => {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  const products = [
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
  ];
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col xl:gap-8 gap-6">
      <div className="flex justify-center items-center">
        <HeadingComponent
          heading1={"Your"}
          heading2={"Style,"}
          heading3={"Our"}
          heading4={"Collection"}
        />
      </div>
      <div className="flex flex-row gap-4">
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
        <div
          ref={leftSideRef}
          className="xlg:w-[85%] lg:w-[80%] w-full grid grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-3 xlg:gap-5"
        >
          {products.map((item, index) => (
            <div key={index} className="h-fit relative">
              <ProductDesignCard
                productimg={item.productimg}
                producthoverimg={item.producthoverimg}
                productname={item.productname}
                productDiscount={item.productDiscount}
                productprice={item.productprice}
                productMRP={item.productMRP}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProductSection;
