import OrderListsSection from "@/components/my-orders/OrderListsSection";
import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyOrders() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token") || null;

  if (!token) {
    redirect("/login");
  }
  return (
    <MainPageTemplate
      metaData={{ title: "My Orders", description: "My Orders" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"My Orders"} />
        <div className="flex gap-6 items-start">
          <ProfileSideBar />
          <OrderListsSection />
        </div>
      </div>
    </MainPageTemplate>
  );
}
