import React, { useEffect, useState } from "react";
import ProductDesignCard from "../card/ProductDesignCard";
import Slider from "react-slick";

const OurSimilerProduct = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [autoplay, setAutoplay] = useState(true);

  const products = [
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
    {
      productimg: "/images/productring.png",
      producthoverimg: "/images/producthoverimg.png",
      productname: "14KT Yellow Gold Gorgeous",
      productprice: "12599",
      productMRP: "16599",
      productDiscount: "20",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(4);
        setAutoplay(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
        setAutoplay(false);
      } else if (window.innerWidth <= 2580) {
        setSlidesToShow(5);
        setAutoplay(false);
      } else {
        setSlidesToShow(5);
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
    infinite: products.length > slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {products.map((item, index) => (
          <div
            className=" w-full !flex justify-center items-center outline-none py-4"
            key={index}
          >
            <div className="h-fit w-[95%] relative">
              <ProductDesignCard
                productimg={item.productimg}
                producthoverimg={item.producthoverimg}
                productname={item.productname}
                productDiscount={item.productDiscount}
                productprice={item.productprice}
                productMRP={item.productMRP}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurSimilerProduct;
