import React from "react";
import { FiShield, FiCreditCard, FiHeadphones } from "react-icons/fi";

function Excellence() {
  const primary = "#1447e6";

  const items = [
    {
      icon: <FiShield size={22} />,
      title: "Verified Listings",
      desc: "Every property on our platform is personally inspected and verified by our local experts to ensure accuracy and safety.",
    },
    {
      icon: <FiCreditCard size={22} />,
      title: "Transparent Pricing",
      desc: "No hidden fees or unexpected costs. We facilitate direct negotiations to get you the best market value available.",
    },
    {
      icon: <FiHeadphones size={22} />,
      title: "24/7 Support",
      desc: "Our dedicated team is always ready to assist you with move-ins, legal documentation, and any maintenance concerns.",
    },
  ];

  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: primary }}
          >
            Excellence & Trust
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight">
            Why Mogadishu Rental Houses?
          </h2>

          <div
            className="mx-auto mt-5 h-[4px] w-16"
            style={{
              backgroundColor: primary,
              borderRadius: 9999,
            }}
          />
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-black/5 p-6 sm:p-7  transition duration-300 hover:-translate-y-1 "
              style={{ borderRadius: 12 }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center"
                style={{
                  backgroundColor: `${primary}12`,
                  color: primary,
                  borderRadius: 10,
                }}
              >
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#0f172a]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-8 text-black/55">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Excellence;