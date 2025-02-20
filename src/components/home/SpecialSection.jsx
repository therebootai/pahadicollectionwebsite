import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const SpecialSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(4);
        setAutoplay(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(5);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(6);
        setAutoplay(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(6);
        setAutoplay(false);
      } else {
        setSlidesToShow(6);
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
  const sections = [
    { name: "Special Discount", imgsrc: "/images/Special Discount.svg" },
    { name: "Unique Designs", imgsrc: "/images/Unique Designs.svg" },
    { name: "Fast Shipping", imgsrc: "/images/Fast Shipping.svg" },
    { name: "Reasonable Price", imgsrc: "/images/Reasonable Price.svg" },
    { name: "Reward Program", imgsrc: "/images/Reward Program.svg" },
    {
      name: "Pure Quality Product",
      imgsrc: "/images/Pure Quality Product.svg",
    },
  ];
  return (
    <div className="xl:p-16 lg:p-8 p-4 ">
      <Slider {...settings}>
        {sections.map((item, index) => (
          <div className="!flex justify-center items-center w-full" key={index}>
            <div className="md:w-[90%] w-[95%] flex flex-col justify-center items-center gap-2">
              <div className=" lg:size-[6rem] md:size-[5rem] size-[4rem] relative">
                <Image
                  src={item.imgsrc}
                  alt={item.name}
                  fill
                  className=" w-full h-full"
                />
              </div>
              <h1 className="xl:text-xl lg:text-lg md:text-base text-sm font-medium text-custom-darkgreen text-center">
                {item.name}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialSection;
