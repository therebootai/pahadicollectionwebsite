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
    return error;
  }
}
