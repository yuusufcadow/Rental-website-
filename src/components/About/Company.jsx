import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import hero1 from "../../assets/heroimage.jpg";
import villa from "../../assets/villas.jpg";
import penthouse from "../../assets/penthouse.jpg";
import townhouse from "../../assets/townhouse.jpg";

function Company() {
  const slides = [hero1, villa, penthouse, townhouse];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f3f4f6] py-16 sm:py-20 lg:py-24"
    >
  

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[560px]"
          >
            <div className="mb-4 inline-flex items-center rounded  bg-white/70 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-black/60 uppercase backdrop-blur-md">
              About Us
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Who We Are
            </h2>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#1447e6] to-[#1447e6]" />

            <p className="mt-6 text-[15px] leading-8 text-zinc-600 sm:text-[16px]">
              At <span className="font-semibold text-zinc-900">Mogadishu Rental Houses</span>,
              we believe a home is more than walls and rooms — it is a place of
              comfort, family, and everyday life. We help renters discover homes
              that match their lifestyle, budget, and location.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-zinc-600 sm:text-[16px]">
              Our mission is to make renting easier through trusted listings,
              modern browsing, and a smooth experience at every step of the
              journey.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="rounded border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md">
                <p className="text-sm font-semibold text-zinc-900">Trusted Listings</p>
              </div>
              <div className="rounded border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md">
                <p className="text-sm font-semibold text-zinc-900">Easy Search</p>
              </div>
              <div className="rounded border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md">
                <p className="text-sm font-semibold text-zinc-900">Modern Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded border border-white/40 bg-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                navigation={{
                  nextEl: ".company-next",
                  prevEl: ".company-prev",
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                className="company-swiper"
              >
                {slides.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="group relative overflow-hidden rounded">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="h-[320px] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105 sm:h-[380px] md:h-[430px] lg:h-[520px]"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

                      {/* Floating caption */}
                      <div className="absolute bottom-5 left-5 rounded border border-white/20 bg-white px-4 py-3 text-black shadow-lg backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                          Premium Rental Living
                        </p>
                        <h3 className="mt-1 text-lg text-black font-semibold">
                          Find comfort in every corner
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Prev */}
              <button
                className="company-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30"
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                className="company-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30"
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Company;