"use server";

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
    const { orders } = data;
    return orders;
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

export async function updateOrder(orderId, updatedData) {
  try {
    const response = await axiosFetch.put(`/orders/${orderId}`, updatedData);
    const { order } = response.data;
    return order;
  } catch (error) {
    console.log(error);
    return error.response.data ?? {};
  }
}

export async function createRazorPayOrder(amount, customerId, orderData) {
  try {
    const response = await axiosFetch.post(`/payments/order`, {
      amount,
      customerId,
      orderData,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data ?? {};
  }
}

export async function razorpayOrderSuccess(payment) {
  try {
    const response = await axiosFetch.post(
      "/payments/payment-success",
      payment
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data ?? {};
  }
}
