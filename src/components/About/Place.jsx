import React, { useState } from "react";
import homestay from "../../assets/homestay.jpg";

function Place() {
  const primary = "#1447e6";
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Browse Rentals" },
    { id: 2, title: "Book a Visit" },
    { id: 3, title: "Apply Easily" },
    { id: 4, title: "Move In Smoothly" },
  ];

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
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 max-w-4xl mx-auto">
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
                    borderRadius: 2,
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

        {/* content block */}
        <div
          className="mt-10 sm:mt-12 overflow-hidden bg-white border border-black/5 min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]"
          style={{ borderRadius: 2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* image */}
            <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-full min-h-[240px] sm:min-h-[300px] lg:min-h-[520px]">
              <img
                src={homestay}
                alt="Find a rental home that fits your lifestyle"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* text */}
            <div className="flex items-center bg-white px-5 py-8 sm:px-8 lg:px-10 min-h-[180px] sm:min-h-[180px] lg:min-h-[520px]">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
                  {activeStep === 1 && "Find a rental home that fits your lifestyle"}
                  {activeStep === 2 && "Schedule a property visit at the right time"}
                  {activeStep === 3 && "Complete your rental application with ease"}
                  {activeStep === 4 && "Move into your new home with confidence"}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-7 text-black/50">
                  {activeStep === 1 &&
                    "Explore houses, apartments, villas, and homestays in Mogadishu with trusted listings, clear prices, and complete rental details."}
                  {activeStep === 2 &&
                    "Book a visit quickly and connect with landlords or agents to see the property in person before making your decision."}
                  {activeStep === 3 &&
                    "Enjoy a simpler rental process with transparent terms, important property information, and a smoother path to securing your home."}
                  {activeStep === 4 &&
                    "Move in with peace of mind knowing you chose a rental through a platform focused on clarity, trust, and support."}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  style={{
                    backgroundColor: primary,
                    borderRadius: 2,
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