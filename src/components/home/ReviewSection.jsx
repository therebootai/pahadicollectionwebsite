import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const ReviewSection = () => {
  return (
    <div className=" xl:p-16 lg:p-8 p-4 ">
      <div className="flex justify-center items-center rounded-sm  ">
        <div className="relative w-full h-full rounded-sm shadow-lg ">
          <div
            className="absolute w-full h-full bg-cover bg-center rounded-sm opacity-60 "
            style={{ backgroundImage: "url('/images/reviewbg.png')" }}
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-[#f5ddc0]/90 via-[#f5ddc0]/70 to-[#FFCD91]/0 rounded-sm "></div>
          </div>
          <div className=" flex flex-col lg:w-[80%] xlg:w-[60%] gap-4  relative xl:p-8 xlg:p-6 lg:p-4 p-2">
            <div className=" flex flex-col gap-2 text-custom-black text-xs lg:text-sm">
              <div className=" flex gap-1 relative">
                <Image
                  src={"/images/aps.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="size-8 float-left"
                />
                <p className=" leading-relaxed">
                  I recently purchased a beautiful set of handmade jewelry from
                  Pahadi Collection, and I am absolutely thrilled with my
                  experience! From the moment I visited their store, I was
                  impressed by the variety of designs, ranging from traditional
                  to contemporary styles. The craftsmanship is exquisite, and
                  each piece feels unique and high-quality. I ordered a custom
                  necklace for a special occasion, and the team was incredibly
                  helpful throughout the process, ensuring the piece was
                  perfect. The attention to detail in the jewelry is truly
                  remarkable, and I received so many compliments on it. Not only
                  is the jewelry stunning, but the customer service was
                  top-notch. The staff was friendly, knowledgeable, and helped
                  me choose pieces that suited my style and needs. The delivery
                  was fast, and everything was packaged beautifully. I highly
                  recommend Pahadi Collection to anyone looking for exceptional
                  handmade jewelry. I&apos;ll definitely be back for more!
                </p>
              </div>
              <div className=" flex flex-col">
                <h1 className=" text-xl font-medium">Supriya Tamang</h1>
                <div className=" flex items-center gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => index + 1)
                    .map((index) => (
                      <FaStar className="text-custom-gold" key={index} />
                    ))}
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-6 items-center text-center">
              <div className=" h-[5rem] lg:h-[6rem] flex flex-col justify-center items-center px-8 bg-gradient-to-r from-custom-darkgold to-custom-gold rounded-sm text-white text-base lg:text-xl">
                <h1>200+</h1>
                <h1>Satisfied Customer</h1>
              </div>
              <div className=" h-[5rem] lg:h-[6rem] flex flex-col justify-center items-center px-8 bg-gradient-to-r from-custom-darkgold to-custom-gold rounded-sm text-white text-base lg:text-xl">
                <h1>200+</h1>
                <h1>Satisfied Customer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
