"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DataCertificate } from "@/data/Certificate";
import Image from "next/image";
import { responsive } from "@/data/Certificate";

const Certificate = () => {
  return (
    <main className="w-full flex justify-center bg-DARK">
      <div className="container py-10 flex flex-col ">
        <div className="text-RED01 font-bold text-5xl flex justify-center ">
          Certificate
        </div>
        <div className="mt-10 ">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            containerClass="container-with-dots"
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            swipeable
          >
            {DataCertificate.map((data) => (
              <div key={data.id} className="">
                <div className="ml-4">
                  <Image
                    src={data.image}
                    alt="certificate"
                    className="w-full cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default Certificate;
