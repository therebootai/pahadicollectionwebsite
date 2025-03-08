import { loginCustomer } from "@/actions/authActions";
import { AuthContext } from "@/context/AuthContext";
import MiniLoader from "@/ui/MiniLoader";
import { useActionState, useContext } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { login } = useContext(AuthContext);

  const handleLogin = async (prevState, formData) => {
    const email_or_phone = formData.get("email_or_phone");
    const password = formData.get("password");

    try {
      const customer = await loginCustomer(email_or_phone, password);
      if (customer.response) {
        throw new Error(customer.response.data.message);
      }
      toast.success("Logged in successfully");
      login(customer);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return { ...prevState };
    }
  };

  const [_state, formAction, isPending] = useActionState(handleLogin, null);

  return (
    <form
      action={formAction}
      className="bg-custom-light-gray px-4 xlg:px-6 py-4 xlg:py-5 gap-6 flex flex-col xlg:max-w-xl w-full mx-auto"
    >
      <input
        type="text"
        name="email_or_phone"
        placeholder="Email or Phone"
        className="p-2 md:p-4 xlg:p-6 bg-white text-custom-darkgreen placeholder:text-custom-darkgreen w-full"
      />
      <div className="flex relative flex-1">
        <input
          type="password"
          name="password"
          placeholder="Password"
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
