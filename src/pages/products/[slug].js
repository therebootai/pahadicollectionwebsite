import { fetchSingleProductData } from "@/actions/FetchSingleProduct";
import SubPageBanner from "@/components/global/SubPageBanner";
import ProductDetailsPage from "@/components/productpage/ProductDetailsPage";
import MainPageTemplate from "@/templates/MainPageTemplate";
import React from "react";

const SingleProductPage = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <MainPageTemplate
      metaData={{ title: product.title, description: product.description }}
    >
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <ProductDetailsPage
        title={product.title}
        price={product.price}
        productImage={
          Array.isArray(product.productImage)
            ? product.productImage.map((img) => img.secure_url)
            : []
        }
        mrp={product.mrp}
        discount={product.discount}
        slug={product.slug}
      />
    </MainPageTemplate>
  );
};

export default SingleProductPage;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const product = await fetchSingleProductData(slug);
  console.log("Fetched product:", product);

  return {
    props: {
      product,
    },
  };
}
