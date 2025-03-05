"use client";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import TopHeader from "@/components/global/TopHeader";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const MainPageTemplate = ({ children, metaData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const { title = "Home", description = "Home" } = metaData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {isLoading && ""}
      {!isLoading && (
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
      )}
    </>
  );
};

export default MainPageTemplate;
