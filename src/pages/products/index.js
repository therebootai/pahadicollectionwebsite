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
import MiniLoader from "@/ui/MiniLoader";
import { fetchAtributeData } from "@/actions/fetchAtribute";
import useElementHeight from "@/hooks/useElementHeight";

const Products = ({
  categories,
  initialProducts,
  totalPages,
  attributeslist,
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const router = useRouter();
  const { category, attribute } = router.query;
  const [rightSideHeight, leftSideRef] = useElementHeight();

  const selectedAttributes = attribute ? attribute.split(",") : [];

  const loadMoreProducts = async () => {
    if (loading || page >= totalPages) return;

    setLoading(true);
    const nextPage = page + 1;
    const response = await fetchProductsData(
      nextPage,
      12,
      category,
      selectedAttributes
    );

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

  const fetchFilteredProducts = async () => {
    setLoading(true);
    const response = await fetchProductsData(
      1,
      12,
      category,
      selectedAttributes
    );
    setProducts(response.products);
    setPage(1);
    setLoading(false);
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [category, attribute]);

  return (
    <MainPageTemplate metaData={{ title: "Products", description: "Products" }}>
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <CategorySlider categories={categories} />
        <div className="border-t border-[#cccccc]">
          <div className="flex pt-6">
            <div className="lg:w-[20%]" ref={leftSideRef}>
              <FilterSection
                categories={categories}
                attributes={attributeslist}
              />
            </div>

            <div
              className="lg:w-[80%] w-full overflow-scroll no-scrollbar  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-2 lg:py-0 lg:p-4"
              style={{ height: `${rightSideHeight}px` }}
            >
              {products.map((item, index) => (
                <Link
                  href={`/products/${item.slug}`}
                  key={index}
                  className="h-fit relative"
                >
                  <ProductDesignCard
                    productId={item._id}
                    productimg={item.thumbnail_image.secure_url}
                    producthoverimg={item.hoverImage.secure_url}
                    productname={item.title}
                    productDiscount={item.discount}
                    productprice={item.price}
                    productMRP={item.mrp}
                  />
                </Link>
              ))}

              <div
                ref={observerRef}
                className="xl:col-span-4 md:col-span-3 col-span-2 text-center py-4"
              >
                {loading && <MiniLoader />}
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
  const attributes = query.attribute ? query.attribute.split(",") : [];
  const categories = await fetchCategoryData();
  const attributeslist = await fetchAtributeData();

  const initialData = await fetchProductsData(1, 12, category, attributes);

  return {
    props: {
      categories,
      attributeslist,
      initialProducts: initialData.products,
      totalPages: initialData.pagination.totalPages,
    },
  };
}
