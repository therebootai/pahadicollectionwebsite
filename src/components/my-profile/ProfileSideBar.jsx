"use client";
import MobileFixFooter from "@/ui/MobileFixFooter";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function ProfileSideBar() {
  const pathname = usePathname();

  const [openSection, setOpenSection] = useState(null);

  const isActive = (path) => {
    return pathname === path;
  };

  const myProfileLinks = [
    {
      href: "/my-profile",
      text: "Account information",
    },
    {
      href: "/my-profile/manage-address",
      text: "Manage Address",
    },
  ];

  const myInteractionLinks = [
    {
      href: "/my-interaction/my-wishlist",
      text: "My Wishlist",
    },
    {
      href: "/my-interaction/my-cart",
      text: "My Cart",
    },
    {
      href: "/my-orders",
      text: "My Orders",
    },
  ];

  return (
    <>
      <aside className="hidden lg:flex flex-col border border-[#ccc] rounded-sm">
        <div className="flex flex-col">
          <h2 className="text-custom-darkgreen text-lg md:text-xl xlg:text-2xl bg-custom-light-gray py-4 xlg:py-5 px-4 md:px-6 xlg:px-8">
            Account Settings
          </h2>
          <div className="py-4 xlg:py-5 px-4 md:px-6 xlg:px-8 flex flex-col gap-4">
            {myProfileLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-sm xlg:text-base hover:gradient-text ${
                  isActive(link.href)
                    ? "gradient-text"
                    : "text-custom-darkgreen"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-custom-darkgreen text-lg md:text-xl xlg:text-2xl bg-custom-light-gray py-4 xlg:py-5 px-4 md:px-6 xlg:px-8">
            My Interactions
          </h2>
          <div className="py-4 xlg:py-5 px-4 md:px-6 xlg:px-8 flex flex-col gap-4">
            {myInteractionLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-sm xlg:text-base hover:gradient-text ${
                  isActive(link.href)
                    ? "gradient-text"
                    : "text-custom-darkgreen"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </aside>
      <MobileFixFooter className="bg-custom-darkgreen text-white shadow-lg p-4 flex justify-between border-t border-[#dddddd]">
        <button
          className="w-1/2 text-center text-lg font-medium border-r border-[#dddddd]"
          onClick={() =>
            setOpenSection(openSection === "account" ? null : "account")
          }
        >
          Account Settings
        </button>
        <button
          className="w-1/2 text-center text-lg font-medium"
          onClick={() =>
            setOpenSection(openSection === "interaction" ? null : "interaction")
          }
        >
          My Interactions
        </button>
        <AnimatePresence>
          {openSection && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-[3.25rem] left-0 w-full bg-white shadow-lg rounded-t-xl p-6 z-10"
            >
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl capitalize text-custom-darkgreen">
                  {openSection}
                </h2>
                <button
                  onClick={() => setOpenSection(null)}
                  className="text-2xl text-custom-darkgreen"
                >
                  <IoMdClose />
                </button>
              </div>

              <div className="mt-4">
                {openSection === "account" && (
                  <div className="flex flex-col gap-3">
                    {myProfileLinks.map((item, index) => (
                      <Link
                        href={item.href}
                        key={index}
                        onClick={() => setOpenSection(null)}
                        className={`text-lg ${
                          isActive(item.href)
                            ? "gradient-text"
                            : "text-custom-darkgreen"
                        }`}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}

                {openSection === "interaction" && (
                  <div className="flex flex-col gap-3">
                    {myInteractionLinks.map((item, index) => (
                      <Link
                        href={item.href}
                        key={index}
                        onClick={() => setOpenSection(null)}
                        className={`text-lg ${
                          isActive(item.href)
                            ? "gradient-text"
                            : "text-custom-darkgreen"
                        }`}
                      >
                        {item.text}
                      </Link>
                    ))}
                    <Link
                      href="/my-orders"
                      onClick={() => setOpenSection(null)}
                      className={`text-lg ${
                        isActive("/my-orders")
                          ? "gradient-text"
                          : "text-custom-darkgreen"
                      }`}
                    >
                      My Orders
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MobileFixFooter>
    </>
  );
}
