"use client";
import { signupCustomer } from "@/actions/authActions";
import { AuthContext } from "@/context/AuthContext";
import MiniLoader from "@/ui/MiniLoader";
import { useRouter } from "next/navigation";
import { useActionState, useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";

export default function SignUpForm() {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async (prevState, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm_password");

    if (password !== confirmPassword) {
      return { ...prevState, error: "Passwords do not match" };
    }

    const address = {};

    try {
      const customer = await signupCustomer({
        name,
        email,
        mobile,
        password,
        address,
      });
      if (customer.response) {
        throw new Error(customer.response.data.message);
      }
      toast.success("Account created successfully");
      login(customer);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return { ...prevState };
    }
  };

  const [_state, formAction, isPending] = useActionState(handleSignup, null);

  return (
    <form
      action={formAction}
      className="bg-custom-light-gray px-4 xlg:px-6 py-4 xlg:py-5 gap-6 flex flex-col xlg:max-w-xl w-full mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        required
      />
      <input
        type="tel"
        name="mobile"
        minLength={10}
        maxLength={10}
        placeholder="Enter Your Mobile Number"
        className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        required
      />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
        <input
          type="text"
          name="house_no"
          placeholder="Enter Your House Number"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
        <input
          type="text"
          name="street_name"
          placeholder="Enter Your Street Name"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
        <input
          type="text"
          name="area"
          placeholder="Enter Your Area Name"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
        <input
          type="text"
          name="post_office"
          placeholder="Enter Your Post Office"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
        <input
          type="number"
          name="pincode"
          placeholder="Enter Your Pincode"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
        <input
          type="text"
          name="landmark"
          placeholder="Enter Your Landmark"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
      </div> */}
      <div className="flex relative flex-1">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Your Password"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="mr-4 text-xl text-custom-darkgreen cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      <div className="flex relative flex-1">
        <input
          type="password"
          name="confirm_password"
          required
          placeholder="Confirm Your Password"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
      </div>
      <button
        type="submit"
        className="text-sm bg-custom-darkgreen py-3 text-white w-3/5 self-center rounded-sm inline-flex justify-center items-center gap-2"
      >
        {isPending && <MiniLoader />} Submit
      </button>
    </form>
  );
}
