import React from "react";
import { Link } from "react-router-dom";
import land from "../assets/land.jpg";
import home from "../assets/homestay.jpg";
import hero from "../assets/heroimage.jpg";

function Lastest() {
  const primary = "#1447e6";

  const posts = [
    {
      id: 1,
      image: land,
      date: "AUGUST 24, 2024",
      title: "The Best Neighborhoods for Expats in 2024",
      desc: "Discover which districts offer the best combination of security, proximity to international hubs, and lifestyle comfort for renters in Mogadishu.",
      to: "/blogs/best-neighborhoods-for-expats-2024",
    },
    {
      id: 2,
      image: hero,
      date: "AUGUST 12, 2024",
      title: "Rental Agreements: What You Need to Know",
      desc: "A practical guide to understanding local rental laws, deposit standards, contracts, and your rights as a tenant in Somalia.",
      to: "/blogs/rental-agreements-what-you-need-to-know",
    },
    {
      id: 3,
      image: home,
      date: "JULY 28, 2024",
      title: "Top 5 Renovation Trends for Rentals",
      desc: "Landlords can increase rental appeal with simple interior upgrades, better storage, and design choices that attract quality tenants.",
      to: "/blogs/top-5-renovation-trends-for-rentals",
    },
  ];

  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight">
            Latest Market Insights
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-black/50">
            Stay updated with the latest rental trends, legal requirements, and
            neighborhood guides in the Mogadishu housing market.
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group border border-[#1447e6]/30  p-4">
              {/* Image */}
              <Link
                to={post.to}
                className="block overflow-hidden "
               
              >
                <div className="relative h-[210px] sm:h-[230px] lg:h-[240px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="pt-5">
                <p
                  className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em]"
                  style={{ color: primary }}
                >
                  {post.date}
                </p>

                <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-[#0f172a] leading-snug">
                  <Link to={post.to} className="transition hover:text-[#1447e6]">
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-7 text-black/50">
                  {post.desc}
                </p>

                <Link
                  to={post.to}
                  className="mt-5 inline-flex items-center text-sm font-semibold transition"
                  style={{ color: primary }}
                >
                  <span
                    className="border-b pb-[2px]"
                    style={{ borderColor: primary }}
                  >
                    Read More
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lastest;