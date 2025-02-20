"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
      <div className=" bg-defined-green h-[3rem] hidden md:flex justify-between sm:gap-2 md:gap-0 items-center px-6  text-white">
        <div className="flex flex-row gap-2 items-center">
          {socialmedia.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className=" size-6 xlg:size-7 flex justify-center items-center rounded-full bg-custom-darkgreen text-white"
            >
              {item.icons}
            </Link>
          ))}
        </div>
        <div className="xlg:text-xl text-base  text-custom-darkgreen">
          Sale up to 20% in this holiday. Shop Now!
        </div>
        <Link
          href={""}
          className="xlg:text-xl text-base  text-custom-darkgreen"
        >
          contact@website.com
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
