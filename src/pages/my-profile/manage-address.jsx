import AddressEditSction from "@/components/my-profile/mange-address/AddressEditSction";
import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";

export default function ManageAddress() {
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
