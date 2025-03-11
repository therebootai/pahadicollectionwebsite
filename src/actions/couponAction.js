import axiosFetch from "@/config/axios.config";

export async function useCoupon(couponCode) {
  try {
    const response = await axiosFetch.get(`/coupons/use/${couponCode}`);
    const { coupon } = response.data;
    return coupon;
  } catch (error) {
    console.log(error);
    return error;
  }
}
