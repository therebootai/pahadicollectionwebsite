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
        { text: "Shipping Policy", link: "/shipping-policy" },
        { text: "Check Order", link: "" },
        { text: "Cancellation & Refund Policy", link: "/refund-policy" },
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
              Pahadi Collection offers a wide range of handcrafted jewellery,
              blending tradition and modernity. Located in Siliguri, we provide
              exceptional designs for every occasion, from weddings to casual
              wear. Explore our collection and experience quality craftsmanship.
              Your trusted destination for timeless jewellery pieces.
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
          <div className="">
            <Link href="/terms-and-condition">Terms & Condition</Link> |{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="">
            <h1 className="inline-flex items-center gap-2">
              Design & Developed By:{" "}
              <span className="font-semibold">
                {" "}
                <Link href={"https://rebootai.in/"} target="_blank">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 140 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-36 object-cover text-white"
                  >
                    <path
                      d="M18.1116 7.75994V11.7999H14.2716V7.75994C14.2716 5.69994 12.6016 4.02994 10.5416 4.02994H0.141602V0.189941H10.5416C14.7116 0.189941 18.1116 3.58994 18.1116 7.75994ZM6.6316 11.7799H12.4116V7.93994H2.5716C1.2416 7.93994 0.141602 9.02994 0.141602 10.3699V20.9799H3.9816V14.4699L12.5716 20.9799L18.1316 20.9999L6.6316 11.7799ZM3.9916 11.7899L4.0116 11.7799H3.9916V11.7899ZM27.1016 20.9099V20.9799H28.2116C27.8316 20.9799 27.4716 20.9499 27.1016 20.9099ZM46.5916 4.42994H42.1616V0.189941H38.3216V15.5399H42.1616V8.26994H46.5916C49.0316 8.26994 51.0216 10.2599 51.0216 12.6999C51.0216 15.1399 49.0316 17.1299 46.5916 17.1299H28.2116C25.7616 17.1299 23.7816 15.1399 23.7816 12.6999C23.7816 10.2599 25.7716 8.26994 28.2116 8.26994C28.2616 8.26994 28.3216 8.26994 28.3716 8.26994C28.3916 8.26994 28.4216 8.26994 28.4416 8.26994C28.4916 8.26994 28.5316 8.26994 28.5816 8.26994C28.6916 8.26994 28.8116 8.28994 28.9216 8.30994C30.5916 8.58994 31.9916 9.82994 32.4616 11.4699H27.0016V15.3099H36.0616C36.0616 15.3099 36.0716 15.2699 36.0816 15.2499L36.1716 14.9399C36.3116 14.4499 36.4016 13.9599 36.4516 13.4799C36.4516 13.4099 36.4616 13.3399 36.4716 13.2699C36.4716 13.1599 36.4816 13.0599 36.4916 12.9499C36.4916 12.9199 36.4916 12.8899 36.4916 12.8599C36.4916 12.7999 36.4916 12.7499 36.4916 12.6899C36.4916 8.12994 32.7816 4.40994 28.2216 4.40994C23.6616 4.40994 19.9416 8.11994 19.9416 12.6899C19.9416 16.8799 23.0716 20.3499 27.1116 20.8899C27.4716 20.9399 27.8416 20.9599 28.2216 20.9599H46.6016C51.1616 20.9599 54.8716 17.2499 54.8716 12.6799C54.8716 8.10994 51.1616 4.40994 46.6016 4.40994L46.5916 4.42994ZM73.2416 12.6999C73.2416 17.2599 69.5316 20.9799 64.9616 20.9799C60.3916 20.9799 56.6816 17.2699 56.6816 12.6999C56.6816 8.12994 60.3916 4.41994 64.9616 4.41994C69.5316 4.41994 73.2416 8.12994 73.2416 12.6999ZM69.4016 12.6999C69.4016 10.2599 67.4116 8.26994 64.9716 8.26994C62.5316 8.26994 60.5416 10.2599 60.5416 12.6999C60.5416 15.1399 62.5316 17.1299 64.9716 17.1299C67.4116 17.1299 69.4016 15.1399 69.4016 12.6999ZM91.6216 12.6999C91.6216 17.2599 87.9116 20.9799 83.3416 20.9799C78.7716 20.9799 75.0616 17.2699 75.0616 12.6999C75.0616 8.12994 78.7716 4.41994 83.3416 4.41994C87.9116 4.41994 91.6216 8.12994 91.6216 12.6999ZM87.7816 12.6999C87.7816 10.2599 85.7916 8.26994 83.3516 8.26994C80.9116 8.26994 78.9216 10.2599 78.9216 12.6999C78.9216 15.1399 80.9116 17.1299 83.3516 17.1299C85.7916 17.1299 87.7816 15.1399 87.7816 12.6999ZM101.522 4.41994V8.25994H97.2816V20.9699H93.4416V0.189941H97.2816V4.42994H101.522V4.41994Z"
                      fill="currentColor"
                    />
                    <path
                      d="M133.632 3.52995V3.53995C135.382 3.44995 136.872 4.79995 136.962 6.54995H136.972C136.882 4.79995 138.232 3.30995 139.982 3.21995C138.232 3.29995 136.742 1.94995 136.652 0.199951H136.642C136.732 1.94995 135.382 3.43995 133.632 3.52995Z"
                      fill="currentColor"
                    />
                    <path
                      d="M131.952 2.82997C132.362 2.82997 132.692 3.15997 132.692 3.56997C132.692 3.15997 133.022 2.82997 133.432 2.82997C133.022 2.82997 132.692 2.49997 132.692 2.08997C132.692 2.49997 132.362 2.82997 131.952 2.82997Z"
                      fill="currentColor"
                    />
                    <path
                      d="M131.322 20.9999H127.162L120.102 5.36994L113.042 20.9999H108.822L118.222 0.189941H121.982L131.322 20.9999Z"
                      fill="currentColor"
                    />
                    <path
                      d="M132.962 3.81995V20.9999H136.802C136.802 20.9999 136.802 10.7299 136.802 9.11995C136.802 7.50995 136.702 3.82995 132.962 3.82995V3.81995Z"
                      fill="currentColor"
                    />
                    <path
                      d="M134.192 2.64994C134.871 2.64994 135.422 2.09925 135.422 1.41994C135.422 0.740631 134.871 0.189941 134.192 0.189941C133.512 0.189941 132.962 0.740631 132.962 1.41994C132.962 2.09925 133.512 2.64994 134.192 2.64994Z"
                      fill="currentColor"
                    />
                  </svg>
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
