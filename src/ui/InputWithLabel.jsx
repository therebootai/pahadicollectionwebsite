import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function InputWithLabel({ label, inputProps, clickEvent }) {
  const [startEditing, setStartEditing] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-5">
        <label
          className="text-2xl text-custom-darkgreen"
          htmlFor={inputProps.id}
        >
          {label}
        </label>
        {!startEditing ? (
          <button
            type="button"
            className="text-xs capitalize inline-flex gap-1 bg-custom-darkgreen text-white items-center px-3 py-1 rounded-sm"
            onClick={() => setStartEditing(true)}
          >
            <BiSolidEditAlt />
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="text-xs capitalize inline-flex gap-1 bg-custom-green text-white items-center px-3 py-1 rounded-sm"
            onClick={clickEvent}
          >
            <FaCheck />
            save
          </button>
        )}
        {startEditing && (
          <button
            type="button"
            className="text-xs capitalize inline-flex gap-1 bg-red-600 text-white items-center px-3 py-1 rounded-sm"
            onClick={() => setStartEditing(false)}
          >
            <IoClose />
            Close
          </button>
        )}
      </div>
      <input
        {...inputProps}
        className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
        disabled={!startEditing}
      />
    </div>
  );
}
