import PersonalDetails from "@/components/my-profile/PersonalDetails";
import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";

export default function MyProfile({ token }) {
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
