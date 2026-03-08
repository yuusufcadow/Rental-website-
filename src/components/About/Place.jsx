import React, { useState } from "react";
import homestay from "../../assets/homestay.jpg";
import visitImage from "../../assets/homestay.jpg";
import applyImage from "../../assets/homestay.jpg";
import moveImage from "../../assets/homestay.jpg";

function Place() {
  const primary = "#1447e6";
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Browse Rentals",
      image: homestay,
      heading: "Find a rental home that fits your lifestyle",
      description:
        "Explore houses, apartments, villas, and homestays in Mogadishu with trusted listings, clear prices, and complete rental details.",
    },
    {
      id: 2,
      title: "Book a Visit",
      image: visitImage,
      heading: "Schedule a property visit at the right time",
      description:
        "Book a visit quickly and connect with landlords or agents to see the property in person before making your decision.",
    },
    {
      id: 3,
      title: "Apply Easily",
      image: applyImage,
      heading: "Complete your rental application with ease",
      description:
        "Enjoy a simpler rental process with transparent terms, important property information, and a smoother path to securing your home.",
    },
    {
      id: 4,
      title: "Move In Smoothly",
      image: moveImage,
      heading: "Move into your new home with confidence",
      description:
        "Move in with peace of mind knowing you chose a rental through a platform focused on clarity, trust, and support.",
    },
  ];

  const activeContent = steps.find((step) => step.id === activeStep);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
            Peace of mind at every step
            <br />
            of your rental journey
          </h2>
        </div>

        {/* steps */}
        <div className="relative mt-8 sm:mt-10 max-w-4xl mx-auto">
          {/* center line */}
          <div className="hidden sm:block absolute left-[12.5%] right-[12.5%] top-5 h-[2px] bg-[#e5e7eb]" />
          <div
            className="hidden sm:block absolute top-[13px] right-[12.5%] h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px]"
            style={{ borderLeftColor: "#e5e7eb" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 relative z-10">
            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center text-center transition"
                >
                  <span
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center text-sm font-bold transition-all duration-300"
                    style={{
                      borderRadius: "2px",
                      backgroundColor: isActive ? primary : "#f3f4f6",
                      color: isActive ? "#ffffff" : "#111827",
                    }}
                  >
                    {step.id}
                  </span>

                  <span className="mt-3 text-xs sm:text-sm font-semibold text-black/80">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* content block */}
        <div
          className="mt-10 sm:mt-12 overflow-hidden bg-white border border-black/5 min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]"
          style={{ borderRadius: "2px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* image */}
            <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-full min-h-[240px] sm:min-h-[300px] lg:min-h-[520px]">
              <img
                src={activeContent.image}
                alt={activeContent.heading}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* text */}
            <div className="flex items-center bg-white px-5 py-8 sm:px-8 lg:px-10 min-h-[180px] sm:min-h-[180px] lg:min-h-[520px]">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
                  {activeContent.heading}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-7 text-black/50">
                  {activeContent.description}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  style={{
                    backgroundColor: primary,
                    borderRadius: "2px",
                  }}
                >
                  Explore All Rentals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Place;