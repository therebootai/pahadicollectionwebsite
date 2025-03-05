import axiosFetch from "@/config/axios.config";

export async function loginCustomer(email_or_phone, password) {
  try {
    const response = await axiosFetch.post(`/customers/login`, {
      email_or_phone,
      password,
    });
    const { customer } = response.data;
    return customer;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function signupCustomer(customer) {
  const { name, email, mobile, password, address } = customer;
  try {
    const response = await axiosFetch.post(`/customers/`, {
      name,
      email,
      mobile,
      password,
      address: [address],
    });
    const { customer } = response.data;
    return customer;
  } catch (error) {
    console.log(error);
    return error;
  }
}
