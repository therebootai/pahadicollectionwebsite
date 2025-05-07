"use client";
import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ThinkToBuySection = () => {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" xl:p-16 lg:p-8 p-4 flex flex-col md:flex-row gap-6 md:gap-4 xlg:gap-8">
      <div
        className="md:w-[60%] w-full"
        style={{ height: isSmallScreen ? "20rem" : `${rightSideHeight}px` }}
      >
        <Image
          src={"/images/thinkbuyimg.png"}
          alt=""
          width={2220}
          height={1780}
          className=" h-full rounded-sm object-cover"
        />
      </div>
      <div className="md:w-[40%] w-full" ref={leftSideRef}>
        <div className="flex justify-center items-center rounded-sm  ">
          <div className="relative w-full h-full rounded-sm shadow-lg ">
            <div
              className="absolute w-full h-full bg-cover bg-center rounded-sm "
              style={{ backgroundImage: "url('/images/thinkbuybg.png')" }}
            >
              <div className="absolute w-full h-full bg-custom-green bg-opacity-80 rounded-sm "></div>
            </div>
            <div className=" flex flex-col gap-4 justify-center items-center relative xl:p-8 xlg:p-6 lg:p-4 p-2">
              <div className="xlg:h-[6rem] h-[5rem] lg:w-[50%] w-[60%] relative">
                <Image
                  src={"/images/pahadicollectionlogodown.png"}
                  alt=""
                  fill
                  className=""
                />
              </div>
              <h1 className=" text-2xl font-medium text-white text-center ">
                Are Think Buy Our Products
              </h1>
              <p className=" text-center text-white text-base md:text-sm lg:text-base xlg:text-lg">
                Pahadi Collection ensures the highest quality in every piece,
                meticulously crafted by skilled artisans. With a commitment to
                excellence, they use premium materials and fine techniques,
                guaranteeing durability and elegance. As one of the
                fastest-growing jewellery brands, Pahadi Collection continues to
                redefine timeless beauty and customer satisfaction.
              </p>
              <div className=" grid grid-cols-2 lg:gap-6 gap-4 xlg:gap-8 w-full">
                <button className=" h-[3rem] w-full flex justify-center items-center rounded-sm bg-gradient-to-r from-custom-gold to-custom-darkgold md:text-sm text-base lg:text-lg text-white font-medium">
                  Arrange a Call
                </button>
                <Link
                  className=" h-[3rem] w-full flex justify-center items-center rounded-sm bg-gradient-to-r from-custom-gold to-custom-darkgold md:text-sm text-base lg:text-lg text-white font-medium"
                  href="/products?page=1"
                >
                  Explorer Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkToBuySection;
