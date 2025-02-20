import React, { useEffect, useState } from "react";
import HeadingComponent from "../global/HeadingComponent";
import Slider from "react-slick";
import CategoryCard from "../card/CategoryCard";

const TopCategories = ({ categories }) => {
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
        setSlidesToShow(4);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(4);
        setAutoplay(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(5);
        setAutoplay(false);
      } else if (window.innerWidth <= 2580) {
        setSlidesToShow(6);
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
    infinite: categories.length > slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-8 gap-5 ">
      <div className="justify-center items-center flex">
        <HeadingComponent heading1={"Top Categories"} />
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {categories.map((item, index) => (
            <div key={index} className="!flex justify-center items-center">
              <div className="w-[95%]">
                <CategoryCard
                  categoryname={item.mainCategory}
                  imgsrc={item.categoryImage.secure_url}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopCategories;
