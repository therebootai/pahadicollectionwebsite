import OrderListsSection from "@/components/my-orders/OrderListsSection";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";

export default function MyOrders({ token }) {
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

export async function getServerSideProps(context) {
  try {
    const cookies = context.req.headers.cookie || ""; // Get the cookie string
    const parsedCookies = Object.fromEntries(
      cookies.split("; ").map((c) => c.split("="))
    );

    const token = parsedCookies.token || null;
    if (!token) {
      return {
        redirect: {
          destination: "/", // Redirect to home
          permanent: false, // False means it's a temporary redirect
        },
      };
    }
    return { props: { token } }; // Passing token to the page for debugging
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}
