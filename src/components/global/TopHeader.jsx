"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const TopHeader = () => {
  const socialmedia = [
    { icons: <FaYoutube />, href: "" },
    { icons: <FaLinkedinIn />, href: "" },
    { icons: <FaWhatsapp />, href: "" },
    { icons: <FaInstagram />, href: "" },
    { icons: <FaFacebookF />, href: "" },
  ];
  return (
    <div className="z-[60] w-full ">
      <div className="h-[3rem] hidden md:flex justify-between sm:gap-2 md:gap-0 items-center px-6  text-white">
        {/* <div className="flex flex-row gap-2 items-center">
          {socialmedia.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className=" size-6 xlg:size-7 flex justify-center items-center rounded-full bg-custom-darkgreen text-white"
            >
              {item.icons}
            </Link>
          ))}
        </div> */}
        <div className="xlg:text-xl text-base  text-custom-darkgreen">
          Exclusive Flash Sale: Up to 10% Off on Handmade Jewelry!
        </div>
        <Link
          href="mailto:pahadicollections124@gmail.com"
          className="xlg:text-xl text-base  text-custom-darkgreen"
        >
          pahadicollections124@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
