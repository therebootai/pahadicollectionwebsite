import { useContext, useEffect, useState } from "react";
import ProductsList from "./ProductLists";
import OrderDetailsCard from "@/ui/OrderDetailsCard";
import CouponCheck from "./CouponCheck";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";
import { placeOrder } from "@/actions/orderActions";
import OrderAddressPlace from "./OrderAddressPlace";

export default function PlaceOrderSection({ products }) {
  const [orderedProducts, setOrderedProducts] = useState(
    products.map((product) => ({
      ...product,
      quantity: 1,
    }))
  );

  const [coupon, setCoupon] = useState(null);

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
    setDeliveryLocation(user.address[0]);
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
        throw new Error(order.response.data.message);
      }
      toast.success("Order Placed Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="flex gap-6 flex-1 items-start">
      <div className="flex flex-col xlg:gap-7 md:gap-6 gap-4 flex-1">
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
                <h4 className="">₹ {totalPrice}</h4>
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
        <button
          type="button"
          onClick={handelPlaceOrder}
          className="text-white bg-custom-darkgreen xlg:py-5 md:py-4 py-3 xlg:text-2xl md:text-xl text-lg"
        >
          Pay ₹
          {Math.round(
            coupon
              ? totalPrice + 40 - ((totalPrice + 40) * coupon.discount) / 100
              : totalPrice + 40
          )}
        </button>
      </div>
    </div>
  );
}
