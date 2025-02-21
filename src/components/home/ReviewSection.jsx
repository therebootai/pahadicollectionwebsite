import Image from "next/image";
import React from "react";
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
                  Lorem ipsum dolor sit amet consectetur. Duis tristique
                  accumsan diam mattis elit duis elementum ut. Sed at ultricies
                  nunc risus a pellentesque feugiat. Augue condimentum accumsan
                  in consequat erat ultrices mauris at dictumst. Eget egestas
                  porttitor in nibh nulla curabitur. Leo ut lacus risus nibh
                  sollicitudin purus nam proin purus. Quam velit integer
                  elementum fusce erat mauris amet tortor. Dolor ipsum amet et
                  eu. Elit justo quis condimentum convallis. Amet vitae sit
                  adipiscing ullamcorper gravida sed elementum. Amet eget nunc
                  curabitur quam nullam proin mauris. Aliquet neque vitae
                  tristique amet. Sit sit consequat libero quam penatibus. Orci
                  libero eu mauris quam tellus. Leo sed pulvinar egestas dictum
                  nisl fermentum dui risus ut. Et feugiat vitae leo amet eget
                  arcu feugiat elementum ut. Elementum eget lorem aenean augue
                  montes risus vehicula leo auctor. Justo egestas tincidunt
                  morbi ac suspendisse. Felis velit ornare diam ac. Rutrum proin
                  hac eu pulvinar neque nullam. Tempor etiam vitae amet viverra
                  risus blandit cras ultrices magna.
                </p>
              </div>
              <div className=" flex flex-col">
                <h1 className=" text-xl font-medium">Supriya Tamang</h1>
                <div className=" flex items-center gap-1">
                  <FaStar className="text-custom-gold" />
                  <FaStar className="text-custom-gold" />
                  <FaStar className="text-custom-gold" />
                  <FaStar className="text-custom-gold" />
                  <FaStar className="text-custom-gold" />
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
