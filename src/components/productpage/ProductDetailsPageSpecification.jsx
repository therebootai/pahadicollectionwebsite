import React from "react";

const ProductDetailsPageSpecification = ({ specifications = [] }) => {
  if (specifications.length === 0) return <div>""</div>;

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
                {item.key}
              </div>
              <div className="w-[70%] p-4">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPageSpecification;
