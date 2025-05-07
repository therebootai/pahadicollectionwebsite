import axiosFetch from "@/config/axios.config";

export async function placeOrder({
  customerId,
  products,
  totalAmount,
  delivery_location,
  couponId,
  paymentStatus = "pending",
  paymentMode = "COD",
}) {
  try {
    const response = await axiosFetch.post(`/orders/`, {
      customerId,
      products,
      totalAmount,
      delivery_location,
      couponId,
      paymentStatus,
      paymentMode,
    });
    const { data } = response.data;
    const { order } = data;
    return order;
  } catch (error) {
    console.log(error);
    return error.response.data ?? {};
  }
}

export async function getOrdersOfUser(customerId) {
  try {
    const response = await axiosFetch.get(`/orders?customerId=${customerId}`);
    const { orders } = response.data;
    return orders;
  } catch (error) {
    console.log(error);
    return errorresponse.data ?? [];
  }
}
