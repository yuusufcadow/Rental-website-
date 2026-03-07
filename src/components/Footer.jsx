import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import logo from "../assets/Logo.png";

function Footer() {
  const primary = "#1447e6";

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Rent", to: "/rent" },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact Us", to: "/contact" },
  ];

  const propertyLinks = [
    { label: "Apartments", to: "/rent?type=apartments" },
    { label: "Villas", to: "/rent?type=villas" },
    { label: "Townhouses", to: "/rent?type=townhouses" },
    { label: "Penthouses", to: "/rent?type=penthouses" },
  ];

  const socialLinks = [
    { icon: <FiFacebook size={18} />, to: "/" },
    { icon: <FiInstagram size={18} />, to: "/" },
    { icon: <FiTwitter size={18} />, to: "/" },
  ];

  const contactInfo = [
    {
      icon: <FiMapPin size={18} />,
      title: "Address",
      value: "Mogadishu, Somalia",
    },
    {
      icon: <FiPhone size={18} />,
      title: "Phone",
      value: "+252 61 000 0000",
    },
    {
      icon: <FiMail size={18} />,
      title: "Email",
      value: "info@mogadishurentals.com",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: primary }}
    >
      {/* background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-12 md:grid-cols-2 xl:grid-cols-4">
          {/* brand */}
          <div className="xl:pr-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                <img
                  src={logo}
                  alt="Mogadishu Rental Houses"
                  className="h-9 w-auto object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold tracking-tight">
                  Mogadishu Rental Houses
                </h3>
                <p className="text-sm text-white/75">
                  Trusted rental homes platform
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Discover modern rental houses, apartments, villas, and family
              homes in Mogadishu with a simpler, faster, and more trusted
              browsing experience.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="flex h-11 w-11 items-center justify-center rounded bg-white text-[#1447e6] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="mb-5 text-base font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* rental types */}
          <div>
            <h4 className="mb-5 text-base font-bold">Rental Types</h4>
            <ul className="space-y-3">
              {propertyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="mb-5 text-base font-bold">Contact Info</h4>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3  "
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white/15"
                    style={{ color: "#ffffff" }}
                  >
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/75">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 md:flex-row">
          <p className="text-center text-sm text-white/75 md:text-left">
            © {new Date().getFullYear()} Mogadishu Rental Houses. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/80">
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;