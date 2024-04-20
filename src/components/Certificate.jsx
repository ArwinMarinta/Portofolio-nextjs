"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Projects } from "@/data/Project";
import Image from "next/image";
import { responsive } from "@/data/Certificate";

const Certificate = () => {
  return (
    <main className="w-full flex justify-center bg-DARK">
      <div className="container py-10">
        <div>
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={4000}
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
            slidesToSlide={2}
            swipeable
          >
            {Projects.map((data) => (
              <div key={data.id}>
                <div>
                  <Image src={data.image} alt="" className="w-full" />
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
