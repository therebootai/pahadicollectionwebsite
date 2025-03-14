"use client";
import { removeWishlist, updateWishlist } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductDesignCard = ({
  productId,
  productimg,
  producthoverimg,
  productname,
  productprice,
  productMRP,
  productDiscount,
}) => {
  const { user, isAuthenticated, dispatch } = useContext(AuthContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (user?.wishlist?.some((item) => item._id === productId)) {
      setIsWishlisted(true);
    } else {
      setIsWishlisted(false);
    }
  }, [user?.wishlist, productId]);

  const handleWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      toast.error("You Are not loged in");

      return;
    }

    try {
      if (isWishlisted) {
        const data = await removeWishlist(user.customerId, productId);
        setIsWishlisted(false);

        dispatch({
          type: "LOGIN",
          payload: { ...user, wishlist: data.wishlist },
        });
      } else {
        const data = await updateWishlist(user.customerId, productId);
        setIsWishlisted(true);
        toast.success("Wishlist added");

        dispatch({
          type: "LOGIN",
          payload: { ...user, wishlist: data.wishlist },
        });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

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
          <div className="lg:h-[2rem] h-[1.7rem] bg-custom-yellow text-custom-darkgreen text-xs lg:text-sm xlg:text-base font-medium flex justify-center items-center px-2 lg:px-4 rounded-full whitespace-nowrap">
            &#8377; {Math.floor(productprice)}
          </div>
          <div className="text-custom-gray text-xs sm:text-sm xlg:text-base font-medium line-through truncate">
            &#8377; {Math.floor(productMRP)}
          </div>

          <div className="text-custom-green text-xs lg:text-sm xlg:text-base font-medium">
            {productDiscount}%
          </div>
          <button
            className="text-custom-darkgreen text-lg"
            onClick={handleWishlist}
          >
            {isWishlisted ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignCard;
