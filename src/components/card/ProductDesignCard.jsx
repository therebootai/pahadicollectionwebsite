import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ProductDesignCard = ({
  productimg,
  producthoverimg,
  productname,
  productprice,
  productMRP,
  productDiscount,
}) => {
  return (
    <div className="flex flex-col h-fit rounded shadow-custom-light group overflow-hidden">
      <style jsx>{`
        .flip-container {
          perspective: 1000px;
        }
        .flipper {
          transform-style: preserve-3d;
          transition: transform 1s;
        }
        .flip-container:hover .flipper {
          transform: rotateY(180deg);
        }
        .front,
        .back {
          backface-visibility: hidden;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="relative h-[12rem] md:h-[14rem] lg:h-[15rem] xlg:h-[16rem] xl:h-[18rem] w-full flip-container group">
        <div className="relative h-full w-full flipper">
          <div className="front">
            <Image
              src={productimg}
              alt={productname}
              fill
              className="object-cover rounded-t"
            />
          </div>

          <div className="back">
            <Image
              src={producthoverimg}
              alt={productname}
              fill
              className="object-cover  rounded-t"
            />
          </div>
        </div>
        <div className=" absolute -bottom-2 h-[1rem] w-full">
          <Image
            src="/images/producticon.png"
            alt="icon"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="md:p-4 p-2 flex flex-col gap-2">
        <h1 className="xlg:text-lg md:text-base text-[15px]  font-medium text-custom-darkgreen line-clamp-1">
          {productname}
        </h1>
        <div className="flex items-center justify-between">
          <div className="md:h-[2rem] h-[1.7rem] bg-custom-yellow text-custom-darkgreen text-xs md:text-base font-medium flex justify-center items-center px-2 md:px-4 rounded-full">
            &#8377; {productprice}
          </div>
          <div className="text-custom-gray text-xs md:text-base font-medium line-through">
            &#8377; {productMRP}
          </div>
          <div className="text-custom-green text-xs md:text-base font-medium">
            {productDiscount}%
          </div>
          <button className="text-custom-darkgreen text-sm md:text-lg font-medium">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignCard;
