"use client";
import React, { useContext, useEffect, useState } from "react";
import SinglePageImagesComponent from "./SingleProductImagesComponent";
import ProductDetailsPageNameSection from "./ProductDetailsPageNameSection";
import ProductPageHeadingIcon from "@/svg/productPageHeadingIcon";
import ProductDetailsPageDescription from "./ProductDetailsPageDescription";
import ProductDetailsPageSpecification from "./ProductDetailsPageSpecification";
import ProductPageDetailsReview from "./ProductPageDetailsReview";
import OurSimilerProduct from "./OurSimilerProduct";
import { AuthContext } from "@/context/AuthContext";
import { removeWishlist, updateWishlist } from "@/actions/customerActions";
import { toast } from "react-toastify";
import Link from "next/link";

const ProductDetailsPage = ({
  productImage,
  price,
  title,
  mrp,
  discount,
  slug,
  productId,
  description,
  specification,
  stock,
  products,
  category,
  coupons,
}) => {
  const [activeSection, setActiveSection] = useState("description");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const { user, isAuthenticated, dispatch } = useContext(AuthContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (user?.wishlist?.some((item) => item._id === productId)) {
      setIsWishlisted(true);
    } else {
      setIsWishlisted(false);
    }
  }, [user?.wishlist, productId]);

  const handleWishlist = async () => {
    if (!isAuthenticated) {
      toast.error("You Are not loged in");

      return;
    }

    try {
      if (isWishlisted) {
        const data = await removeWishlist(user.customerId, productId);
        setIsWishlisted(false);
        toast.success("Wishlist Removed");

        dispatch({
          type: "LOGIN",
          payload: { ...user, wishlist: data.wishlist },
        });
      } else {
        const data = await updateWishlist(user.customerId, productId);
        setIsWishlisted(true);
        toast.success("Wishlist added");

        dispatch({
          type: "LOGIN",
          payload: { ...user, wishlist: data.wishlist },
        });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[45%] w-full relative ">
          <SinglePageImagesComponent images={productImage} />
        </div>
        <div className="lg:w-[55%] w-full relative">
          <ProductDetailsPageNameSection
            price={price}
            title={title}
            mrp={mrp}
            discount={discount}
            productId={productId}
            slug={slug}
            isWishlisted={isWishlisted}
            handleWishlist={handleWishlist}
            stock={stock}
            coupons={coupons}
          />
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
          {activeSection === "description" && (
            <ProductDetailsPageDescription description={description} />
          )}
          {activeSection === "specifications" && (
            <ProductDetailsPageSpecification specifications={specification} />
          )}
          {activeSection === "reviews" && <ProductPageDetailsReview />}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className=" flex justify-between items-center ">
          <h1 className=" text-4xl font-medium text-custom-darkgreen ">
            Our{" "}
            <span className=" text-transparent bg-gradient-to-r from-custom-darkgold to-custom-gold bg-clip-text">
              {" "}
              Product{" "}
            </span>
          </h1>
          <Link
            href={`/products?page=1&category=${encodeURIComponent(category)}`}
            className=" text-sm xlg:text-lg font-medium text-custom-darkgreen"
          >
            View {category} &#x226B;
          </Link>
        </div>
        <OurSimilerProduct products={products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
