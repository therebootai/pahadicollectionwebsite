import { searchProducts } from "@/actions/FetchProducts";
import SubPageBanner from "@/components/global/SubPageBanner";
import ProductFetchObserver from "@/components/productpage/ProductFetchObserver";
import ProductsList from "@/components/productpage/ProductsList";
import SearchFilter from "@/components/productpage/search/SearchFilter";
import MainPageTemplate from "@/templates/MainPageTemplate";
import MiniLoader from "@/ui/MiniLoader";

export const metaData = {
  title: "Products",
  description: "Products",
};

export default async function SearchProduct({ searchParams }) {
  const search = (await searchParams).search || "";
  const order = (await searchParams).order || "";
  const sortBy = (await searchParams).sortBy || "";
  const page = (await searchParams).page || 1;

  const { initialProducts, totalPages, currentPage } = await getPageProps({
    search,
    order,
    sortBy,
    page,
  });

  return (
    <MainPageTemplate>
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <div className="border-t border-[#cccccc]">
          <div className="flex pt-6">
            <div className="lg:w-[20%]">
              <SearchFilter />
            </div>
            <div className="lg:w-[80%] w-full overflow-scroll no-scrollbar  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-2 lg:py-2 lg:p-4">
              <ProductsList
                products={initialProducts}
                attribute={order}
                category={sortBy}
              />
              <ProductFetchObserver
                currentPage={currentPage}
                totalPages={totalPages}
                path={"/products/search"}
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
  const search = query.search || "";
  const order = query.order || "";
  const sortBy = query.sortBy || "";
  const page = query.page ? parseInt(query.page) : 1;
  const [initialData] = await Promise.all([
    searchProducts({ search, page, sortBy, order }),
  ]);

  return {
    initialProducts: initialData.products,
    totalPages: initialData.pagination.totalPages,
    currentPage: initialData.pagination.currentPage,
  };
}
