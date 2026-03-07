import React from "react";
import {
  FaBuilding,
  FaHome,
  FaCity,
  FaMountain,
} from "react-icons/fa";
import { MdApartment } from "react-icons/md";

function Services() {
  const categories = [
    {
      title: "Penthouse",
      icon: <FaCity size={26} />,
    },
    {
      title: "Villa",
      icon: <FaHome size={26} />,
    },
    {
      title: "Townhouse",
      icon: <FaBuilding size={26} />,
    },
    {
      title: "Apartment",
      icon: <MdApartment size={26} />,
    },
    {
      title: "Homestay",
      icon: <FaHome size={26} />,
    },
    {
      title: "Land / Plot",
      icon: <FaMountain size={26} />,
    },
  ];

  return (
    <section className="bg-gray-100 pb-20">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="mb-12 animate-[fadeUp_0.8s_ease-out]">
          <h2 className="text-3xl font-bold text-gray-800">
            Rental Categories
          </h2>

          <p className="text-gray-500 mt-2">
            Explore our wide range of properties by type
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded border border-gray-200 
              p-8 text-center cursor-pointer
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              animate-[fadeUp_0.8s_ease-out]"
              style={{ animationDelay: `${index * 120}ms`, animationFillMode: "both" }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  transition-all duration-300
                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:scale-110
                  "
                >
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
                {item.title}
              </h3>
            </div>
          ))}
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

export default Services;