import SubPageBanner from "@/components/global/SubPageBanner";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Link from "next/link";
import { FaMobile } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function ContactUsPage() {
  return (
    <MainPageTemplate
      metaData={{
        title: "Contact Us",
        description: "Contact Us",
      }}
    >
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <h1 className="xlg:text-3xl md:text-2xl text-xl text-custom-darkgreen text-center font-semibold">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col lg:basis-1/2 basis-full gap-6">
            <div className="flex flex-col lg:flex-row">
              <div className="flex  flex-col gap-4 basis-full lg:basis-1/2">
                <h1 className="font-bold text-custom-darkgold xl:text-2xl text-lg">
                  Contact Information
                </h1>
                <div className="flex flex-col gap-2 text-sm xl:text-base">
                  <Link
                    href="mailto:pahadicollections124@gmail.com"
                    className="flex gap-2 text-custom-darkgold lg:text-xl text-lg"
                  >
                    <MdEmail size={24} className="shrink-0 " />{" "}
                    <span className="">pahadicollections124@gmail.com</span>
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/dw8yYhTqLHtbFg598"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex gap-2 text-custom-darkgold lg:text-xl text-lg"
                  >
                    <IoLocationSharp size={24} className="shrink-0" />{" "}
                    <span className="text-site-gray">
                      New Chamta, Taranjubari, Khaprail, Matigara, Siliguri
                      734009 WB
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/2 basis-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28497.91022990699!2d88.32215034808338!3d26.768657560896006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20New%20Chamta%2C%20Taranjubari%2C%20Khaprail%2C%20Matigara%2C%20Siliguri%20734009%20WB!5e0!3m2!1sen!2sin!4v1746543351995!5m2!1sen!2sin"
              className="rounded-md w-full h-[30rem]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </MainPageTemplate>
  );
}
