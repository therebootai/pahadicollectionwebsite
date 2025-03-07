import PersonalDetails from "@/components/my-profile/PersonalDetails";
import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";

export default function MyProfile() {
  return (
    <MainPageTemplate
      metaData={{ title: "My Profile", description: "My Profile" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"My Profile"} />
        <div className="flex gap-6">
          <ProfileSideBar />
          <PersonalDetails />
        </div>
      </div>
    </MainPageTemplate>
  );
}
