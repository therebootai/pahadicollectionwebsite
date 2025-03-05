import React, { useState } from "react";
import MainPageTemplate from "@/templates/MainPageTemplate";
import SubPageBanner from "../global/SubPageBanner";
import SinglePageImagesComponent from "./SingleProductImagesComponent";
import ProductDetailsPageNameSection from "./ProductDetailsPageNameSection";
import ProductPageHeadingIcon from "@/svg/productPageHeadingIcon";
import ProductDetailsPageDescription from "./ProductDetailsPageDescription";
import ProductDetailsPageSpecification from "./ProductDetailsPageSpecification";
import ProductPageDetailsReview from "./ProductPageDetailsReview";
import OurSimilerProduct from "./OurSimilerProduct";

const ProductDetailsPage = () => {
  const [activeSection, setActiveSection] = useState("description");

  const images = [
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
    "/images/product5.png",
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[45%] w-full relative ">
          <SinglePageImagesComponent images={images} />
        </div>
        <div className="lg:w-[55%] w-full relative">
          <ProductDetailsPageNameSection />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className=" flex items-center gap-2 md:gap-4 font-medium md:font-normal">
          <button
            className={`lg:h-[3rem] md:h-[2.5rem] h-0 px-2 md:px-4 lg:px-6 flex justify-center items-center ${
              activeSection === "description"
                ? "md:bg-custom-darkgreen md:text-white text-custom-darkgold"
                : "md:bg-custom-light-gray text-custom-darkgreen"
            } rounded-sm text-sm lg:text-lg`}
            onClick={() => handleSectionChange("description")}
          >
            Description
          </button>
          <button
            className={`lg:h-[3rem] md:h-[2.5rem]  px-2 md:px-4 lg:px-6 flex justify-center items-center ${
              activeSection === "specifications"
                ? "md:bg-custom-darkgreen md:text-white text-custom-darkgold"
                : "md:bg-custom-light-gray text-custom-darkgreen"
            } rounded-sm text-sm lg:text-lg`}
            onClick={() => handleSectionChange("specifications")}
          >
            Specifications
          </button>
          <button
            className={`lg:h-[3rem] md:h-[2.5rem] h-0 px-2 md:px-4 lg:px-6 flex justify-center items-center ${
              activeSection === "reviews"
                ? "md:bg-custom-darkgreen md:text-white text-custom-darkgold"
                : "md:bg-custom-light-gray text-custom-darkgreen"
            } rounded-sm text-sm lg:text-lg`}
            onClick={() => handleSectionChange("reviews")}
          >
            Reviews
          </button>
          <ProductPageHeadingIcon className={"w-full h-[1rem] object-cover"} />
        </div>
        <div className="mt-2">
          {activeSection === "description" && <ProductDetailsPageDescription />}
          {activeSection === "specifications" && (
            <ProductDetailsPageSpecification />
          )}
          {activeSection === "reviews" && <ProductPageDetailsReview />}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className=" text-4xl font-medium text-custom-darkgreen ">
          Our{" "}
          <span className=" text-transparent bg-gradient-to-r from-custom-darkgold to-custom-gold bg-clip-text">
            {" "}
            Product{" "}
          </span>
        </h1>
        <OurSimilerProduct />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
