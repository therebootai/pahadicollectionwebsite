"use client";
import { IoAdd } from "react-icons/io5";
import AddAndEditAddress from "./AddAndEditAddress";
import AddressesList from "./AddressesList";
import { useState } from "react";

export default function AddressEditSction({ user }) {
  const [showAddressForm, setShowAddressForm] = useState(
    user?.address?.length > 0 ? false : true
  );
  const [editedAddress, setEditedAddress] = useState(null);

  return (
    <div className="flex flex-1 gap-6 flex-col">
      <button
        type="button"
        className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-darkgreen text-base xlg:text-lg text-left flex items-center"
        onClick={() => setShowAddressForm(!showAddressForm)}
      >
        <IoAdd />
        Add New Address
      </button>
      {showAddressForm && (
        <AddAndEditAddress
          editedAddress={editedAddress}
          setShowAddressForm={setShowAddressForm}
          setEditedAddress={setEditedAddress}
          user={user}
        />
      )}
      <AddressesList
        setEditedAddress={setEditedAddress}
        setShowAddressForm={setShowAddressForm}
        user={user}
      />
    </div>
  );
}
