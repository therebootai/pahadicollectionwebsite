import { useActionState, useCallback, useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import MiniLoader from "./MiniLoader";

export default function InputWithLabel({ label, inputProps, saveEvent }) {
  const [startEditing, setStartEditing] = useState(false);

  const handelSave = async (prevState, formState) => {
    const currentUpdate = formState.get(inputProps.name);
    await saveEvent({ [inputProps.name]: currentUpdate });
    return { ...prevState };
  };

  const [_, formAction, isPending] = useActionState(handelSave, null);

  return (
    <form className="flex flex-col gap-6" action={formAction}>
      <div className="flex items-center gap-5">
        <label
          className="text-2xl text-custom-darkgreen"
          htmlFor={inputProps.id}
        >
          {label}
        </label>
        {!startEditing && (
          <button
            type="button"
            className="text-xs capitalize inline-flex gap-1 bg-custom-darkgreen text-white items-center px-3 py-1 rounded-sm"
            onClick={() => setStartEditing(true)}
          >
            <BiSolidEditAlt />
            Edit
          </button>
        )}
        {startEditing && (
          <button
            type="submit"
            className="text-xs capitalize inline-flex gap-1 bg-custom-green text-white items-center px-3 py-1 rounded-sm"
          >
            <FaCheck />
            save
          </button>
        )}
        {startEditing && (
          <button
            type="reset"
            className="text-xs capitalize inline-flex gap-1 bg-red-600 text-white items-center px-3 py-1 rounded-sm"
            onClick={() => setStartEditing(false)}
          >
            <IoClose />
            Close
          </button>
        )}
        {isPending && <MiniLoader />}
      </div>
      <input
        {...inputProps}
        className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
        disabled={!startEditing}
      />
    </form>
  );
}
