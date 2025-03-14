import React from "react";

const ProductDetailsPageDescription = ({ description }) => {
  return (
    <div>
      <div
        className="text-lg text-custom-gray "
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default ProductDetailsPageDescription;
