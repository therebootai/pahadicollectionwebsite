import { checkTokenAuth } from "@/actions/authActions";
import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import MyWishListSection from "@/components/myinteractioncomponent/MyWishListSection";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyWishlist() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token") || null;

  const { user } = await getPageProps();

  if (!token || !user) {
    redirect("/login");
  }

  return (
    <MainPageTemplate
      metaData={{ title: "My Wishlist", description: "My Wishlist" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"My Wishlist"} />
        <div className="flex gap-6">
          <ProfileSideBar />
          <div className="flex flex-1 gap-6 flex-col">
            <MyWishListSection user={user} />
          </div>
        </div>
      </div>
    </MainPageTemplate>
  );
}

async function getPageProps() {
  try {
    const [user] = await Promise.all([checkTokenAuth()]);
    return { user };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
