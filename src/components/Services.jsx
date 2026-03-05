import React from "react";

function Services() {
  const primary = "#094a95";

  // Card like the screenshot: icon on top, centered text, soft border, clean spacing
  const TypeCard = ({ title, count, icon }) => (
    <button
      type="button"
      className="group w-full bg-white border border-black/10 hover:border-black/20 transition text-center px-5 py-6"
      style={{
        borderRadius: 10,
        boxShadow: "0 10px 22px rgba(0,0,0,0.04)",
      }}
    >
      <div className="flex justify-center">
        <div
          className="h-14 w-14 grid place-items-center mb-4"
          style={{
            borderRadius: 10,
            backgroundColor: "transparent", // screenshot look
            color: "rgba(0,0,0,0.55)",
          }}
        >
          <div className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-90">
            {icon}
          </div>
        </div>
      </div>

      <h3 className="text-sm sm:text-base font-extrabold text-black/80">
        {title}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-black/40">{count}</p>
    </button>
  );

  return (
    <section className="w-full bg-white">
      {/* FULL WIDTH BODY FIT */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen px-4 sm:px-6 lg:px-10 py-14">
        <div className="max-w-6xl mx-auto">
          {/* Heading (matches screenshot) */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black/80">
              Try Searching For
            </h2>
            <p className="mt-2 text-sm sm:text-base text-black/45">
              Thousands of rental seekers just like you have found their dream home
            </p>
          </div>

          {/* Cards (same layout feel) */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <TypeCard
              title="Penthouse"
              count="1 Property"
              icon={
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 21V10l8-6 8 6v11"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 21v-6h8v6"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12h6"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />

            <TypeCard
              title="Townhouse"
              count="1 Property"
              icon={
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 21V3h10v18"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />

            <TypeCard
              title="Villa"
              count="4 Properties"
              icon={
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 11l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11Z"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <TypeCard
              title="Apartments"
              count="3 Properties"
              icon={
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 21V4a1 1 0 0 1 1-1h8v18"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 7h7v14"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 7h2M7 11h2M7 15h2M16 11h2M16 15h2"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />

            <TypeCard
              title="Homestay"
              count="3 Properties"
              icon={
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 10.5v3"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />

            <TypeCard
              title="Land/Plot"
              count="1 Property"
              icon={
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 20h16"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 20c0-4 2-7 5-10 3 3 5 6 5 10"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 10V6"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 6h4"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
          </div>

          {/* Optional small accent line using your primary */}
          <div className="mt-10 flex justify-center">
            <div className="h-[3px] w-16" style={{ backgroundColor: primary, borderRadius: 10 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;