"use client";
import Popup from "@/ui/PopUp";
import ProfileCard from "@/ui/ProfileCard";
import { useState } from "react";
import AddAndEditAddress from "../my-profile/mange-address/AddAndEditAddress";

export default function OrderAddressPlace({
  user,
  address,
  setDeliveryLocation,
  allAddresses,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  return (
    <>
      <ProfileCard>
        <ProfileCard.Box boxProps={{ className: "flex flex-col gap-3 flex-1" }}>
          <h3 className="bg-custom-yellow rounded-sm py-1 px-2 text-sm text-custom-darkgreen capitalize self-start">
            {address.type}
          </h3>
          <div className="flex flex-col gap-3 flex-1">
            <h1 className="text-custom-darkgreen xlg:text-lg text-base">
              {user.name}
            </h1>
            <div className="flex gap-2 items-center flex-wrap">
              {Object.entries(address).map(
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
          buttonProps={{
            className:
              "self-start relative group text-custom-light-gray bg-custom-gray px-2 py-1 rounded-sm",
            type: "button",
            onClick: () => setIsModalOpen(true),
          }}
        >
          Change
        </ProfileCard.Btn>
      </ProfileCard>
      <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {allAddresses.map((add, index) => (
          <div
            className="flex gap-2 items-center flex-wrap lg:flex-nowrap truncate border-b border-[#ddd] last-of-type:border-b-0 py-1 last-of-type:py-0 ps-1"
            key={index}
          >
            <input
              type="radio"
              name="delivery_address"
              className="appearance-none checked:accent-white checked:ring-custom-gold size-2 rounded-full ring-2 ring-custom-gray"
              id={index}
              checked={address === add}
              onChange={() => setDeliveryLocation(add)}
            />
            {Object.entries(add).map(
              ([key, value]) =>
                key !== "type" && (
                  <label
                    className="text-custom-darkgreen xlg:text-lg text-base inline relative after:content-[','] last:after:content-['']"
                    key={key}
                    htmlFor={index}
                  >
                    {value}
                  </label>
                )
            )}
          </div>
        ))}
        {!showAddressForm && (
          <button
            type="button"
            className="text-custom-gold xlg:text-lg text-base relative ps-4 underline border-t border-[#ddd]"
            onClick={() => setShowAddressForm(!showAddressForm)}
          >
            Add new Address
          </button>
        )}
        {showAddressForm && (
          <AddAndEditAddress
            setShowAddressForm={() => setShowAddressForm(false)}
            user={user}
          />
        )}
      </Popup>
    </>
  );
}
