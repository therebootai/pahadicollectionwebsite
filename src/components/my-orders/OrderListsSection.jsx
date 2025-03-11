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
          key={item._id}
          className="p-6 flex flex-row gap-4 border border-custom-light-gray hover:shadow-custom-light hover:border-none rounded-sm transition-all duration-300 flex-1"
        >
          <Link
            href={`/products/${item.orderId}`}
            className="flex flex-row gap-4"
          >
            <div className="w-[45%] h-full relative">
              <Image
                src={item.products[0].productId?.thumbnail_image?.secure_url}
                alt="product thumbnail image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium text-custom-darkgreen">
                {item.products[0].productId?.title}
              </h1>
              <div className="flex items-center justify-evenly space-x-4">
                {STATUS_ENUMS.map((step, index) => (
                  <div key={step} className="flex flex-col items-center">
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
                      className={`mt-2 text-sm capitalize text-center ${
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
              <div className="flex flex-row items-center gap-4">
                <div className="md:h-[2rem] h-[1.7rem] bg-custom-yellow text-custom-darkgreen text-xs md:text-base font-medium flex justify-center items-center px-2 md:px-4 rounded-full">
                  &#8377; {item.totalAmount}
                </div>
                <div className="text-custom-gray text-xs md:text-sm font-medium">
                  {item.paymentId.paymentMode}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
