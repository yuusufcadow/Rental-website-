import React from "react";
import hero1 from "../assets/heroimage.jpg";
import hero2 from "../assets/villas.jpg";
import hero3 from "../assets/penthouse.jpg";

import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function PropertyCard({ price, title, address }) {
  return (
    <div className="bg-white p-5 sm:p-6 w-[90%] sm:w-[320px] shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-green-600 text-white text-xs px-2 py-1 font-semibold">
          FOR RENT
        </span>

        <span className="text-blue-600 font-semibold text-sm sm:text-base">
          {price} /month
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-bold mb-1">{title}</h2>

      <p className="text-gray-500 text-xs sm:text-sm mb-4">{address}</p>

      <div className="grid grid-cols-2 gap-3 text-gray-600 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <MdSquareFoot />
          2,283 Sq Ft
        </div>

        <div className="flex items-center gap-2">
          <FaCar />
          Parking
        </div>

        <div className="flex items-center gap-2">
          <FaBath />
          03 bathroom
        </div>

        <div className="flex items-center gap-2">
          <FaBed />
          04 bedroom
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const slides = [
    {
      img: hero1,
      price: "$289",
      title: "Single Family Rental House",
      address: "Hodan District, Mogadishu",
    },
    {
      img: hero2,
      price: "$420",
      title: "Luxury Villa for Rent",
      address: "Abdiaziz District, Mogadishu",
    },
    {
      img: hero3,
      price: "$190",
      title: "Modern Apartment Rental",
      address: "Wadajir District, Mogadishu",
    },
  ];

  return (
    <section className="w-full ">

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-[500px] sm:h-[600px] lg:h-[650px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

              {/* Background */}
              <img
                src={slide.img}
                alt="rental house"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              {/* Property Card */}
              <div className="absolute left-[5%] sm:left-[10%] top-[30%]">
                <PropertyCard
                  price={slide.price}
                  title={slide.title}
                  address={slide.address}
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SEARCH FILTER BAR */}
      <div className="w-full bg-[#0b4db3] py-5 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">

          <select className="bg-blue-700 text-white px-4 py-3 outline-none w-full">
            <option>Apartment</option>
            <option>Villa</option>
            <option>Townhouse</option>
          </select>

          <select className="bg-blue-700 text-white px-4 py-3 outline-none w-full">
            <option>Address</option>
            <option>Hodan</option>
            <option>Wadajir</option>
          </select>

          <select className="bg-blue-700 text-white px-4 py-3 outline-none w-full">
            <option>Size [10 - 100] SqFt</option>
          </select>

          <select className="bg-blue-700 text-white px-4 py-3 outline-none w-full">
            <option>Price [10 - 100] $</option>
          </select>

          <button className="bg-white text-blue-900 font-semibold px-6 py-3 w-full">
            SEARCH
          </button>

        </div>
      </div>

    </section>
  );
}

export default Hero;