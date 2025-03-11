import MyCartListSection from "@/components/myinteractioncomponent/MyCartListSection";
import { AuthContext } from "@/context/AuthContext";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Breadcumb from "@/ui/Breadcumb";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const MyCart = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/");
  }
  
  return (
    <MainPageTemplate metaData={{ title: "My Cart", description: "My Cart" }}>
      <div className="xl:px-16 lg:px-8 px-4 flex flex-col gap-6 my-6">
        <Breadcumb label={"My Cart"} />
        <div className="flex gap-6">
          <MyCartListSection />
        </div>
      </div>
    </MainPageTemplate>
  );
};

export default MyCart;
