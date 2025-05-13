"use client";
import { useContext, useEffect, useState } from "react";
import ProductsList from "./ProductLists";
import OrderDetailsCard from "@/ui/OrderDetailsCard";
import CouponCheck from "./CouponCheck";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";
import { placeOrder } from "@/actions/orderActions";
import OrderAddressPlace from "./OrderAddressPlace";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axiosFetch from "@/config/axios.config";

export default function PlaceOrderSection({ products }) {
  const [orderedProducts, setOrderedProducts] = useState(
    products.map((product) => ({
      ...product,
      quantity: 1,
    }))
  );

  const [coupon, setCoupon] = useState(null);
  const router = useRouter();

  const [deliveryLocation, setDeliveryLocation] = useState({});

  const { user } = useContext(AuthContext);

  // Function to update product quantity
  const updateQuantity = (productId, change) => {
    setOrderedProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + change }
          : item
      )
    );
  };

  const totalQuantity = orderedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = orderedProducts.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  useEffect(() => {
    if (user.address?.length > 0) {
      setDeliveryLocation(user.address[0]);
    }
    setOrderedProducts((prevOrderedProducts) =>
      prevOrderedProducts.map((product) => {
        const cartItem = user.cart.find(
          (item) => item.productId._id === product._id
        );
        return cartItem ? { ...product, quantity: cartItem.quantity } : product;
      })
    );
  }, [user]);

  async function handelPlaceOrder() {
    if (Object.keys(deliveryLocation).length <= 0) {
      toast.error("You have not add any address.");
      return;
    }
    try {
      const order = await placeOrder({
        customerId: user._id,
        products: orderedProducts.map((product) => ({
          productId: product._id,
          quantity: product.quantity,
        })),
        totalAmount: totalPrice,
        delivery_location: deliveryLocation,
        couponId: coupon ? coupon._id : null,
      });

      if (order.message) {
        throw new Error(order.message);
      }
      toast.success("Order Placed Successfully");
      router.push(`/my-orders`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // Load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (Object.keys(deliveryLocation).length <= 0) {
      toast.error("You have not added any address.");
      return;
    }

    // Prepare order data
    const orderData = {
      customerId: user._id,
      products: orderedProducts.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      })),
      totalAmount: totalPrice,
      delivery_location: deliveryLocation,
      couponId: coupon ? coupon._id : null,
      paymentMode: "ONLINE",
    };

    const res = await loadRazorpayScript();

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const response = await axiosFetch.post(`/payments/order`, {
      amount:
        Math.round(
          coupon
            ? totalPrice + 40 - ((totalPrice + 40) * coupon.discount) / 100
            : totalPrice + 40
        ) * 100,
      customerId: user._id,
      orderData,
    });

    const { order, paymentId } = response.data;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: "Pahadi Collections",
      description: "Order Payment",
      order_id: order.id,
      handler: async (response) => {
        try {
          console.log("razorpay response", response);
          const paymentDetails = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };

          const paymentResponse = await axiosFetch.post(
            "/payments/payment-success",
            {
              ...paymentDetails,
              paymentId: paymentDetails.razorpay_order_id,
            }
          );

          if (paymentResponse.data.message === "Payment successful") {
            const orderResult = await placeOrder(orderData);
            if (orderResult.message) throw new Error(orderResult.message);
            toast.success("Order placed successfully");
            router.push(`/my-orders`);
          } else {
            toast.error("Payment confirmation failed.");
          }
        } catch (error) {
          console.error("Error processing payment:", error);
          toast.error(error.message || "Order failed.");
        }
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      notes: {
        address: deliveryLocation,
      },
      theme: {
        color: "#1C5E20",
      },
      modal: {
        ondismiss: () => {
          toast.error("Payment failed. Order not placed.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 flex-1 items-start">
      <div className="flex flex-col-reverse lg:flex-col xlg:gap-7 md:gap-6 gap-4 flex-1">
        {Object.keys(deliveryLocation).length > 0 ? (
          <div className="flex flex-col xlg:gap-7 md:gap-6 gap-4 flex-1">
            <h1 className="xlg:text-2xl md:text-xl text-lg text-custom-darkgreen">
              Delivery Address
            </h1>
            <OrderAddressPlace
              address={deliveryLocation}
              name={user.name}
              setDeliveryLocation={setDeliveryLocation}
              allAddresses={user.address}
            />
          </div>
        ) : (
          <Link
            href="/my-profile/manage-address"
            className="xlg:text-2xl md:text-xl text-lg text-custom-darkgreen"
          >
            Add new Address
          </Link>
        )}
        <div className="flex flex-col xlg:gap-7 md:gap-6 gap-4 flex-1">
          <h1 className="xlg:text-2xl md:text-xl text-lg text-custom-darkgreen">
            Order Summary
          </h1>
          <ProductsList
            products={orderedProducts}
            onUpdateQuantity={updateQuantity}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 lg:max-w-md w-full gap-5">
        <OrderDetailsCard>
          <OrderDetailsCard.Header>
            <h2 className="xlg:text-2xl md:text-xl text-lg text-custom-darkgreen">
              Have a Coupon Code
            </h2>
            <CouponCheck setCoupon={setCoupon} />
          </OrderDetailsCard.Header>
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
                <h4 className="">₹ {Math.round(totalPrice)}</h4>
              </div>
              <div className="flex justify-between text-custom-gray xlg:text-lg md:text-base text-sm">
                <h4 className="">Coupon Code</h4>
                <h4 className="">
                  {coupon ? coupon.couponName : "Not Applied"}
                </h4>
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
              <h4 className="">
                ₹{" "}
                {Math.round(
                  coupon
                    ? totalPrice +
                        40 -
                        ((totalPrice + 40) * coupon.discount) / 100
                    : totalPrice + 40
                )}
              </h4>
            </div>
          </OrderDetailsCard.Footer>
        </OrderDetailsCard>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handlePayment}
            className="text-white bg-custom-darkgreen xlg:py-5 md:py-4 py-3 xlg:text-2xl md:text-xl text-lg flex-1"
          >
            Pay Now
          </button>
          <button
            type="button"
            onClick={handelPlaceOrder}
            className="text-white bg-custom-green xlg:py-5 md:py-4 py-3 xlg:text-2xl md:text-xl text-lg flex-1"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
