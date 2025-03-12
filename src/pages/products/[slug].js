import { fetchProductsData } from "@/actions/FetchProducts";
import { fetchSingleProductData } from "@/actions/FetchSingleProduct";
import SubPageBanner from "@/components/global/SubPageBanner";
import ProductDetailsPage from "@/components/productpage/ProductDetailsPage";
import MainPageTemplate from "@/templates/MainPageTemplate";
import React from "react";

const SingleProductPage = ({ product, products }) => {
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
        productId={product._id}
        productImage={
          Array.isArray(product.productImage)
            ? product.productImage.map((img) => img.secure_url)
            : []
        }
        mrp={product.mrp}
        discount={product.discount}
        slug={product.slug}
        description={product.description}
        specification={product.specification}
        stock={product.in_stock}
        products={products}
        category={product.category.mainCategory}
      />
    </MainPageTemplate>
  );
};

export default SingleProductPage;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const product = await fetchSingleProductData(slug);
  const category = product.category.mainCategory;
  const initialData = await fetchProductsData(1, 12, category);

  return {
    props: {
      product,
      products: initialData.products,
    },
  };
}
