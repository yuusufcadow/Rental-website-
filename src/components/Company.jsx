import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import hero1 from "../assets/heroimage.jpg";
import villa from "../assets/villas.jpg";
import penthouse from "../assets/penthouse.jpg";
import townhouse from "../assets/townhouse.jpg";

function Company() {
  const slides = [hero1, villa, penthouse, townhouse];

  return (
    <section
      id="about"
      className="bg-[#f7f7f5] py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="max-w-[520px]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              Who We Are
            </h2>

            <p className="mt-5 text-sm sm:text-[15px] leading-7 sm:leading-8 text-black/55">
              At Mogadishu Rental Houses, we believe a home is more than walls
              and rooms — it is a place of comfort, family, and everyday life.
              We help renters discover homes that match their lifestyle, budget,
              and location.
            </p>

            <p className="mt-5 text-sm sm:text-[15px] leading-7 sm:leading-8 text-black/55">
              Our mission is to make renting easier through trusted listings,
              modern browsing, and a smooth experience at every step of the
              journey.
            </p>
          </div>

          {/* Right Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".company-next",
                prevEl: ".company-prev",
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              className="company-swiper"
            >
              {slides.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="overflow-hidden" style={{ borderRadius: 2 }}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[470px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Prev */}
            <button
              className="company-prev absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 bg-white shadow-md flex items-center justify-center text-black/60 hover:text-black transition"
              style={{ borderRadius: 9999 }}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Next */}
            <button
              className="company-next absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 bg-white shadow-md flex items-center justify-center text-black/60 hover:text-black transition"
              style={{ borderRadius: 9999 }}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;