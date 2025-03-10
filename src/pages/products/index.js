import React, { useState, useEffect, useRef } from "react";
import ProductDesignCard from "@/components/card/ProductDesignCard";
import SubPageBanner from "@/components/global/SubPageBanner";
import CategorySlider from "@/components/productpage/CategorySlider";
import FilterSection from "@/components/productpage/FilterSection";
import { fetchCategoryData } from "@/actions/FetchCategory";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Link from "next/link";
import { fetchProductsData } from "@/actions/FetchProducts";
import { useRouter } from "next/router";

const Products = ({ categories, initialProducts, totalPages }) => {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const router = useRouter();
  const { category } = router.query;

  const loadMoreProducts = async () => {
    if (loading || page >= totalPages) return;

    setLoading(true);
    const nextPage = page + 1;
    const response = await fetchProductsData(nextPage, 12, category);

    if (response.products.length > 0) {
      setProducts((prevProducts) => [...prevProducts, ...response.products]);
      setPage(nextPage);
    }
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProducts();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [products]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true);
      const response = await fetchProductsData(1, 12, category);
      setProducts(response.products);
      setPage(1);
      setLoading(false);
    };

    fetchFilteredProducts();
  }, [category]);

  return (
    <MainPageTemplate metaData={{ title: "Products", description: "Products" }}>
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <CategorySlider categories={categories} />
        <div className="border-t border-[#cccccc]">
          <div className="flex pt-6">
            <div className="w-[20%]">
              <FilterSection categories={categories} />
            </div>

            <div className="w-[80%] grid grid-cols-4 gap-4 p-4">
              {products.map((item, index) => (
                <Link
                  href={`/products/${item.slug}`}
                  key={index}
                  className="h-fit relative"
                >
                  <ProductDesignCard
                    productimg={item.thumbnail_image.secure_url}
                    producthoverimg={item.hoverImage.secure_url}
                    productname={item.title}
                    productDiscount={item.discount}
                    productprice={item.price}
                    productMRP={item.mrp}
                  />
                </Link>
              ))}

              <div ref={observerRef} className="col-span-4 text-center py-4">
                {loading && <span>Loading more products...</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPageTemplate>
  );
};

export default Products;

export async function getServerSideProps({ query }) {
  const category = query.category || "";
  const categories = await fetchCategoryData();
  const initialData = await fetchProductsData(1, 12, category);

  return {
    props: {
      categories,
      initialProducts: initialData.products,
      totalPages: initialData.pagination.totalPages,
    },
  };
}
