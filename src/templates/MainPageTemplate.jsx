import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import TopHeader from "@/components/global/TopHeader";

const MainPageTemplate = ({ children }) => {
  return (
    <>
      <div className="flex w-full h-full flex-col overflow-x-hidden">
        <div className=" z-[1000] w-full">
          <TopHeader />
          <Header />
        </div>

        {/* Main Content */}
        <div className="md:mt-[5rem] mt-[3.5rem]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainPageTemplate;
