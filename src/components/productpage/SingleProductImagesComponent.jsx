import Image from "next/image";
import React, { useState, useRef } from "react";
import "tailwindcss/tailwind.css";
import ImageMagnify from "react-image-magnify";

const SinglePageImagesComponent = ({ images }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const mainImageRef = useRef(null);

  const thumbnailsToShow = Math.min(images.length, 4);
  const maxIndex = images.length - 1;
  const startTouchX = useRef(0);
  const isDragging = useRef(false);

  const updateThumbnailIndex = (index) => {
    if (images.length > 4) {
      if (index >= thumbIndex + thumbnailsToShow - 1 && index <= maxIndex) {
        setThumbIndex(thumbIndex + 1);
      }

      if (index <= thumbIndex && thumbIndex > 0) {
        setThumbIndex(thumbIndex - 1);
      }
    }
  };

  const handleNext = () => {
    if (mainImageIndex < maxIndex) {
      const newIndex = mainImageIndex + 1;
      setMainImageIndex(newIndex);
      updateThumbnailIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (mainImageIndex > 0) {
      const newIndex = mainImageIndex - 1;
      setMainImageIndex(newIndex);
      updateThumbnailIndex(newIndex);
    }
  };

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
    updateThumbnailIndex(index);
  };

  const handleTouchStart = (e) => {
    startTouchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endTouchX = e.changedTouches[0].clientX;
    if (startTouchX.current - endTouchX > 50) {
      handleNext();
    } else if (endTouchX - startTouchX.current > 50) {
      handlePrev();
    }
  };

  const handleMouseDown = (e) => {
    startTouchX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const endTouchX = e.clientX;
    if (startTouchX.current - endTouchX > 50) {
      handleNext();
    } else if (endTouchX - startTouchX.current > 50) {
      handlePrev();
    }
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!mainImageRef.current) return;

    const { left, top, width, height } =
      mainImageRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-4">
      <div className="thumbnail-slider flex items-center ">
        <div className="thumbnail-images flex flex-row md:flex-col items-center overflow-hidden gap-6">
          {images
            .slice(thumbIndex, thumbIndex + thumbnailsToShow)
            .map((image, index) => (
              <div className="size-[4rem] lg:size-[4rem] xl:size-[5rem]  relative ">
                <Image
                  key={thumbIndex + index}
                  src={image}
                  fill
                  alt={`Thumbnail ${thumbIndex + index}`}
                  onClick={() => handleThumbnailClick(thumbIndex + index)}
                  className={` object-cover cursor-pointer transition-transform transform hover:scale-105 ${
                    mainImageIndex === thumbIndex + index
                      ? "border border-custom-gold"
                      : "border border-custom-light-gray"
                  }`}
                />
              </div>
            ))}
        </div>
      </div>
      <div
        className="main-image mb-4 overflow-hidden w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          className="w-full  h-[20rem] lg:h-[23rem] xlg:h-[26rem]  min-[1400px]:h-[28rem] xl:h-[29rem] xxl:h-[32rem]  "
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          ref={mainImageRef}
        >
          <ImageMagnify
            {...{
              smallImage: {
                alt: "Main Image",
                isFluidWidth: true,
                src: images[mainImageIndex],
              },
              largeImage: {
                src: images[mainImageIndex],
                width: 1800, // Higher resolution
                height: 1800,
              },

              lensStyle: {
                backgroundColor: "rgba(0, 123, 255, 0.3)", // Light blue lens
              },
            }}
          />
        </div>
      </div>
      {isZoomed && (
        <div
          className="absolute left-[105%] top-0 w-full h-[20rem] lg:h-[23rem] xlg:h-[26rem]  min-[1400px]:h-[28rem] xl:h-[29rem] xxl:h-[32rem] border border-gray-300 shadow-lg bg-white z-50 overflow-hidden"
          style={{
            backgroundImage: `url(${images[mainImageIndex]})`,
            backgroundSize: "1800px 1800px", // High resolution
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        ></div>
      )}
    </div>
  );
};

export default SinglePageImagesComponent;
