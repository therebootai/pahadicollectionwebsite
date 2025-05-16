"use server";
import axiosFetch from "@/config/axios.config";

export const fetchCustomerData = async () => {
  try {
    const response = await axiosFetch.get(`/customers/`);
    return response.data.customers || [];
  } catch (error) {
    console.error("Error fetching Customer data:", error.message);
    return [];
  }
};
export const fetchCustomerDatabyId = async (customerId) => {
  try {
    const response = await axiosFetch.get(`/customers/${customerId}`);
    return response.data.customer || [];
  } catch (error) {
    console.error("Error fetching Customer data:", error.message);
    return [];
  }
};

export async function updateCustomer(customerId, customerData) {
  try {
    const response = await axiosFetch.put(`/customers/${customerId}`, {
      ...customerData,
    });
    const { customer } = response.data;
    return customer;
  } catch (error) {
    console.log(error);
    return error.response.data ?? {};
  }
}

export const updateWishlist = async (customerId, productId) => {
  try {
    const response = await axiosFetch.put("/customers/wishlist/add", {
      customerId,
      productId,
    });

    return response.data;
  } catch (error) {
    console.error("Error updating wishlist:", error.message);
    return { wishlist: [] };
  }
};

export const removeWishlist = async (customerId, productId) => {
  try {
    const response = await axiosFetch.put("/customers/wishlist/remove", {
      customerId,
      productId,
    });

    return response.data;
  } catch (error) {
    console.error("Error removing from wishlist:", error.message);
    return { wishlist: [] };
  }
};

export async function addToCart(customerId, productId, quantity) {
  try {
    const response = await axiosFetch.put("/customers/cart/add", {
      customerId,
      productId,
      quantity,
    });
    const { cart } = response.data;
    return cart;
  } catch (error) {
    console.error("Error updating cart:", error.message);
    return error.response.data ?? [];
  }
}
export async function removeFromCart(customerId, productId, quantity) {
  try {
    const response = await axiosFetch.put("/customers/cart/remove", {
      customerId,
      productId,
      quantity,
    });
    const { cart } = response.data;
    return cart;
  } catch (error) {
    console.error("Error updating cart:", error.message);
    return error.response.data ?? [];
  }
}
