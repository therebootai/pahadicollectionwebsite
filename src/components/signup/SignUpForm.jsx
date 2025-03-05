import { signupCustomer } from "@/actions/authActions";
import { AuthContext } from "@/context/AuthContext";
import { useActionState, useContext } from "react";

export default function SignUpForm() {
  const { login } = useContext(AuthContext);

  const handleSignup = async (prevState, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm_password");
    const house_no = formData.get("house_no");
    const street_name = formData.get("street_name");
    const area = formData.get("area");
    const post_office = formData.get("post_office");
    const pincode = formData.get("pincode");
    const landmark = formData.get("landmark");

    if (password !== confirmPassword) {
      return { ...prevState, error: "Passwords do not match" };
    }

    const address = {};

    if (house_no) address.house_no = house_no;
    if (street_name) address.street_name = street_name;
    if (area) address.area = area;
    if (post_office) address.post_office = post_office;
    if (pincode) address.pincode = pincode;
    if (landmark) address.landmark = landmark;

    try {
      const customer = await signupCustomer({
        name,
        email,
        mobile,
        password,
        address,
      });
      login(customer);
    } catch (error) {
      console.log(error);
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
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
      </div>
      <div className="flex relative flex-1">
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
        />
      </div>
      <div className="flex relative flex-1">
        <input
          type="password"
          name="confirm_password"
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
