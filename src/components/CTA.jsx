import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/heroimage.jpg";

function CTA() {
  const primary = "#1447e6";

  return (
    <section className="bg-[#f3f4f6] py-20">
      <div className="container mx-auto p-4">
        <div
          className="relative overflow-hidden text-center px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-16 lg:py-20 min-h-[320px] sm:min-h-[360px] lg:min-h-[420px] flex items-center justify-center"
          style={{
            borderRadius: 2,
          }}
        >
          {/* background image */}
          <img
            src={heroimage}
            alt="CTA background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* small primary overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: primary,
              opacity: 0.72,
            }}
          />

       

          {/* content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to find your next home?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white/80">
              Join thousands of others who found their dream house through
              Mogadishu Rental Houses.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/rent"
                className="inline-flex w-full sm:w-auto min-w-0 sm:min-w-[220px] items-center justify-center px-5 py-3.5 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold transition hover:opacity-95"
                style={{
                  backgroundColor: "#ffffff",
                  color: primary,
                  borderRadius: 2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                }}
              >
                Browse All Rentals
              </Link>

              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto min-w-0 sm:min-w-[220px] items-center justify-center px-5 py-3.5 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:bg-white/10"
                style={{
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.18)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                Contact Agent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;