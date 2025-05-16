import { updateCustomer } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import MiniLoader from "@/ui/MiniLoader";
import { useActionState, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AddAndEditAddress({
  editedAddress = null,
  setShowAddressForm,
  setEditedAddress,
  user,
}) {
  const { login } = useContext(AuthContext);
  const [addressType, setAddressType] = useState("home");
  const [postOffices, setPostOffices] = useState([]);
  const [pinCodes, setPinCodes] = useState([]);
  const [selectedPostOffice, setSelectedPostOffice] = useState(null);
  const [selectedPinCode, setSelectedPinCode] = useState(null);

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
      if (editedAddress) {
        setEditedAddress(null);
      }
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

  async function getPincode(po) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_POSTAL_URL}/postoffice/${po}`
      );
      const data = await response.json();
      const { PostOffice } = data[0];
      console.log(PostOffice);
      PostOffice ? setPostOffices(PostOffice) : setPostOffices([]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPostOffice(po) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_POSTAL_URL}/pincode/${po}`
      );
      const data = await response.json();
      const { PostOffice } = data[0];
      PostOffice ? setPinCodes(PostOffice) : setPinCodes([]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (editedAddress) {
      setSelectedPostOffice(editedAddress.post_office);
      setSelectedPinCode(editedAddress.pincode);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 flex-1 bg-custom-light-gray px-4 xlg:px-6 py-4 xlg:py-5 border border-[#ddd]">
      <h1 className="xlg:text-2xl text-custom-darkgreen md:text-xl text-lg">
        {editedAddress ? "Manage" : "Add"} Address
      </h1>
      <form action={formAction} className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="House Number / House Name / Flat Number"
            type="text"
            name="house_no"
            defaultValue={editedAddress?.house_no || ""}
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
          <div className="relative flex flex-1">
            <input
              className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
              placeholder="Post Office"
              type="text"
              onChange={(e) => {
                setSelectedPostOffice(e.target.value);
                getPincode(e.target.value);
              }}
              name="post_office"
              value={selectedPostOffice}
              required
            />
            {postOffices && postOffices.length > 0 && (
              <div className="absolute top-full right-0 w-full flex flex-col gap-2 items-start px-2 py-1 text-custom-black bg-white">
                {postOffices.map((pin) => (
                  <p
                    key={pin.Pincode}
                    onClick={() => {
                      setSelectedPostOffice(pin.Name);
                      setSelectedPinCode(pin.Pincode);
                      setPostOffices([]);
                    }}
                    className="border-b w-full last:border-b-0 pb-0.5 cursor-pointer"
                  >
                    {pin.Name}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex flex-1">
            <input
              className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
              placeholder="Pin Code"
              type="text"
              onChange={(e) => {
                setSelectedPinCode(e.target.value);
                getPostOffice(e.target.value);
              }}
              inputMode="numeric"
              value={selectedPinCode}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              minLength={6}
              maxLength={6}
              name="pincode"
              required
            />
            {pinCodes && pinCodes.length > 0 && (
              <div className="absolute top-full right-0 w-full flex flex-col gap-2 items-start px-2 py-1 text-custom-black bg-white">
                {pinCodes.map((pin) => (
                  <p
                    key={pin.Pincode}
                    onClick={() => {
                      setSelectedPinCode(pin.Pincode);
                      setSelectedPostOffice(pin.Name);
                      setPinCodes([]);
                    }}
                    className="border-b w-full last:border-b-0 pb-0.5 cursor-pointer"
                  >
                    {pin.Pincode}
                  </p>
                ))}
              </div>
            )}
          </div>
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
              if (editedAddress) setEditedAddress(null);
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
