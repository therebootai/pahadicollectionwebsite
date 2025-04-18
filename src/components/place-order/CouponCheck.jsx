import { useCoupon } from "@/actions/couponAction";
import MiniLoader from "@/ui/MiniLoader";
import { useActionState } from "react";
import { toast } from "react-toastify";

export default function CouponCheck({ setCoupon }) {
  async function useACoupon(prevState, formData) {
    const couponCode = formData.get("couponCode") || "";
    if (couponCode === "") {
      toast.error("Please enter a valid coupon code.");
      return { ...prevState };
    }
    try {
      const coupon = await useCoupon(couponCode);
      if (coupon.message) {
        throw new Error(coupon.message);
      }
      toast.success("Coupon applied successfully");
      setCoupon(coupon);
      return { ...prevState };
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return { ...prevState };
    }
  }

  const [_, formAction, isPending] = useActionState(useACoupon, null);
  return (
    <form
      action={formAction}
      className="flex flex-1 rounded-sm overflow-hidden xlg:text-lg md:text-base text-sm"
    >
      <input
        type="text"
        name="couponCode"
        placeholder="Enter your coupon code"
        className="border border-[#ddd] xlg:py-5 md:py-4 py-3 xlg:px-6 md:px-5 px-4 flex-1"
      />
      <button
        type="submit"
        className="bg-[#FFCD91] text-custom-darkgreen xlg:py-5 md:py-4 py-3 xlg:w-36 w-28 rounded-sm inline-flex items-center justify-center gap-4"
      >
        {isPending && <MiniLoader />} Apply
      </button>
    </form>
  );
}
