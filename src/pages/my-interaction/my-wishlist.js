import ProfileSideBar from "@/components/my-profile/ProfileSideBar";
import MyWishListSection from "@/components/myinteractioncomponent/MyWishListSection";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import React, { useContext } from "react";

const MyWishlist = () => {
  return (
    <MainPageTemplate
      metaData={{ title: "My Wishlist", description: "My Wishlist" }}
    >
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"My Wishlist"} />
        <div className="flex gap-6">
          <ProfileSideBar />
          <div className="flex flex-1 gap-6 flex-col">
            <MyWishListSection />
          </div>
        </div>
      </div>
    </MainPageTemplate>
  );
};

export default MyWishlist;
