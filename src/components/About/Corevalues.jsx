import React from "react";
import { FiShield, FiEye, FiMousePointer } from "react-icons/fi";

function Corevalues() {
  const primary = "#1447e6";

  const values = [
    {
      icon: <FiShield size={24} />,
      title: "Trust",
      desc: "We rigorously verify listings and landlords to ensure every property on our platform meets safety and quality standards.",
    },
    {
      icon: <FiEye size={24} />,
      title: "Transparency",
      desc: "No hidden fees or misleading photos. We provide clear pricing, detailed descriptions, and authentic visual tours.",
    },
    {
      icon: <FiMousePointer size={24} />,
      title: "Accessibility",
      desc: "Our platform is designed to be user-friendly for everyone, ensuring that a better home is just a few clicks away on any device.",
    },
  ];

  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl animate-[fadeUp_0.8s_ease-out]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight">
            Our Core Values
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-8">
            The principles that guide everything we do.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 p-8 sm:p-9 animate-[fadeUp_0.8s_ease-out]"
              style={{
                borderRadius: 2,
                animationDelay: `${index * 180}ms`,
                animationFillMode: "both",
              }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                style={{
                  backgroundColor: `${primary}12`,
                  color: primary,
                  borderRadius: 2,
                }}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#0f172a] transition-colors duration-300 group-hover:text-[#1447e6]">
                {item.title}
              </h3>

              <p className="mt-5 text-base leading-9 text-slate-500 transition-all duration-300 group-hover:text-slate-600">
                {item.desc}
              </p>

              {/* subtle bottom line animation */}
              <div
                className="mt-6 h-[3px] w-0 transition-all duration-500 group-hover:w-16"
                style={{
                  backgroundColor: primary,
                  borderRadius: 9999,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(28px);
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

export default Corevalues;