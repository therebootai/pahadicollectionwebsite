import { fetchSingleProductData } from "@/actions/FetchSingleProduct";
import PlaceOrderSection from "@/components/place-order/PlaceOrderSection";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PlaceOrder({ searchParams }) {
  const cookieStore = await cookies();
  const products = (await searchParams).products || "";

  const token = cookieStore.get("token") || null;

  if (!token) {
    redirect("/login");
  }

  const { oderedProducts } = await getPageProps(products);

  return (
    <MainPageTemplate
      metaData={{ title: "Place Order", description: "Place Order" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"Place Order"} />
        <PlaceOrderSection products={oderedProducts} />
      </div>
    </MainPageTemplate>
  );
}

async function getPageProps(products) {
  try {
    const productArray = products ? products.split(",") : [];
    let oderedProducts = [];

    async function fetchAllProducts() {
      for (let i = 0; i < productArray.length; i++) {
        const product = await fetchSingleProductData(productArray[i]);
        oderedProducts.push(product);
      }
    }
    await Promise.all([fetchAllProducts()]);
    return {
      oderedProducts,
    };
  } catch (error) {
    console.log(error);
    return {};
  }
}
