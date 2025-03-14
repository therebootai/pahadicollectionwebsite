"use server";
import axiosFetch from "@/config/axios.config";
import { cookies } from "next/headers";

export async function loginCustomer(email_or_phone, password) {
  try {
    const response = await axiosFetch.post(`/customers/login`, {
      email_or_phone,
      password,
    });
    const setCookieHeader = response.headers["set-cookie"];
    if (setCookieHeader && Array.isArray(setCookieHeader)) {
      const tokenCookie = setCookieHeader[0];

      const token = tokenCookie.split(";")[0].split("=")[1];

      if (token) {
        (await cookies()).set("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
      }
    }

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
    const setCookieHeader = response.headers["set-cookie"];
    if (setCookieHeader && Array.isArray(setCookieHeader)) {
      const tokenCookie = setCookieHeader[0];

      const token = tokenCookie.split(";")[0].split("=")[1];

      if (token) {
        (await cookies()).set("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
      }
    }
    const { customer } = response.data;
    return customer;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function logoutCustomer() {
  try {
    const cookieStore = await cookies(); // Get cookies from request
    const token = cookieStore.get("token")?.value;

    const response = await axiosFetch.get(`/customers/logout`, {
      withCredentials: true,
      headers: {
        Cookie: `token=${token}`,
      },
    });
    (await cookies()).delete("token");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function checkTokenAuth() {
  try {
    const cookieStore = await cookies(); // Get cookies from request
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return false;
    }
    const response = await axiosFetch.get(`/customers/check-auth`, {
      withCredentials: true,
      headers: {
        Cookie: `token=${token}`,
      },
    });

    const { user } = response.data;
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
}
