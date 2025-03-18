import { updateCustomer } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import MiniLoader from "@/ui/MiniLoader";
import { useActionState, useContext, useState } from "react";
import { toast } from "react-toastify";

export default function AddAndEditAddress({
  editedAddress = null,
  setShowAddressForm,
  setEditedAddress,
  user,
}) {
  const { login } = useContext(AuthContext);
  const [addressType, setAddressType] = useState("home");
  async function updateCustomerAddress(prevState, formState) {
    const house_no = formState.get("house_no") || "";
    const street_name = formState.get("street_name") || "";
    const area = formState.get("area") || "";
    const post_office = formState.get("post_office") || "";
    const pincode = formState.get("pincode") || "";
    const landmark = formState.get("landmark") || "";
    const remarks = formState.get("remarks") || "";
    const type = formState.get("type") || "home";

    const updatedAddress = {
      house_no,
      street_name,
      area,
      post_office,
      pincode,
      landmark,
      remarks,
      type,
    };

    try {
      let updatedAddresses = [...user.address]; // Clone existing addresses

      if (editedAddress) {
        // Find the index of the matching address based on all fields
        const index = updatedAddresses.findIndex(
          (addr) =>
            addr.house_no === editedAddress.house_no &&
            addr.street_name === editedAddress.street_name &&
            addr.area === editedAddress.area &&
            addr.post_office === editedAddress.post_office &&
            addr.pincode === editedAddress.pincode &&
            addr.landmark === editedAddress.landmark &&
            addr.remarks === editedAddress.remarks &&
            addr.type === editedAddress.type
        );

        if (index !== -1) {
          // Replace the matched address
          updatedAddresses[index] = updatedAddress;
        } else {
          // If no match found, treat it as a new address
          updatedAddresses.push(updatedAddress);
        }
      } else {
        // Adding new address
        updatedAddresses.push(updatedAddress);
      }

      const customer = await updateCustomer(user._id, {
        address: updatedAddresses,
      });
      if (customer.message) {
        throw new Error(customer.message);
      }
      toast.success("Updated Successfully");
      user.address = customer.address;
      login(customer);
      setShowAddressForm(false);
      setEditedAddress(null);
      return { ...prevState };
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return { ...prevState };
    }
  }

  const [formState, formAction, isPending] = useActionState(
    updateCustomerAddress,
    {
      type: addressType,
    }
  );

  return (
    <div className="flex flex-col gap-6 flex-1 bg-custom-light-gray px-4 xlg:px-6 py-4 xlg:py-5 border border-[#ddd]">
      <h1 className="xlg:text-2xl text-custom-darkgreen md:text-xl text-lg">
        {editedAddress ? "Manage" : "Add"} Address
      </h1>
      <form action={formAction} className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder=" House Number"
            type="number"
            name="house_no"
            defaultValue={editedAddress?.house_no || ""}
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder=" Street Name"
            type="text"
            name="street_name"
            defaultValue={editedAddress?.street_name || ""}
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Area"
            type="text"
            name="area"
            defaultValue={editedAddress?.area || ""}
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Post Office"
            type="text"
            name="post_office"
            defaultValue={editedAddress?.post_office || ""}
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Pin Code"
            type="number"
            name="pincode"
            defaultValue={editedAddress?.pincode || ""}
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Landmark"
            name="landmark"
            defaultValue={editedAddress?.landmark || ""}
            type="text"
          />
        </div>
        <div className="flex-1 flex">
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder=" Remarks"
            type="text"
            name="remarks"
            defaultValue={editedAddress?.remarks || ""}
          />
        </div>
        <div className="flex gap-6">
          {["home", "office", "others"].map((type) => (
            <div key={type} className="flex items-center gap-3">
              <input
                type="radio"
                name="type"
                id={type}
                className="appearance-none checked:accent-white checked:ring-custom-gold size-4 rounded-full ring-4 ring-custom-gray"
                value={type}
                defaultChecked={formState.type === type}
                onChange={(e) => setAddressType(e.target.value)}
              />
              <label
                htmlFor={type}
                className="text-custom-gray xlg:text-lg text-base cursor-pointer capitalize"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start gap-6">
          <button
            type="submit"
            className="text-white inline-flex py-3 px-5 text-xs bg-custom-darkgreen gap-2 items-center justify-center"
          >
            {isPending && <MiniLoader />} Save Address
          </button>
          <button
            type="reset"
            onClick={() => {
              setShowAddressForm(false);
              setEditedAddress(null);
            }}
            className="text-custom-darkgreen inline-flex py-3 px-5 text-xs bg-[#ddd]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
