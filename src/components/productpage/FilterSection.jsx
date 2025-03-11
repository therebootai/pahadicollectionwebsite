import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const FilterSection = ({ categories, attributes }) => {
  const router = useRouter();
  const currentCategory = router.query.category || "";
  const selectedAttributes = router.query.attribute
    ? router.query.attribute.split(",")
    : [];

  const [selected, setSelected] = useState(new Set(selectedAttributes));
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSelected(new Set(selectedAttributes));
  }, [router.query.attribute]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleCheckboxChange = (attribute) => {
    const updatedSelected = new Set(selected);
    if (updatedSelected.has(attribute)) {
      updatedSelected.delete(attribute);
    } else {
      updatedSelected.add(attribute);
    }
    setSelected(updatedSelected);

    const queryParams = new URLSearchParams(router.query);
    if (updatedSelected.size > 0) {
      queryParams.set("attribute", Array.from(updatedSelected).join(","));
    } else {
      queryParams.delete("attribute");
    }

    router.push(`/products?${queryParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="relative">
      {!isMobile ? (
        <div className="flex flex-col border border-[#cccccc] rounded-sm">
          <div className="flex flex-col">
            <div className="h-[3.5rem] px-6 flex justify-between w-full items-center bg-custom-light-gray text-xl font-medium text-custom-darkgreen">
              <h1>Category</h1>
              <span>
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="p-4 flex flex-col gap-4">
              {categories.map((item, index) => {
                const isActive = currentCategory === item.mainCategory;
                return (
                  <Link
                    href={`/products?category=${encodeURIComponent(
                      item.mainCategory
                    )}`}
                    key={index}
                    className={`xlg:text-lg text-base ${
                      isActive
                        ? "bg-gradient-to-r from-custom-darkgold to-custom-gold text-transparent bg-clip-text"
                        : "text-custom-black hover:text-transparent hover:bg-gradient-to-r bg-clip-text from-custom-darkgold to-custom-gold"
                    }`}
                  >
                    &#x2022; {item.mainCategory}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="h-[3.5rem] px-6 flex justify-between w-full items-center bg-custom-light-gray text-xl font-medium text-custom-darkgreen">
              <h1>Style For</h1>
              <span>
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="p-4 flex flex-col gap-4">
              {attributes.map((item, index) => (
                <label
                  className="cl-checkbox xlg:text-lg text-base  text-custom-black hover:text-transparent hover:bg-gradient-to-r bg-clip-text from-custom-darkgold to-custom-gold"
                  key={index}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(item.attribute_title)}
                    onChange={() => handleCheckboxChange(item.attribute_title)}
                  />
                  <span> {item.attribute_title}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed -bottom-2 left-0 z-10 w-full bg-custom-darkgreen text-white shadow-lg p-4 flex justify-between border-t border-[#dddddd]">
            <button
              className="w-1/2 text-center text-lg font-medium border-r border-[#dddddd]"
              onClick={() =>
                setOpenSection(openSection === "category" ? null : "category")
              }
            >
              Category
            </button>
            <button
              className="w-1/2 text-center text-lg font-medium"
              onClick={() =>
                setOpenSection(openSection === "styleFor" ? null : "styleFor")
              }
            >
              Style For
            </button>
          </div>

          <AnimatePresence>
            {openSection && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-[3rem] left-0 w-full bg-white shadow-lg rounded-t-xl p-6 z-10"
              >
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-xl font-bold capitalize">
                    {openSection}
                  </h2>
                  <button
                    onClick={() => setOpenSection(null)}
                    className="text-2xl"
                  >
                    <IoMdClose />
                  </button>
                </div>

                <div className="mt-4">
                  {openSection === "category" && (
                    <div className="flex flex-col gap-3">
                      {categories.map((item, index) => (
                        <Link
                          href={`/products?category=${encodeURIComponent(
                            item.mainCategory
                          )}`}
                          key={index}
                          onClick={() => setOpenSection(null)}
                          className="text-lg text-custom-black hover:text-custom-darkgold"
                        >
                          {item.mainCategory}
                        </Link>
                      ))}
                    </div>
                  )}

                  {openSection === "styleFor" && (
                    <div className="flex flex-col gap-3">
                      {attributes.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 text-lg"
                        >
                          <input
                            type="checkbox"
                            checked={selected.has(item.attribute_title)}
                            onChange={() =>
                              handleCheckboxChange(item.attribute_title)
                            }
                          />
                          <span>{item.attribute_title}</span>
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
};

export default FilterSection;
