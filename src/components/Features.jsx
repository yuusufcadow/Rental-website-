import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaVectorSquare, FaMapMarkerAlt } from "react-icons/fa";

import hero1 from "../assets/heroimage.jpg";
import villa from "../assets/villas.jpg";
import penthouse from "../assets/penthouse.jpg";
import townhouse from "../assets/townhouse.jpg";
import home from "../assets/homestay.jpg";

function Features() {
  const primary = "#1447e6";
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Apartments", "Villas", "Penthouses"];

  const listings = [
    {
      id: 1,
      title: "Modern 3-Bedroom Apartment",
      category: "Apartments",
      location: "Wadajir District, Mogadishu",
      price: "$1,200",
      beds: 3,
      baths: 2,
      size: "1,250",
      image: hero1,
      label: "FEATURED",
    },
    {
      id: 2,
      title: "Oceanfront Luxury Villa",
      category: "Villas",
      location: "Lido Beach Area, Mogadishu",
      price: "$3,500",
      beds: 5,
      baths: 4,
      size: "4,200",
      image: villa,
      label: "NEW ARRIVAL",
    },
    {
      id: 3,
      title: "Elegant Family Townhouse",
      category: "Apartments",
      location: "Hodan District, Mogadishu",
      price: "$950",
      beds: 4,
      baths: 3,
      size: "2,100",
      image: townhouse,
      label: "FEATURED",
    },
    {
      id: 4,
      title: "Comfortable Homestay",
      category: "Apartments",
      location: "Karaan District, Mogadishu",
      price: "$650",
      beds: 2,
      baths: 1,
      size: "900",
      image: home,
      label: "FEATURED",
    },
    {
      id: 5,
      title: "Luxury Penthouse Apartment",
      category: "Penthouses",
      location: "Abdiaziz District, Mogadishu",
      price: "$2,400",
      beds: 4,
      baths: 3,
      size: "3,000",
      image: penthouse,
      label: "NEW",
    },
    {
      id: 6,
      title: "Private Villa With Garden",
      category: "Villas",
      location: "Daynile District, Mogadishu",
      price: "$1,800",
      beds: 4,
      baths: 3,
      size: "2,800",
      image: villa,
      label: "FEATURED",
    },
  ];

  const filteredListings = useMemo(() => {
    if (activeTab === "All") return listings;
    return listings.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="bg-gray-100 py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Tabs */}
        <div className="mb-12 animate-[fadeUp_0.8s_ease-out]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                Featured Listings
              </h2>

              <p className="text-gray-500 mt-3 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
                Handpicked properties that offer the best value and comfort in
                Mogadishu.
              </p>
            </div>

            {/* Tabs Right Side */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-end gap-2 bg-white/75 border border-gray-100 p-1 "
              style={{ borderRadius: 2 }}
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className="px-4 sm:px-5 py-2.5 text-sm font-semibold transition-all duration-300"
                    style={{
                      borderRadius: 2,
                      backgroundColor: isActive ? primary : "transparent",
                      color: isActive ? "#ffffff" : "#374151",
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredListings.map((house, index) => (
            <div
              key={house.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group animate-[fadeUp_0.8s_ease-out]"
              style={{
                borderRadius: 2,
                animationDelay: `${index * 120}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-56 sm:h-60 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Label */}
                <span
                  className="absolute top-4 left-4 text-white text-[11px] sm:text-xs px-3 py-1 font-semibold"
                  style={{
                    backgroundColor: primary,
                    borderRadius: 2,
                  }}
                >
                  {house.label}
                </span>

                {/* Price */}
                <div
                  className="absolute bottom-4 left-4 bg-white px-3 py-1.5 font-semibold shadow text-sm"
                  style={{ borderRadius: 2, color: primary }}
                >
                  {house.price}
                  <span className="text-gray-400 text-xs"> /month</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                  {house.title}
                </h3>

                <p className="flex items-center text-gray-500 text-sm mt-2">
                  <FaMapMarkerAlt className="mr-2 shrink-0" style={{ color: primary }} />
                  <span className="line-clamp-1">{house.location}</span>
                </p>

                {/* Divider */}
                <div className="border-t my-4"></div>

                {/* Details */}
                <div className="grid grid-cols-3 gap-2 text-gray-600 text-xs sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <FaBed className="shrink-0" /> {house.beds} Bed
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FaBath className="shrink-0" /> {house.baths} Bath
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FaVectorSquare className="shrink-0" /> {house.size}
                  </span>
                </div>

                {/* Button */}
                <Link
                  to={`/rent/${house.id}`}
                  className="block text-center mt-6 font-medium py-3 transition"
                  style={{
                    borderRadius: 2,
                    backgroundColor: "#f3f4f6",
                    color: "#374151",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primary;
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f3f4f6";
                    e.currentTarget.style.color = "#374151";
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="flex justify-center sm:justify-end text-center mt-10 animate-[fadeUp_0.8s_ease-out]">
          <Link
            to="/properties"
            className="px-6 sm:px-8 py-3 font-semibold text-white transition"
            style={{
              backgroundColor: primary,
              borderRadius: 2,
            }}
          >
            See More Properties
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(24px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Features;