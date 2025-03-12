import { addToCart } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import EasyReplacement from "@/svg/easyReplacement";
import EasyReturn from "@/svg/easyReturn";
import FreeShiping from "@/svg/freeShiping";
import GanuineProduct from "@/svg/ganuineProduct";
import LiveAssistance from "@/svg/liveAssistance";
import PaymentOption from "@/svg/paymentOption";
import SecuredShoping from "@/svg/securedShoping";
import VideoMeet from "@/svg/vieoMeet";
import Link from "next/link";
import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const ProductDetailsPageNameSection = ({
  title,
  mrp,
  price,
  discount,
  slug,
  productId,
  isWishlisted,
  handleWishlist,
  stock,
}) => {
  const benifits = [
    {
      icon: <FreeShiping className={"size-4 lg:size-5"} />,
      name: "Free Shipping ",
    },
    {
      icon: <EasyReplacement className={"size-4 lg:size-5"} />,
      name: "Easy Replacement",
    },
    {
      icon: <SecuredShoping className={"size-4 lg:size-5"} />,
      name: "Secured Shopping",
    },
    {
      icon: <EasyReturn className={"size-4 lg:size-5"} />,
      name: "7 Days Return",
    },
    {
      icon: <GanuineProduct className={"size-4 lg:size-5"} />,
      name: "Genuine Product",
    },
    {
      icon: <PaymentOption className={"size-4 lg:size-5"} />,
      name: "Multi Payment Options",
    },
  ];

  const { user, dispatch } = useContext(AuthContext);

  async function addProductToCart() {
    try {
      const cartAdded = await addToCart(user._id, productId, 1);
      if (cartAdded.message) {
        throw new Error(cartAdded.response.data.message);
      }
      toast.success("Product added to Cart");
      dispatch({
        type: "LOGIN",
        payload: { ...user, cart: cartAdded },
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  return (
    <div className=" flex flex-col gap-4  ">
      <h1 className="xlg:text-3xl md:text-2xl text-xl font-semibold text-custom-darkgreen ">
        {title}
      </h1>
      <div className=" flex items-center gap-2 md:gap-4">
        <div className="  h-[2.5rem] md:h-[3rem] w-[8rem] md:w-[10rem] flex justify-center items-center bg-custom-light-gray  text-custom-gray rounded-sm text-sm ">
          MRP{" "}
          <span className=" line-through ml-1 md:ml-2"> &#8377; {mrp} </span>
        </div>
        <div className=" h-[2.5rem] md:h-[3rem] w-fit md:px-5 xlg:px-6 xl:px-8 px-4  flex justify-center items-center bg-custom-light-gray  text-custom-darkgreen rounded-sm md:text-lg text-base ">
          Price &#8377; {price}
        </div>
        <div className=" h-[2.5rem] md:h-[3rem] w-[4rem] md:w-[6rem] flex justify-center items-center bg-[#00B368]  text-white rounded-full text-sm md:text-lg ">
          {discount}% Off
        </div>
      </div>
      <div className=" flex items-center gap-2 md:gap-4">
        <div className=" flex gap-1 items-center text-base md:text-lg text-custom-gold">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalfOutline />
          <IoStarOutline />
        </div>
        <h1 className=" text-sm md:text-lg  text-custom-darkgold">
          4.6 - (110) Reviews
        </h1>
        <div className=" text-custom-darkgreen text-sm md:text-lg flex items-center md:gap-1">
          <IoMdRadioButtonOn />
          Coupon
        </div>
      </div>
      <div className=" flex md:flex-row flex-col  gap-4">
        <div className=" h-[2.5rem] md:h-[3rem] w-[8rem] md:w-[10rem] flex justify-center items-center bg-custom-light-gray  text-custom-darkgreen rounded-sm text-sm md:text-lg ">
          In Stock {stock}
        </div>
        <form className=" flex items-center gap-2">
          <input
            type="text"
            placeholder="Pin Code"
            className=" h-[2.5rem] md:h-[3rem] w-[60%] md:w-[12rem] flex justify-center items-center bg-transparent border border-[#CCCCCC] outline-none px-2  text-custom-darkgreen rounded-sm text-sm md:text-lg "
          />
          <button className="h-[2.5rem] md:h-[3rem] w-[40%] md:w-[10rem] flex justify-center items-center bg-custom-yellow  text-custom-darkgreen rounded-sm text-sm md:text-lg">
            Check Delivery
          </button>
        </form>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        {benifits.map((item, index) => (
          <div key={index} className="flex flex-row items-center gap-2">
            <span className=" size-8 lg:size-10 rounded-full bg-gradient-to-b from-[#00292A] to-[#008D90] flex justify-center items-center  ">
              {item.icon}
            </span>
            <h1 className=" lg:text-lg text-sm ">{item.name}</h1>
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-2 gap-4">
        <div className="flex flex-row items-center gap-2">
          <span className="   ">
            <VideoMeet className={"lg:size-12 size-10"} />
          </span>
          <h1 className="lg:text-2xl text-lg ">Video Meet</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="   ">
            <LiveAssistance className={"lg:size-12 size-10"} />
          </span>
          <h1 className="lg:text-2xl text-lg ">Live Assistance</h1>
        </div>
      </div>
      <div className="lg:flex lg:relative absolute items-center gap-6">
        {/* Buttons for Large Screens */}
        <div className="hidden lg:flex gap-6 w-full">
          <button
            className="h-[3rem] w-[40%] buttonshinehover flex justify-center items-center bg-gradient-to-r from-custom-gold to-custom-darkgold  text-white rounded-sm text-lg"
            onClick={addProductToCart}
          >
            Add to Cart
          </button>
          <Link
            href={`/place-order?products=${slug}`}
            className="h-[3rem] w-[40%] buttonshinehover flex justify-center items-center bg-gradient-to-r from-custom-gold to-custom-darkgold  text-white rounded-sm text-lg"
          >
            Buy Now
          </Link>
          <button onClick={handleWishlist} className=" w-[10%] text-xl">
            {isWishlisted ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>

        {/* Sticky Bottom Buttons for Small Screens */}
        <div className="lg:hidden fixed bottom-0 left-0 z-[100] right-0 bg-white p-2 flex gap-3 shadow-lg">
          <button
            className="lg:h-[3rem] h-[2.5rem] w-[45%] flex justify-center items-center bg-gradient-to-r from-custom-gold to-custom-darkgold  text-white rounded-sm text-base lg:text-lg"
            onClick={addProductToCart}
          >
            Add to Cart
          </button>
          <Link
            href={`/place-order?products=${slug}`}
            className="lg:h-[3rem] h-[2.5rem] w-[45%] flex justify-center items-center bg-gradient-to-r from-custom-gold to-custom-darkgold  text-white rounded-sm  text-base lg:text-lg"
          >
            Buy Now
          </Link>
          <button className=" w-[10%] text-xl">
            {isWishlisted ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPageNameSection;
