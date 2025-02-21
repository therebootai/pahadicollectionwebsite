import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const DisscussSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1224) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(4);
        setAutoplay(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
        setAutoplay(false);
      } else {
        setSlidesToShow(4);
        setAutoplay(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const discuss = [
    {
      discusson: "Discussion On",
      name: "WhatsApp",
      href: "#",
      icons: "/images/discusswhatsapp.svg",
    },
    {
      discusson: "Book An",
      name: "Appointment",
      href: "#",
      icons: "/images/discussappointment.svg",
    },
    {
      discusson: "Discussion On",
      name: "Phone Call",
      href: "#",
      icons: "/images/discussphone.svg",
    },
    {
      discusson: "Discussion On",
      name: "Video Meet",
      href: "#",
      icons: "/images/discussmeet.svg",
    },
  ];
  return (
    <div className="xl:p-16 lg:p-8 p-4">
      <Slider {...settings}>
        {discuss.map((item, index) => (
          <div key={index} className="!flex justify-center items-center ">
            <div className="relative w-[95%] h-full rounded-sm shadow-lg">
              <div
                className="absolute w-full h-full bg-cover bg-center rounded-sm opacity-50 "
                style={{ backgroundImage: "url('/images/discussbg.png')" }}
              >
                <div className="absolute w-full h-full bg-[#ffce91c9] rounded-sm "></div>
              </div>
              <div className=" flex flex-col w-full   relative xl:p-4 xlg:p-3 p-2">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2 w-[70%] text-custom-darkgreen">
                    <h3 className=" text-base/[18px] font-medium">
                      {item.discusson}
                    </h3>
                    <h1 className=" text-xl font-medium">{item.name}</h1>
                    <Link
                      href={item.href}
                      className="h-[2rem] flex flex-col justify-center items-center px-4 w-fit bg-gradient-to-r from-custom-darkgold to-custom-gold rounded-sm text-white text-base"
                    >
                      Explore &#x2192;
                    </Link>
                  </div>
                  <div className="w-[30%] ">
                    <div className=" ">
                      <Image
                        src={item.icons}
                        alt=""
                        width={100}
                        height={100}
                        className="h-[4rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DisscussSection;
