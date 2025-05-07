import { fetchAtributeData } from "@/actions/fetchAtribute";
import { fetchCategoryData } from "@/actions/FetchCategory";
import { fetchProductsData } from "@/actions/FetchProducts";
import SubPageBanner from "@/components/global/SubPageBanner";
import CategorySlider from "@/components/productpage/CategorySlider";
import FilterSection from "@/components/productpage/FilterSection";
import ProductFetchObserver from "@/components/productpage/ProductFetchObserver";
import ProductsList from "@/components/productpage/ProductsList";
import MainPageTemplate from "@/templates/MainPageTemplate";
import MiniLoader from "@/ui/MiniLoader";

export const metaData = {
  title: "Products",
  description: "Products",
};

export default async function Products({ searchParams }) {
  const category = (await searchParams).category || "";
  const attribute = (await searchParams).attribute || "";
  const page = (await searchParams).page || 1;
  const {
    categories,
    attributeslist,
    initialProducts,
    totalPages,
    currentPage,
  } = await getPageProps({ page, category, attribute });

  return (
    <MainPageTemplate>
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <CategorySlider categories={categories} />
        <div className="border-t border-[#cccccc]">
          <div className="flex pt-6">
            <div className="lg:w-[20%]">
              <FilterSection
                categories={categories}
                attributes={attributeslist}
              />
            </div>

            <div
              className="lg:w-[80%] w-full overflow-scroll no-scrollbar  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-2 lg:py-2 lg:p-4"
              // style={{ height: `${rightSideHeight}px` }}
            >
              <ProductsList
                products={initialProducts}
                category={category}
                attribute={attribute}
              />
              <ProductFetchObserver
                currentPage={currentPage}
                totalPages={totalPages}
                path={"/products"}
              />
              {!initialProducts && <MiniLoader />}
            </div>
          </div>
        </div>
      </div>
    </MainPageTemplate>
  );
}

async function getPageProps(query) {
  const category = query.category || "";
  const attributes = query.attribute ? query.attribute.split(",") : [];
  const page = query.page ? parseInt(query.page) : 1;
  const [categories, attributeslist, initialData] = await Promise.all([
    fetchCategoryData(),
    fetchAtributeData(),
    fetchProductsData(page, 12, category, attributes),
  ]);

  return {
    categories,
    attributeslist,
    initialProducts: initialData.products,
    totalPages: initialData.pagination.totalPages,
    currentPage: initialData.pagination.currentPage,
  };
}
