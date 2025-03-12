import React, { useEffect, useState } from "react";
import ProductDesignCard from "../card/ProductDesignCard";
import Slider from "react-slick";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const OurSimilerProduct = ({ products }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [autoplay, setAutoplay] = useState(true);

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
        setSlidesToShow(5);
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

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[-1.5rem] right-12 transform -translate-y-1/2 z-10  size-8 bg-custom-green  flex justify-center items-center"
      >
        <FaChevronLeft className="text-white size-4" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[-1.5rem] right-4 transform -translate-y-1/2 z-10 size-8 bg-custom-green  flex justify-center items-center"
      >
        <FaChevronRight className="text-white size-4" />
      </button>
    );
  };
  const settings = {
    infinite: products.length > slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {products.map((item, index) => (
          <div
            className=" w-full !flex justify-center items-center outline-none py-4"
            key={index}
          >
            <Link
              href={`/products/${item.slug}`}
              className="h-fit w-[95%] relative"
            >
              <ProductDesignCard
                productId={item._id}
                productimg={item.thumbnail_image.secure_url}
                producthoverimg={item.hoverImage.secure_url}
                productname={item.title}
                productDiscount={item.discount}
                productprice={item.price}
                productMRP={item.mrp}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurSimilerProduct;
