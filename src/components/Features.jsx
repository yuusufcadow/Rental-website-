import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaVectorSquare, FaMapMarkerAlt } from "react-icons/fa";

import hero1 from "../assets/heroimage.jpg";
import villa from "../assets/villas.jpg";
import penthouse from "../assets/penthouse.jpg";
import townhouse from "../assets/townhouse.jpg";
import home from "../assets/homestay.jpg";
import land from "../assets/land.jpg";

function Features() {
  const listings = [
    {
      id: 1,
      title: "Modern 3-Bedroom Apartment",
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
      location: "Daynile District, Mogadishu",
      price: "$1,800",
      beds: 4,
      baths: 3,
      size: "2,800",
      image: villa,
      label: "FEATURED",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 animate-[fadeUp_0.8s_ease-out]">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Listings
          </h2>

          <p className="text-gray-500 mt-2">
            Handpicked properties that offer the best value and comfort in
            Mogadishu.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((house, index) => (
            <div
              key={house.id}
              className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group animate-[fadeUp_0.8s_ease-out]"
              style={{ animationDelay: `${index * 140}ms`, animationFillMode: "both" }}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Label */}
                <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs px-3 py-1 rounded">
                  {house.label}
                </span>

                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md text-blue-700 font-semibold shadow">
                  {house.price}
                  <span className="text-gray-400 text-xs"> /month</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">
                  {house.title}
                </h3>

                <p className="flex items-center text-gray-500 text-sm mt-1">
                  <FaMapMarkerAlt className="mr-1 text-blue-600" />
                  {house.location}
                </p>

                {/* Divider */}
                <div className="border-t my-4"></div>

                {/* Details */}
                <div className="flex justify-between text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <FaBed /> {house.beds} Bed
                  </span>

                  <span className="flex items-center gap-1">
                    <FaBath /> {house.baths} Bath
                  </span>

                  <span className="flex items-center gap-1">
                    <FaVectorSquare /> {house.size} sqft
                  </span>
                </div>

                {/* Button */}
                <Link
                  to={`/rent/${house.id}`}
                  className="block text-center mt-6 bg-gray-100 hover:bg-blue-700 hover:text-white text-gray-700 font-medium py-2 rounded-md transition"
                >
                  Rent Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="flex justify-end text-center mt-10 animate-[fadeUp_0.8s_ease-out]">
          <Link
            to="/properties"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded font-semibold transition"
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