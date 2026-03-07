import React from "react";
import rental from "../../assets/mugdishu.png";

function AboutHEro() {
  const primary = "#1447e6";

  return (
    <section className="w-full  bg-white">
      <div className="">
        <div
          className="relative overflow-hidden min-h-[220px] sm:min-h-[260px] lg:min-h-[400px]"
          style={{ borderRadius: 2 }}
        >
          {/* Background image */}
          <img
            src={rental}
            alt="Our Services"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#1447e6]/45" />

          {/* Soft left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1447e6]/45 via-black/25 to-transparent" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] items-center justify-center text-center">
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base font-medium text-[#ffffff]">
                Home <span className="mx-2 text-white/60">›</span> About Us
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                About Us
              </h1>

              <div
                className="mx-auto mt-5 h-[3px] w-20"
                style={{
                  backgroundColor: primary,
                  borderRadius: 9999,
                }}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHEro;