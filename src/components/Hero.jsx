import React from "react";
import hero from "../assets/heroimage.jpg";

import penthouse from "../assets/penthouse.jpg";
import villa from "../assets/villas.jpg";
import townhouse from "../assets/townhouse.jpg";
import home from "../assets/homestay.jpg";
import land from "../assets/land.jpg";



function Hero() {
  const primary = "#094a95";

  const CategoryCard = ({ title, img, icon }) => (
    <button
      type="button"
      className="group w-full bg-white border border-black/10 hover:border-black/20 transition overflow-hidden"
      style={{ borderRadius: 2, boxShadow: "0 10px 22px rgba(0,0,0,0.06)" }}
    >
      {/* Image */}
      <div className="relative h-[86px] sm:h-[150px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        />

        {/* Icon badge */}
        <div className="absolute top-2 left-2">
          <div
            className="h-9 w-9 grid place-items-center bg-white/95 border border-black/10"
            style={{ borderRadius: 2, color: primary }}
          >
            {icon}
          </div>
        </div>

        {/* gradient */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Title */}
      <div className="px-3 py-3 text-center">
        <p className="text-xs sm:text-sm font-extrabold text-black/70 group-hover:text-black/85 transition">
          {title}
        </p>
      </div>
    </button>
  );

  return (
    <section id="home" className="w-full pt-20">
      <div className="relative left-1/2 -translate-x-1/2 w-screen px-4 sm:px-6 lg:px-10">
        <div
          className="relative overflow-hidden bg-white"
          style={{ borderRadius: 2, boxShadow: "0 14px 30px rgba(0,0,0,0.08)" }}
        >
          {/* TOP IMAGE AREA */}
          <div className="relative h-[380px] sm:h-[470px] lg:h-[560px]">
            <img
              src={hero}
              alt="Find rental properties"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
              <p className="text-white/80 text-xs tracking-[0.22em] uppercase">
                Mogadishu Rental Houses
              </p>

              <h1 className="mt-2 text-white text-3xl sm:text-5xl font-extrabold tracking-tight">
                Find Your Properties
              </h1>

              {/* SEARCH BAR */}
              <div
                className="mt-5 w-full max-w-2xl bg-white/95 border border-black/10 flex items-center gap-2 px-3 py-2"
                style={{
                  borderRadius: 9999,
                  boxShadow: "0 16px 30px rgba(0,0,0,0.16)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Search rentals (location, price, type...)"
                  className="w-full bg-transparent outline-none text-sm sm:text-base text-black/70 placeholder:text-black/40"
                />

                <button
                  type="button"
                  className="h-9 w-9 grid place-items-center text-white hover:opacity-95 transition"
                  style={{ backgroundColor: primary, borderRadius: 9999 }}
                  aria-label="Search"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10 17l5-5-5-5"
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

          {/* CATEGORY CARDS (now includes more + images) */}
          <div className="bg-[#f6f7fb] px-3 sm:px-5 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <CategoryCard
                title="Penthouses"
                img={penthouse}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 21V10l8-6 8 6v11M9 21v-7h6v7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />

              <CategoryCard
                title="Villas"
                img={villa}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 11l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />

              <CategoryCard
                title="Townhouses"
                img={townhouse}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 21V3h10v18M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />

              <CategoryCard
                title="Apartments"
                   img={penthouse}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 21V4a1 1 0 0 1 1-1h8v18M13 7h7v14M7 7h2M7 11h2M7 15h2M16 11h2M16 15h2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />

              <CategoryCard
                title="Homestay"
                img={home}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />

              <CategoryCard
                title="Land / Plot"
                img={land}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 20c0-4 2-7 5-10 3 3 5 6 5 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;