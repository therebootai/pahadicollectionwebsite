import { checkTokenAuth } from "@/actions/authActions";
import MyCartListSection from "@/components/myinteractioncomponent/MyCartListSection";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyCart() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token") || null;

  const { user } = await getPageProps();

  if (!token || !user) {
    redirect("/login");
  }

  return (
    <MainPageTemplate metaData={{ title: "My Cart", description: "My Cart" }}>
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"My Cart"} />
        <div className="flex gap-6">
          <MyCartListSection user={user} />
        </div>
      </div>
    </MainPageTemplate>
  );
}

async function getPageProps() {
  try {
    const [user] = await Promise.all([
      checkTokenAuth(),
    ]);
    return { user };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
