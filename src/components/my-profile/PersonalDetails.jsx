import { AuthContext } from "@/context/AuthContext";
import InputWithLabel from "@/ui/InputWithLabel";
import { useContext } from "react";

export default function PersonalDetails() {
  const { user } = useContext(AuthContext);

  async function handelInputSubmit() {}

  return (
    <div className="flex flex-col gap-8 flex-1">
      {user?.name && (
        <InputWithLabel
          label="Your Name"
          inputProps={{ type: "text", defaultValue: user.name, name: "name" }}
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
        />
      )}
      <InputWithLabel
        label="Your Password"
        inputProps={{
          type: "password",
          placeholder: "Enter your new password",
          name: "password",
        }}
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
