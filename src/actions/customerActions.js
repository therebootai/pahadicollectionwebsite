import axiosFetch from "@/config/axios.config";

export async function updateCustomer(customerData) {
  try {
    const response = await axiosFetch.put(`/customers/`, { ...customerData });
    const { customer } = response.data;
    return customer;
  } catch (error) {
    console.log(error);
    return error;
  }
}
