import React, { useState } from "react";
import home from "../assets/heroimage.jpg";

function Crads() {
  const primary = "#1447e6";
  const [activeCard, setActiveCard] = useState(1);

  const cards = [
    {
      id: 1,
      step: "01",
      title: "We Visit Your Rental Home",
      desc: "We inspect the house and understand the space, condition, and rental details before you decide.",
      image: home,
    },
    {
      id: 2,
      step: "02",
      title: "Preliminary Property Review",
      desc: "We review home layout, location, and key features to help you compare rental options clearly.",
      image: home,
    },
    {
      id: 3,
      step: "03",
      title: "Begin The Rental Process",
      desc: "Once you choose the right place, move forward with a simpler and more confident rental journey.",
      image: home,
    },
  ];

  return (
    <section className="bg-[#f7f7f5] py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.4fr] gap-8 lg:gap-10 items-start">
          {/* Left content */}
          <div className="max-w-md">
            <p
              className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase"
              style={{ color: "#1447e6" }}
            >
              How We Works
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1e1e1e]">
              3 Easy steps
              <br />
              to get rental
              <br />
              home
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-7 text-black/45">
              Our rental journey is simple and clear. From discovering homes to
              comparing options and moving forward, everything is designed to help
              you rent with more confidence.
            </p>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card) => {
              const isActive = activeCard === card.id;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(1)}
                  className="group relative min-h-[360px] sm:min-h-[400px] overflow-hidden border border-black/5 bg-white transition-all duration-500 cursor-pointer"
                  style={{
                    borderRadius: 2,
                    boxShadow: isActive
                      ? "0 18px 40px rgba(0,0,0,0.12)"
                      : "0 8px 20px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Background image on hover/active */}
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scale(1)" : "scale(1.08)",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/65" />
                  </div>

                  {/* White background state */}
                  <div
                    className="absolute inset-0 bg-white transition-opacity duration-500"
                    style={{ opacity: isActive ? 0 : 1 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3
                        className="text-5xl sm:text-6xl font-extrabold leading-none transition-colors duration-500"
                        style={{
                          color: isActive
                            ? "rgba(255,255,255,0.18)"
                            : "rgba(0,0,0,0.06)",
                        }}
                      >
                        {card.step}
                      </h3>

                      <h4
                        className="mt-8 text-lg sm:text-xl font-bold leading-snug transition-colors duration-500"
                        style={{ color: isActive ? "#ffffff" : "#1f2937" }}
                      >
                        {card.title}
                      </h4>

                      <p
                        className="mt-4 text-sm leading-7 transition-colors duration-500"
                        style={{
                          color: isActive
                            ? "rgba(255,255,255,0.76)"
                            : "rgba(0,0,0,0.45)",
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-500"
                      style={{
                        color: isActive ? "#ffffff" : "#1f2937",
                      }}
                    >
                      Read More
                      <span
                        className="h-[2px] w-8 transition-all duration-500"
                        style={{
                          backgroundColor: isActive ? "#ffffff" : primary,
                          opacity: isActive ? 1 : 0.9,
                        }}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crads;