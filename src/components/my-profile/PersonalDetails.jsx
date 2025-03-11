import { updateCustomer } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import InputWithLabel from "@/ui/InputWithLabel";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function PersonalDetails() {
  const { user, login } = useContext(AuthContext);

  async function handelInputSubmit(updatedData) {
    try {
      const customer = await updateCustomer(user._id, { ...updatedData });
      if (customer.response) {
        throw new Error(customer.response.data.message);
      }
      toast.success("Updated Successfully");
      login(customer);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="flex flex-col gap-8 flex-1">
      {user?.name && (
        <InputWithLabel
          label="Your Name"
          inputProps={{ type: "text", defaultValue: user.name, name: "name" }}
          saveEvent={(data) => handelInputSubmit(data)}
        />
      )}
      {user?.mobile && (
        <InputWithLabel
          label="Your Mobile"
          inputProps={{
            type: "tel",
            defaultValue: user.mobile,
            minLength: 10,
            maxLength: 10,
            name: "mobile",
          }}
          saveEvent={(data) => handelInputSubmit(data)}
        />
      )}
      {user?.email && (
        <InputWithLabel
          label="Your Email"
          inputProps={{
            type: "email",
            defaultValue: user.email,
            name: "email",
          }}
          saveEvent={(data) => handelInputSubmit(data)}
        />
      )}
      <InputWithLabel
        label="Change Your Password"
        inputProps={{
          type: "password",
          placeholder: "Enter your new password",
          name: "password",
        }}
        saveEvent={(data) => handelInputSubmit(data)}
      />
      <div className="flex items-center justify-start gap-6">
        <button
          type="button"
          className="text-custom-darkgreen inline-flex py-3 px-5 text-xs bg-custom-light-gray border border-[#ddd]"
        >
          Delete Account
        </button>
        <button
          type="button"
          className="text-custom-darkgreen inline-flex py-3 px-5 text-xs bg-custom-light-gray border border-[#ddd]"
        >
          Deactivate Account
        </button>
      </div>
    </div>
  );
}
