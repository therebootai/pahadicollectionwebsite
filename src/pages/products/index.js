import ProductDesignCard from "@/components/card/ProductDesignCard";
import SubPageBanner from "@/components/global/SubPageBanner";
import CategorySlider from "@/components/productpage/CategorySlider";
import FilterSection from "@/components/productpage/FilterSection";
import { fetchCategoryData } from "@/serverSide/FetchCategory";
import MainPageTemplate from "@/templates/MainPageTemplate";
import React from "react";

const Products = ({ categories }) => {
  const products = [
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
  ];
  return (
    <MainPageTemplate>
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <CategorySlider categories={categories} />
        <div className=" border-t border-[#cccccc]  ">
          <div className="flex gap-6 pt-6 h-[calc(100vh-100px)]">
            {/* Left Filter Section (Fixed) */}
            <div className="w-[20%] h-full overflow-hidden pt-4">
              <FilterSection categories={categories} />
            </div>

            {/* Right Product Section (Scrollable) */}
            <div className="w-[80%] grid grid-cols-4 gap-4 overflow-y-auto p-4 no-scrollbar h-full">
              {products.map((item, index) => (
                <div key={index} className="h-fit relative">
                  <ProductDesignCard
                    productimg={item.productimg}
                    producthoverimg={item.producthoverimg}
                    productname={item.productname}
                    productDiscount={item.productDiscount}
                    productprice={item.productprice}
                    productMRP={item.productMRP}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainPageTemplate>
  );
};

export default Products;

export async function getServerSideProps() {
  const categories = await fetchCategoryData();

  return { props: { categories } };
}
