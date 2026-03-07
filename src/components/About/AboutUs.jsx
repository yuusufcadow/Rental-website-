import React from "react";
import { FiHome, FiGlobe, FiBox } from "react-icons/fi";
import rental from "../../assets/heroimage.jpg";
import home from "../../assets/homestay.jpg";

function AboutUs() {
  const primary = "#1447e6";

  const features = [
    {
      icon: <FiHome size={20} />,
      title: "The Perfect Residency",
      desc: "Find comfortable rental homes in trusted neighborhoods with the space, style, and convenience that fit your lifestyle.",
    },
    {
      icon: <FiGlobe size={20} />,
      title: "Trusted Rental Experts",
      desc: "We make it easier to discover verified houses, apartments, and villas with clear details and a smoother search experience.",
    },
    {
      icon: <FiBox size={20} />,
      title: "Built-in Storage & Comfort",
      desc: "Explore modern rental spaces with practical layouts, useful storage, and features designed for everyday living.",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch gap-10 lg:gap-14">
          {/* Left Images */}
          <div className="relative flex justify-center lg:justify-start h-full">
            <div className="relative w-full max-w-[560px] min-h-[360px] sm:min-h-[430px] lg:min-h-full h-full">
              {/* Back image */}
              <div
                className="absolute left-0 bottom-0 w-[58%] h-[70%] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                style={{ borderRadius: 2 }}
              >
                <img
                  src={home}
                  alt="Rental house interior"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Front image */}
              <div
                className="absolute left-[18%] top-0 w-[66%] h-[82%] overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
                style={{ borderRadius: 2 }}
              >
                <img
                  src={rental}
                  alt="Modern rental living room"
                  className="h-full w-full object-cover"
                />
              </div>

             
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-xl h-full flex items-center">
            <div className="w-full">
              <p
                className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase"
                style={{ color: primary }}
              >
                About Us
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Dream Rental Spaces
                <br />
                For Modern Living
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-7 text-black/50">
                Thousands of renters trust our platform to discover homes that feel
                comfortable, practical, and stylish. We help you explore rental
                houses, apartments, and villas with more confidence and clarity.
              </p>

              {/* Feature cards */}
              <div className="mt-8 space-y-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md"
                    style={{ borderRadius: 2 }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center"
                      style={{
                        borderRadius: 2,
                        backgroundColor: `${primary}10`,
                        color: primary,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-black/50">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;