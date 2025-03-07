import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function HomeMainSlider({ sliders }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 2000,

    pauseOnHover: false,
  };

  if (!sliders || sliders.length === 0) {
    return (
      <div className="loading-container">
        <p>...</p>
      </div>
    );
  }
  return (
    <div className="">
      <Slider {...settings}>
        {sliders.map((slide, index) => (
          <div className="carousel-item relative rounded-lg" key={index}>
            <div className="w-full relative ">
              <Image
                src={slide.component_image.secure_url}
                alt="banner"
                width={1440}
                priority
                height={580}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
