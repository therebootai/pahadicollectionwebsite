import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import TopHeader from "@/components/global/TopHeader";
import Head from "next/head";

const MainPageTemplate = ({ children, metaData }) => {
  const { title = "Home", description = "Home" } = metaData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="flex w-full h-full flex-col overflow-x-hidden">
        <div className=" z-[1000] w-full">
          <TopHeader />
          <Header />
        </div>

        {/* Main Content */}
        <div className=" lg:mt-[5rem] md:mt-[5rem] mt-[3.5rem]">
          {" "}
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPageTemplate;
