"use server";
import axiosFetch from "@/config/axios.config";
import { cookies } from "next/headers";

export async function useCoupon(couponCode) {
  try {
    const cookieStore = await cookies(); // Get cookies from request
    const token = cookieStore.get("token")?.value;
    if (!token) {
      throw new Error("Unauthorized");
    }
    const response = await axiosFetch.get(`/coupons/use/${couponCode}`, {
      withCredentials: true,
      headers: {
        Cookie: `token=${token}`,
      },
    });
    const { coupon } = response.data;
    return coupon;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export async function fetchAllCoupons() {
  try {
    const response = await axiosFetch.get(
      `/coupons/?isActive=true&endDate=${new Date().toISOString()}&startDate=${new Date().toISOString()}`
    );
    const { coupons } = response.data;
    return coupons;
  } catch (error) {
    console.error("Error fetching Coupon data:", error.message);
    return [];
  }
}
