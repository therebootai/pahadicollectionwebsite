"use client";
import { updateCustomer } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import ProfileCard from "@/ui/ProfileCard";
import { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-toastify";

export default function AddressesList({
  setEditedAddress,
  setShowAddressForm,
  user,
}) {
  const { login } = useContext(AuthContext);
  async function deleteAddress(address) {
    try {
      const customer = await updateCustomer(user._id, {
        address: user.address.filter((add) => add !== address),
      });
      toast.success("Updated Successfully");
      login(customer);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg xlg:text-2xl text-custom-darkgreen">
        Saved Addresses
      </h1>
      <div className="flex flex-col xlg:gap-6 gap-4">
        {user.address &&
          user.address.length > 0 &&
          user?.address?.map((add, index) => (
            <ProfileCard key={index}>
              <ProfileCard.Box
                boxProps={{ className: "flex flex-col gap-3 flex-1" }}
              >
                <h3 className="bg-custom-yellow rounded-sm py-1 px-2 text-sm text-custom-darkgreen capitalize self-start">
                  {add.type}
                </h3>
                <div className="flex flex-col gap-3 flex-1">
                  <h1 className="text-custom-darkgreen xlg:text-lg text-base">
                    {user?.name}
                  </h1>
                  <div className="flex gap-2 items-center flex-wrap">
                    {Object.entries(add).map(
                      ([key, value]) =>
                        key !== "type" && (
                          <p
                            className="text-custom-gray xlg:text-lg text-base inline relative after:content-[','] last:after:content-['']"
                            key={key}
                          >
                            {value}
                          </p>
                        )
                    )}
                  </div>
                </div>
              </ProfileCard.Box>
              <ProfileCard.Btn
                buttonProps={{ className: "self-start relative group" }}
              >
                <BsThreeDots size={24} />
                <aside className="absolute top-0 -left-full -translate-x-3/4 bg-white p-3 shadow-custom hidden group-focus-within:flex flex-col gap-3 items-start">
                  <button
                    type="button"
                    className="text-custom-darkgreen text-base capitalize"
                    onClick={() => {
                      setShowAddressForm(true);
                      setEditedAddress(add);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteAddress(add)}
                    className="text-custom-darkgreen text-base capitalize"
                  >
                    delete
                  </button>
                </aside>
              </ProfileCard.Btn>
            </ProfileCard>
          ))}
      </div>
    </div>
  );
}
