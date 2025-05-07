"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { IoClose } from "react-icons/io5";

export default function Popup({ isOpen, onClose, children }) {
  const modalRef = useClickOutside(onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1100]">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-2 mx-4 lg:mx-0"
      >
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl">
          <IoClose />
        </button>
      </div>
    </div>
  );
}
