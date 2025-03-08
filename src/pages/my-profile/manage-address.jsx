import AddAndEditAddress from "@/components/my-profile/mange-address/AddAndEditAddress";
import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";

export default function ManageAddress() {
  return (
    <MainPageTemplate
      metaData={{ title: "My Profile", description: "My Profile" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"Manage Address"} />
        <div className="flex gap-6">
          <ProfileSideBar />
          <div className="flex flex-1 gap-6 flex-col">
            <button
              type="button"
              className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-darkgreen text-base xlg:text-lg text-left"
            >
              Add New Address
            </button>
            <AddAndEditAddress />
          </div>
        </div>
      </div>
    </MainPageTemplate>
  );
}
