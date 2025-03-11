import AddressEditSction from "@/components/my-profile/mange-address/AddressEditSction";
import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import { AuthContext } from "@/context/AuthContext";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function ManageAddress() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/");
  }
  return (
    <MainPageTemplate
      metaData={{ title: "My Address", description: "My Address" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"Manage Address"} />
        <div className="flex gap-6">
          <ProfileSideBar />
          <AddressEditSction />
        </div>
      </div>
    </MainPageTemplate>
  );
}
