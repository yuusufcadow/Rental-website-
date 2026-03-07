import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiMiniShieldCheck, HiCheckBadge } from "react-icons/hi2";

function Choose() {
  const items = [
    {
      icon: <HiCheckBadge size={26} />,
      title: "Verified Listings",
      desc: "Every rental on our platform is carefully reviewed to help users find trusted and reliable homes.",
    },
    {
      icon: <IoSearch size={26} />,
      title: "Easy Search",
      desc: "Advanced filters and location-based search make it simple to discover the right rental house fast.",
    },
    {
      icon: <HiMiniShieldCheck size={26} />,
      title: "Trusted Landlords",
      desc: "We work with trusted property owners to support a safer and more transparent rental experience.",
    },
  ];

  return (
    <section className="bg-[#f4f7fb] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b2236]">
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#7d8aa5]">
            Making rental house search easier with trusted listings, simple tools,
            and reliable support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {items.map((item, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e7eef8] text-[#094a95] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#2a344b]">
                {item.title}
              </h3>

              <p className="mx-auto mt-4 max-w-[320px] text-sm sm:text-base leading-7 text-[#7d8aa5]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;