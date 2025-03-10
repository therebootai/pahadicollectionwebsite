import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const FilterSection = ({ categories }) => {
  const router = useRouter();
  const currentCategory = router.query.category || "";

  return (
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
                className={`text-lg ${
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
    </div>
  );
};

export default FilterSection;
