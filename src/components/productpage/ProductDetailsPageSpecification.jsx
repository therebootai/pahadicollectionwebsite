import React from "react";

const ProductDetailsPageSpecification = () => {
  const specifications = [
    { name: "BRAND", details: "HP" },
    { name: "BRAND", details: "HP" },
    { name: "BRAND", details: "HP" },
  ];
  return (
    <div>
      <div className="flex flex-col">
        <div className={`flex flex-col border border-[#cacaca] `}>
          {specifications.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row border-b border-[#CACACA] ${
                index % 2 === 0 ? "bg-transparent" : "bg-[#F4F4F4]"
              } `}
            >
              <div className="w-[30%] p-4  border-r border-[#CACACA]">
                {item.name}
              </div>
              <div className="w-[70%] p-4">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPageSpecification;
