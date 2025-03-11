import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MyCartListSection = () => {
  const [cart, setCart] = useState([
    {
      thumbnail_image: "/images/productring.png",
      title: "Handmade Gold Product Lorem ipsum dolor sit amet",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      price: "12000",
      mrp: "140000",
      in_stock: 64,
      quantity: 1,
    },
  ]);

  const handleIncrease = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.min(item.quantity + 1, item.in_stock) }
          : item
      )
    );
  };

  const handleDecrease = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-row gap-4 border border-custom-light-gray hover:shadow-custom-light hover:border-none rounded-sm"
          >
            <Link
              href={`/products/${item.slug}`}
              className="w-[85%] flex flex-row gap-4"
            >
              <div className="w-[15%] h-full relative">
                <Image
                  src={item.thumbnail_image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[80%] flex flex-col gap-1">
                <h1 className="text-xl font-medium text-custom-darkgreen">
                  {item.title}
                </h1>
                <h1 className="text-base line-clamp-2">{item.description}</h1>
                <div className="flex flex-row items-center gap-4">
                  <div className="md:h-[2rem] h-[1.7rem] bg-custom-yellow text-custom-darkgreen text-xs md:text-base font-medium flex justify-center items-center px-2 md:px-4 rounded-full">
                    &#8377; {item.price}
                  </div>
                  <div className="text-custom-gray text-xs md:text-base font-medium line-through">
                    &#8377; {item.mrp}
                  </div>
                </div>
              </div>
            </Link>
            <div className="w-[15%] flex flex-col justify-between items-end">
              <button className="text-2xl flex justify-end items-start text-custom-darkgreen">
                <RiDeleteBin6Fill />
              </button>
              <div className="flex flex-row gap-2 items-center justify-end">
                <button onClick={() => handleDecrease(index)}>
                  <FaMinus />
                </button>
                <div className="w-[5rem] h-[2rem] bg-custom-light-gray border border-[#dddddd] flex justify-center items-center text-lg font-medium text-custom-darkgreen px-6">
                  {item.quantity.toString().padStart(2, "0")}
                </div>
                <button onClick={() => handleIncrease(index)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCartListSection;
