import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/Logo.png";

function Navbar() {
  const primary = "#1447e6";
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Rent", to: "/rent" },
      { label: "Blogs", to: "/blogs" },
      { label: "Contact Us", to: "/contact" },
    ],
    []
  );

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const DesktopLink = ({ item }) => (
    <NavLink
      to={item.to}
      className="relative px-1 py-2 text-sm font-medium transition-colors duration-300"
      style={({ isActive }) => ({
        color: isActive ? "#0f172a" : "rgba(15,23,42,0.72)",
      })}
    >
      {({ isActive }) => (
        <>
          {item.label}
          <span
            className="absolute left-0 right-0 -bottom-[3px] mx-auto h-[2px] transition-all duration-300"
            style={{
              width: isActive ? "100%" : "0%",
              backgroundColor: primary,
              borderRadius: 9999,
            }}
          />
        </>
      )}
    </NavLink>
  );

  const MobileItem = ({ item }) => (
    <NavLink
      to={item.to}
      onClick={() => setOpen(false)}
      className="relative px-3 py-3 text-sm font-semibold transition-all duration-300"
      style={({ isActive }) => ({
        color: isActive ? primary : "rgba(15,23,42,0.78)",
        backgroundColor: isActive ? `${primary}10` : "transparent",
        borderRadius: 14,
      })}
    >
      {({ isActive }) => (
        <>
          <span>{item.label}</span>
          <span
            className="absolute left-3 bottom-2 h-[2px] transition-all duration-300"
            style={{
              width: isActive ? "26px" : "0px",
              backgroundColor: primary,
              borderRadius: 9999,
            }}
          />
        </>
      )}
    </NavLink>
  );

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* desktop / tablet navbar */}
        <div
          className="hidden md:flex items-center justify-between gap-4 bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3 lg:px-4 py-2"
         
        >
          {/* brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div
              className="flex items-center gap-2 px-3 py-2"
            
            >
              <img src={logo} alt="Logo" className="h-7 w-auto object-contain" />
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-slate-900">
                  Mogadishu
                </div>
                <div
                  className="text-[10px] font-semibold"
                  style={{ color: primary }}
                >
                  Rental Houses
                </div>
              </div>
            </div>
          </Link>

          {/* center nav */}
          <nav className="flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => (
              <DesktopLink key={item.to} item={item} />
            ))}
          </nav>

          {/* right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              className="hidden lg:inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-slate-700 transition hover:bg-slate-50"
          
              aria-label="Search"
            >
              <FiSearch size={17} />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 lg:px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:opacity-95"
              style={{
                backgroundColor: primary,
             
                boxShadow: "0 10px 24px rgba(20, 71, 230, 0.18)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* mobile navbar */}
        <div
          className="md:hidden flex items-center justify-between gap-3 bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3 py-2"
          style={{ borderRadius: 9999 }}
        >
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <div
              className="flex items-center gap-2 px-2.5 py-1.5 bg-[#edf4e8]"
              style={{ borderRadius: 9999 }}
            >
              <img src={logo} alt="Logo" className="h-7 w-auto object-contain" />
              <div className="leading-tight">
                <div className="text-xs font-extrabold text-slate-900">
                  Mogadishu
                </div>
                <div
                  className="text-[9px] font-semibold"
                  style={{ color: primary }}
                >
                  Rental Houses
                </div>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              style={{ borderRadius: 9999 }}
              aria-label="Search"
            >
              <FiSearch size={18} />
            </button>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              style={{ borderRadius: 9999 }}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* mobile sidebar */}
      <aside
        className={`fixed top-0 left-0 z-[60] h-screen w-[86%] max-w-[340px] bg-white md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-black/10">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900">
                Mogadishu
              </div>
              <div className="text-xs font-semibold" style={{ color: primary }}>
                Rental Houses
              </div>
            </div>
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center bg-slate-100 transition-colors duration-300 hover:bg-slate-200"
            style={{ borderRadius: 9999 }}
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <MobileItem key={item.to} item={item} />
            ))}
          </nav>

          <div className="mt-6 flex gap-3">
            <button
              className="inline-flex h-11 w-11 items-center justify-center bg-slate-100 text-slate-700"
              style={{ borderRadius: 9999 }}
              aria-label="Search"
            >
              <FiSearch size={18} />
            </button>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 px-4 py-3 text-sm font-extrabold text-white transition duration-300 hover:opacity-95 inline-flex items-center justify-center"
              style={{
                backgroundColor: primary,
                borderRadius: 9999,
                boxShadow: "0 12px 28px rgba(20, 71, 230, 0.2)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;