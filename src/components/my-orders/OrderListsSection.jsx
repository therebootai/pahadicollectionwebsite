"use client";
import { getOrdersOfUser, updateOrder } from "@/actions/orderActions";
import { AuthContext } from "@/context/AuthContext";
import MiniLoader from "@/ui/MiniLoader";
import Popup from "@/ui/PopUp";
import Image from "next/image";
import { useActionState, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const STATUS_ENUMS = ["ordered", "shipped", "out_for_delivery", "delivered"];

export default function OrderListsSection() {
  const [orders, setOrders] = useState([]);
  const [canceledOrderId, setCanceledOrderId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  async function handleSubmitForm(prevState, formData) {
    try {
      const order_message = formData.get("order_message");
      const cancel_reason = formData.get("cancel_reason");

      const order = await updateOrder(canceledOrderId, {
        status: "canceled",
        cancel_message: {
          order_message,
          cancel_reason,
        },
      });
      if (order.message) {
        throw new Error(order.message);
      }
      toast.success("Order Canceled Successfully");
      getAllOrders();
      setIsModalOpen(false);
      return { ...prevState };
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return { ...prevState };
    }
  }

  useEffect(() => {
    if (user) {
      getAllOrders();
    }
  }, [user]);

  const [state, formAction, isPending] = useActionState(handleSubmitForm, null);

  return (
    <>
      <div className="flex flex-col gap-4 flex-1">
        {orders.map((item) =>
          item.products.map((product) => (
            <div
              className="flex flex-col-reverse lg:flex-col flex-1 transition-all duration-300 border border-custom-light-gray hover:shadow-custom-light"
              key={product._id}
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
                    &#8377; {Math.round(item.totalAmount)}
                  </p>
                </div>
                <div className="flex flex-row lg:flex-col gap-4 items-start justify-between">
                  <h3 className="text-custom-gray">Payment Method</h3>
                  <p className="text-custom-darkgreen">
                    {item.paymentId?.paymentMode}
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
                    src={product.productId?.thumbnail_image?.secure_url}
                    alt="product thumbnail image"
                    width={103}
                    height={103}
                    className="object-cover h-44 md:h-auto w-full md:w-28 self-start md:self-stretch"
                  />
                  <div className="flex flex-col gap-6 flex-1">
                    <h1 className="text-lg md:text-xl font-medium text-custom-darkgreen">
                      {product.productId?.title}
                    </h1>
                    <div className="flex flex-col md:flex-row items-start justify-between md:space-x-4 gap-4">
                      {item.status !== "canceled" &&
                        STATUS_ENUMS.map((step, index) => (
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
                      {item.status === "canceled" && (
                        <>
                          <div className="flex flex-row md:flex-col items-center gap-2">
                            {/* Status Circle */}
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white`}
                            >
                              1
                            </div>

                            {/* Status Text */}
                            <p
                              className={`md:mt-2 text-sm capitalize text-center text-blue-600 font-semibold tracking-wider`}
                            >
                              ordered
                            </p>
                          </div>
                          <div className="flex flex-row md:flex-col items-center gap-2">
                            {/* Status Circle */}
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white`}
                            >
                              2
                            </div>

                            {/* Status Text */}
                            <p
                              className={`md:mt-2 text-sm capitalize text-center text-blue-600 font-semibold tracking-wider`}
                            >
                              canceled
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex lg:flex-col items-end justify-between gap-4 lg:gap-0">
                  {(item.status === "ordered" || item.status === "shipped") && (
                    <button
                      type="button"
                      onClick={() => {
                        setCanceledOrderId(item._id);
                        setIsModalOpen(true);
                      }}
                      className="bg-custom-yellow text-custom-darkgreen py-3 rounded-sm xlg:text-base text-sm capitalize lg:max-w-56 w-full"
                    >
                      cancel order
                    </button>
                  )}
                  {item.status === "delivered" && (
                    <button
                      type="button"
                      className="bg-custom-yellow text-custom-darkgreen py-3 rounded-sm xlg:text-base text-sm capitalize lg:max-w-56 w-full"
                    >
                      review product
                    </button>
                  )}
                  <button
                    type="button"
                    className="bg-custom-yellow text-custom-darkgreen py-3 rounded-sm xlg:text-base text-sm capitalize lg:max-w-56 w-full"
                  >
                    get support
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form className="flex flex-col gap-4" action={formAction}>
          <h3 className="xlg:text-2xl md:text-xl text-lg font-semibold text-custom-darkgreen">
            Please let us know the reason for canceling the order
          </h3>
          <select
            name="cancel_reason"
            className="px-4 md:px-6 py-2 md:py-4 focus:outline-none border border-custom-light-gray rounded-md"
          >
            <option value="">Select a reason</option>
            <option value="Ordered by Mistake">Ordered by Mistake</option>
            <option value="Found a Better Price Elsewhere">
              Found a Better Price Elsewhere
            </option>
            <option value="Payment Issue or Duplicate Order">
              Payment Issue or Duplicate Order
            </option>
            <option value="No Longer Needed / Change in Occasion">
              No Longer Needed / Change in Occasion
            </option>
            <option value="Expected Delivery Time is Too Long">
              Expected Delivery Time is Too Long
            </option>
            <option value="Others">Others &#40; Pls specify &#41;</option>
          </select>
          <textarea
            name="order_message"
            id=""
            className="px-4 md:px-6 py-2 md:py-4 focus:outline-none border border-custom-light-gray rounded-md resize-none"
            rows={5}
            placeholder="Message (optional)"
          ></textarea>
          <div className="flex items-center justify-start gap-3">
            <button
              className="xlg:text-xl md:text-lg text-base bg-custom-green text-white px-4 py-2 rounded-lg capitalize"
              type="submit"
            >
              {isPending && <MiniLoader />} submit
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="xlg:text-xl md:text-lg text-base bg-custom-gold text-custom-black px-4 py-2 rounded-lg capitalize"
              type="cancel"
            >
              cancel
            </button>
          </div>
        </form>
      </Popup>
    </>
  );
}
