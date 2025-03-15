"use client";

import MobileFixFooter from "@/ui/MobileFixFooter";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState("");
  const [openSection, setOpenSection] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const sortOrders = ["low to high", "high to low", "newest", "oldest"];

  function handelSorting(sort) {
    const params = new URLSearchParams(searchParams);

    switch (sort) {
      case "low to high":
        setSelected("low to high");
        params.set("sortBy", "price");
        params.set("order", "asc");
        router.push(`/products/search?${params.toString()}`, {
          shallow: true,
        });
        return;

      case "high to low":
        setSelected("high to low");
        params.set("sortBy", "price");
        params.set("order", "desc");
        router.push(`/products/search?${params.toString()}`, {
          shallow: true,
        });
        return;

      case "newest":
        setSelected("newest");
        params.set("sortBy", "createdAt");
        params.set("order", "desc");
        router.push(`/products/search?${params.toString()}`, {
          shallow: true,
        });
        return;

      case "oldest":
        setSelected("oldest");
        params.set("sortBy", "createdAt");
        params.set("order", "asc");
        router.push(`/products/search?${params.toString()}`, {
          shallow: true,
        });
        return;

      default:
        return;
    }
  }

  return (
    <div className="relative">
      {!isMobile ? (
        <div className="flex flex-col border border-[#cccccc] rounded-sm">
          <div className="flex flex-col">
            <div className="h-[3.5rem] px-6 flex justify-between w-full items-center bg-custom-light-gray text-xl font-medium text-custom-darkgreen">
              <h1>Advance Search</h1>
              <span>
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="p-4 flex flex-col gap-4">
              {sortOrders.map((item, index) => (
                <label
                  className="xlg:text-lg text-base text-custom-black inline-flex items-center gap-2 cursor-pointer"
                  key={index}
                >
                  <input
                    type="radio"
                    checked={selected === item}
                    name="sort"
                    className="appearance-none checked:accent-white checked:ring-custom-gold size-3 rounded-full ring-4 ring-custom-gray"
                    onChange={() => handelSorting(item)}
                  />
                  <span
                    className={`capitalize hover:text-transparent hover:bg-gradient-to-r bg-clip-text from-custom-darkgold to-custom-gold ${
                      selected === item
                        ? `bg-gradient-to-r bg-clip-text from-custom-darkgold to-custom-gold text-transparent`
                        : "text-custom-darkgreen"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <MobileFixFooter className="bg-custom-darkgreen text-white shadow-lg p-4 flex justify-between border-t border-[#dddddd]">
            <button
              className="w-1/2 text-center text-lg font-medium"
              onClick={() => setOpenSection(true)}
            >
              Advance Search
            </button>
          </MobileFixFooter>

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
                  <h2 className="text-xl font-bold capitalize">Sort</h2>
                  <button
                    onClick={() => setOpenSection(false)}
                    className="text-2xl"
                  >
                    <IoMdClose />
                  </button>
                </div>

                <div className="mt-4">
                  {openSection && (
                    <div className="flex flex-col gap-3">
                      {sortOrders.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 text-lg"
                        >
                          <input
                            type="radio"
                            checked={selected === item}
                            name="sort"
                            className="appearance-none checked:accent-white checked:ring-custom-gold size-3 rounded-full ring-4 ring-custom-gray"
                            onChange={() => handelSorting(item)}
                          />
                          <span
                            className={`capitalize ${
                              selected === item
                                ? `bg-gradient-to-r bg-clip-text from-custom-darkgold to-custom-gold text-transparent`
                                : "text-custom-darkgreen"
                            }`}
                          >
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
