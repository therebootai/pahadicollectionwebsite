import { fetchSingleProductData } from "@/actions/FetchSingleProduct";
import PlaceOrderSection from "@/components/place-order/PlaceOrderSection";
import { AuthContext } from "@/context/AuthContext";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function PlaceOrder({ products }) {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/");
  }

  return (
    <MainPageTemplate
      metaData={{ title: "Place Order", description: "Place Order" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"Place Order"} />
        <PlaceOrderSection products={products} />
      </div>
    </MainPageTemplate>
  );
}

export async function getServerSideProps(req) {
  try {
    const { products } = req.query;
    const productArray = products ? products.split(",") : [];
    let allProducts = [];

    async function fetchAllProducts() {
      for (let i = 0; i < productArray.length; i++) {
        const product = await fetchSingleProductData(productArray[i]);
        allProducts.push(product);
      }
    }
    await Promise.all([fetchAllProducts()]);
    return {
      props: {
        products: allProducts,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
