import OrderListsSection from "@/components/my-orders/OrderListsSection";
import { AuthContext } from "@/context/AuthContext";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function MyOrders() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/");
  }

  return (
    <MainPageTemplate
      metaData={{ title: "My Orders", description: "My Orders" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"My Orders"} />
        <div className="flex gap-6">
          <OrderListsSection />
        </div>
      </div>
    </MainPageTemplate>
  );
}
