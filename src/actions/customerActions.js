import axiosFetch from "@/config/axios.config";

export async function updateCustomer(customerId, customerData) {
  try {
    const response = await axiosFetch.put(`/customers/${customerId}`, {
      ...customerData,
    });
    const { customer } = response.data;
    return customer;
  } catch (error) {
    console.log(error);
    return error;
  }
}
