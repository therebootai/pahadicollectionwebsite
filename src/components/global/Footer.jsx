import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const accepted = [
    "/images/visa.png",
    "/images/rupay.png",
    "/images/mastercard.png",
    "/images/upi.png",
  ];
  const pagelinks = [
    {
      heading: "Resources Link",
      links: [
        { text: "Delivery Collections", link: "" },
        { text: "Shopping Info", link: "" },
        { text: "Check Order", link: "" },
        { text: "Cancellation", link: "" },
        { text: "Order History", link: "" },
      ],
    },
    {
      heading: "Information",
      links: [
        { text: "Accounts", link: "" },
        { text: "Order History", link: "" },
        { text: "Wishlist", link: "" },
        { text: "Cart", link: "" },
        { text: "Payments", link: "" },
      ],
    },
    {
      heading: "Our Products",
      links: [
        { text: "Nose Pins", link: "" },
        { text: "Pendant", link: "" },
        { text: "Gold Coin", link: "" },
        { text: "Earrings", link: "" },
        { text: "Finger Rings", link: "" },
      ],
    },
    {
      heading: "Contact Info",
      links: [
        { text: "Email With Us", link: "" },
        { text: "Call With Us", link: "" },
        { text: "Complain With Us", link: "" },
        { text: "Live Support", link: "" },
      ],
    },
  ];
  return (
    <div className="w-full relative ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/footerbg.png')`,
        }}
      ></div>
      <div className="w-full xl:p-16 lg:p-8 p-4  relative flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row xl:gap-12 lg:gap-8 xlg:gap-8 gap-6">
          <div className="lg:w-[30%] w-full flex flex-col gap-4">
            <Link href={"/"}>
              <Image
                src={"/images/pahadilogowhite.png"}
                alt="logo"
                width={1224}
                height={133}
                priority
                className="md:h-[2rem] lg:h-[2rem] xl:h-[2.5rem] h-[2rem] w-fit"
              />
            </Link>
            <p className="text-white text-sm lg:text-xs xlg:text-sm">
              Lorem ipsum dolor sit amet consectetur. Duis tristique accumsan
              diam mattis elit duis elementum ut. Sed at ultricies nunc risus a
              pellentesque feugiat. Augue condimentum accumsan in consequat erat
              ultrices mauris at dictumst. Eget egestas porttitor in nibh nulla
              curabitur. Leo ut lacus risus nibh sollicitudin purus nam
            </p>
            <div className=" flex items-center gap-5 text-white text-xl ">
              <Link href={"#"}>
                <FaFacebook />
              </Link>
              <Link href={"#"}>
                <FaInstagram />
              </Link>
              <Link href={"#"}>
                <FaXTwitter />
              </Link>
              <Link href={"#"}>
                <FaYoutube />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className=" xlg:text-2xl text-xl font-medium text-white">
                We Accepted
              </h1>
              <div className=" flex flex-row gap-2 xlg:gap-4">
                {accepted.map((item, index) => (
                  <div
                    key={index}
                    className=" h-[3.5rem] lg:h-[2.5rem] xlg:h-[3rem] w-[8rem] xlg:w-[10rem] px-2 xlg:px-4 flex justify-center items-center bg-white rounded-sm"
                  >
                    <div className="">
                      <Image
                        src={item}
                        alt=""
                        width={200}
                        height={200}
                        className=" h-[2rem] md:h-[2.5rem] w-fit object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[70%] w-full grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
            {pagelinks.map((item, index) => (
              <div
                className=" flex flex-col gap-4 lg:gap-6 text-white"
                key={index}
              >
                <h1 className=" xlg:text-xl lg:text-lg md:text-2xl text-xl font-medium ">
                  {item.heading}
                </h1>
                <div className="flex flex-col gap-3">
                  {item.links.map((item, index) => (
                    <Link
                      key={index}
                      className="xlg:text-lg lg:text-sm md:text-lg text-base "
                      href={item.link}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[0.6rem] md:h-[1.2rem] relative">
          <Image
            src={"/images/footerborder.png"}
            alt=""
            fill
            className=" w-full object-cover lg:object-fill"
          />
        </div>
        <div className=" pt-6 flex lg:flex-row flex-col justify-between items-center text-white">
          <div className="  text-center">
            <h1>
              © Copyright{" "}
              <Link href={"/"} className="  font-medium">
                {" "}
                Pahadi Collections.
              </Link>{" "}
              {/* <br /> */}- 2025 All Rights Reserved
            </h1>
          </div>
          <div className="">Terms & Condition | Privacy Policy</div>
          <div className="">
            <h1>
              Design & Developed By:{" "}
              <span className="font-semibold">
                {" "}
                <Link href={"https://rebootai.in/"} target="_blank">
                  Reboot AI Pvt. Ltd.{" "}
                </Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
