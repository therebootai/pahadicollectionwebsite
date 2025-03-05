import SubPageBanner from "@/components/global/SubPageBanner";
import ProductDetailsPage from "@/components/productpage/ProductDetailsPage";
import MainPageTemplate from "@/templates/MainPageTemplate";
import React from "react";

const SingleProductPage = () => {
  return (
    <MainPageTemplate metaData={{ title: "Product", description: "Product" }}>
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <ProductDetailsPage />
    </MainPageTemplate>
  );
};

export default SingleProductPage;
