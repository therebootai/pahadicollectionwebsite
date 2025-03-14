"use client";
import { getOrdersOfUser } from "@/actions/orderActions";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const STATUS_ENUMS = ["ordered", "shipped", "out_for_delivery", "delivered"];

export default function OrderListsSection() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  async function getAllOrders() {
    try {
      const order = await getOrdersOfUser(user._id);
      setOrders(order);
    } catch (error) {
      console.log(error);
      setOrders([]);
    }
  }

  useEffect(() => {
    if (user) {
      getAllOrders();
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4 flex-1">
      {orders.map((item) => (
        <div
          className="flex flex-col-reverse lg:flex-col flex-1 transition-all duration-300 border border-custom-light-gray hover:shadow-custom-light hover:border-none"
          key={item._id}
        >
          <div className="flex flex-col lg:flex-row flex-1 justify-between rounded-sm overflow-hidden bg-custom-light-gray py-4 px-4 lg:px-6 gap-4 lg:gap-0">
            <div className="flex flex-row lg:flex-col gap-4 items-start justify-between">
              <h3 className="text-custom-gray">Order Placed</h3>
              <p className="text-custom-darkgreen">
                {new Date(item.createdAt).toLocaleDateString("en-In")}
              </p>
            </div>
            <div className="flex flex-row lg:flex-col gap-4 items-start justify-between">
              <h3 className="text-custom-gray">Total Ammount</h3>
              <p className="text-custom-darkgreen">
                &#8377; {item.totalAmount}
              </p>
            </div>
            <div className="flex flex-row lg:flex-col gap-4 items-start justify-between">
              <h3 className="text-custom-gray">Payment Status</h3>
              <p className="text-custom-darkgreen">
                {item.paymentId.paymentMode}
              </p>
            </div>
            <div className="flex flex-row lg:flex-col gap-4 items-start justify-between">
              <h3 className="text-custom-gray">Order Id</h3>
              <p className="text-custom-darkgreen">{item.orderId}</p>
            </div>
          </div>
          <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-4 flex-1">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <Image
                src={item.products[0].productId?.thumbnail_image?.secure_url}
                alt="product thumbnail image"
                width={103}
                height={103}
                className="object-cover h-44 md:h-auto w-full md:w-28 self-start md:self-stretch"
              />
              <div className="flex flex-col gap-6 flex-1">
                <h1 className="text-lg md:text-xl font-medium text-custom-darkgreen">
                  {item.products[0].productId?.title}
                </h1>
                <div className="flex flex-col md:flex-row items-start justify-between md:space-x-4 gap-4">
                  {STATUS_ENUMS.map((step, index) => (
                    <div
                      key={step}
                      className="flex flex-row md:flex-col items-center gap-2"
                    >
                      {/* Status Circle */}
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full 
                      ${
                        index <= STATUS_ENUMS.indexOf(item.status)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-gray-500"
                      }
              `}
                      >
                        {index + 1}
                      </div>

                      {/* Status Text */}
                      <p
                        className={`md:mt-2 text-sm capitalize text-center tracking-wider ${
                          index <= STATUS_ENUMS.indexOf(item.status)
                            ? "text-blue-600 font-semibold"
                            : "text-gray-500"
                        }`}
                      >
                        {step.replace(/_/g, " ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 flex lg:flex-col items-end justify-between gap-4 lg:gap-0">
              <button
                type="button"
                className="bg-custom-yellow text-custom-darkgreen py-3 rounded-sm xlg:text-base text-sm capitalize lg:max-w-56 w-full"
              >
                cancel order
              </button>
              <button
                type="button"
                className="bg-custom-yellow text-custom-darkgreen py-3 rounded-sm xlg:text-base text-sm capitalize lg:max-w-56 w-full"
              >
                get support
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
