"use client";
import { addToCart, removeFromCart } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import OrderDetailsCard from "@/ui/OrderDetailsCard";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const MyCartListSection = () => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrease = async (index) => {
    try {
      const productId = cart[index].productId._id;
      if (cart[index].quantity === cart[index].productId.in_stock) {
        toast.error(
          `Sorry only ${cart[index].productId.in_stock} products in stock`
        );
        return;
      }
      const quantity = 1;
      const cartAdded = await addToCart(user._id, productId, quantity);
      if (cartAdded.message) {
        throw new Error(cartAdded.response.data.message);
      }
      dispatch({
        type: "LOGIN",
        payload: { ...user, cart: cartAdded },
      });

      setCart((prevCart) =>
        prevCart.map((item, i) =>
          i === index
            ? {
                ...item,
                quantity: Math.min(item.quantity + 1, item.productId.in_stock),
              }
            : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrease = async (index) => {
    try {
      const cardRemoved = await removeFromCart(
        user._id,
        cart[index].productId._id,
        1
      );
      if (cardRemoved.message) {
        throw new Error(cardRemoved.response.data.message);
      }
      dispatch({
        type: "LOGIN",
        payload: { ...user, cart: cardRemoved },
      });
      setCart((prevCart) =>
        prevCart.map((item, i) =>
          i === index
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
    setCart(user.cart);
  }, [user]);

  useEffect(() => {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.quantity * item.productId.price,
      0
    );

    setTotalQuantity(totalQty);
    setTotalPrice(totalPrice);
  }, [cart]);

  async function handelRemoveCart(productId, quantity) {
    try {
      const cardRemoved = await removeFromCart(user._id, productId, quantity);
      if (cardRemoved.message) {
        throw new Error(cardRemoved.response.data.message);
      }
      dispatch({
        type: "LOGIN",
        payload: { ...user, cart: cardRemoved },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex gap-6 flex-col-reverse lg:flex-row lg:items-start flex-1">
      <div className="flex flex-col gap-4 flex-1">
        {cart.map((item, index) => (
          <div
            key={index}
            className="p-4 md:p-6 flex flex-col md:flex-row gap-4 border border-custom-light-gray hover:shadow-custom-light hover:border-none rounded-sm"
          >
            <Link
              href={`/products/${item.productId?.slug}`}
              className="md:w-[85%] flex flex-row gap-4"
            >
              <div className="w-[40%] md:w-[15%] h-full relative">
                <Image
                  src={item.productId?.thumbnail_image?.secure_url}
                  alt=""
                  fill
                  className="object-cover md:object-contain"
                />
              </div>
              <div className="md:w-[80%] flex flex-col gap-1">
                <h1 className="text-lg md:text-xl font-medium text-custom-darkgreen">
                  {item.productId?.title}
                </h1>
                <h1 className="text-base line-clamp-2 hidden md:block">
                  {item.productId?.description}
                </h1>
                <div className="flex flex-row items-center gap-4">
                  <div className="md:h-[2rem] h-[1.7rem] bg-custom-yellow text-custom-darkgreen text-xs md:text-base font-medium flex justify-center items-center px-2 md:px-4 rounded-full">
                    &#8377; {item.productId?.price}
                  </div>
                  <div className="text-custom-gray text-xs md:text-base font-medium line-through hidden md:block">
                    &#8377; {item.productId?.mrp}
                  </div>
                </div>
              </div>
            </Link>
            <div className="md:w-[15%] flex flex-row md:flex-col justify-between items-end">
              <button
                className="text-lg md:text-2xl flex justify-end items-start text-custom-darkgreen"
                onClick={() =>
                  handelRemoveCart(item.productId._id, item.quantity)
                }
              >
                <RiDeleteBin6Fill />
              </button>
              <div className="flex flex-row gap-2 items-center justify-end">
                <button onClick={() => handleDecrease(index)}>
                  <FaMinus />
                </button>
                <div className="w-10 md:w-[5rem] h-[2rem] bg-custom-light-gray border border-[#dddddd] flex justify-center items-center text-base md:text-lg font-medium text-custom-darkgreen px-6">
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
      <div className="flex flex-col flex-1 lg:max-w-md w-full gap-5">
        <OrderDetailsCard>
          <OrderDetailsCard.Body>
            <h2 className="xlg:text-2xl md:text-xl text-lg text-custom-darkgreen">
              Order Summery
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-custom-gray xlg:text-lg md:text-base text-sm">
                <h4 className="">
                  Price &#40;
                  {totalQuantity} items&#41;
                </h4>
                <h4 className="">₹ {totalPrice}</h4>
              </div>
              <div className="flex justify-between text-custom-gray xlg:text-lg md:text-base text-sm">
                <h4 className="">Delivery Charge</h4>
                <h4 className="">₹ 40</h4>
              </div>
            </div>
          </OrderDetailsCard.Body>
          <OrderDetailsCard.Footer>
            <div className="flex justify-between text-custom-gray xlg:text-lg md:text-base text-sm">
              <h4 className="text-custom-darkgreen">Total Amount</h4>
              <h4 className="">₹ {totalPrice + 40}</h4>
            </div>
          </OrderDetailsCard.Footer>
        </OrderDetailsCard>
        <Link
          href={`/place-order?products=${cart
            .map((item) => item.productId?.slug)
            .filter(Boolean)
            .join(",")}`}
          type="button"
          className="text-white bg-custom-darkgreen xlg:py-5 md:py-4 py-3 xlg:text-2xl md:text-xl text-lg text-center"
        >
          Pay ₹{totalPrice + 40}
        </Link>
      </div>
    </div>
  );
};

export default MyCartListSection;
