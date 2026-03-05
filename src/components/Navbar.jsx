import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/Logo.png";

function Navbar() {
  const primary = "#094a95";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Rent", href: "#rent" },
      { label: "Blogs", href: "#blogs" },
      { label: "Contact Us", href: "#contact" },
    ],
    []
  );


  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  
  useEffect(() => {
    const onHash = () => setActive(window.location.hash || "#home");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const DesktopLink = ({ item }) => {
    const isActive = active === item.href;
    return (
      <a
        href={item.href}
        onClick={() => setActive(item.href)}
        className="relative px-1 py-2 text-sm font-semibold transition"
        style={{ color: isActive ? primary : "rgba(0,0,0,0.65)" }}
      >
        {item.label}
        <span
          className="absolute left-0 -bottom-1 h-[2px] w-full transition"
          style={{
            backgroundColor: primary,
            opacity: isActive ? 1 : 0,
            transform: isActive ? "scaleX(1)" : "scaleX(0.6)",
            transformOrigin: "center",
            borderRadius: 2,
          }}
        />
      </a>
    );
  };

  const MobileItem = ({ item, icon }) => {
    const isActive = active === item.href;
    return (
      <a
        href={item.href}
        onClick={() => {
          setActive(item.href);
          setOpen(false);
        }}
        className="flex items-center justify-between px-3 py-3 text-sm font-semibold transition"
        style={{
          borderRadius: 10,
          backgroundColor: isActive ? `${primary}10` : "transparent",
          color: isActive ? primary : "rgba(0,0,0,0.72)",
        }}
      >
        <span className="flex items-center gap-3">
          <span
            className="h-9 w-9 grid place-items-center"
            style={{
              borderRadius: 10,
              backgroundColor: isActive ? `${primary}14` : "rgba(0,0,0,0.04)",
              color: isActive ? primary : "rgba(0,0,0,0.55)",
            }}
          >
            {icon}
          </span>
          {item.label}
        </span>

        <span
          className="h-8 w-8 grid place-items-center"
          style={{
            borderRadius: 10,
            backgroundColor: `${primary}12`,
            color: primary,
            opacity: isActive ? 1 : 0.7,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top bar */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <div className="leading-tight">
              <div className="text-sm sm:text-base font-extrabold tracking-tight text-black/85">
                Mogadishu{" "}
               
              </div>
              <div className="text-[11px] sm:text-xs font-semibold" style={{ color: primary }}>
                Rental Houses
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <DesktopLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: primary, borderRadius: 10 }}
            >
              Login
            </button>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 transition hover:bg-black/[0.06]"
              style={{
                borderRadius: 10,
                backgroundColor: "rgba(0,0,0,0.04)",
              }}
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

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* LEFT SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-[86%] max-w-[340px] bg-white md:hidden z-[60]
        transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        {/* Sidebar header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-black/10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-black/85">
                Mogadishu
              </div>
              <div className="text-xs font-semibold" style={{ color: primary }}>
                Rental Houses
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="h-10 w-10 grid place-items-center transition hover:bg-black/[0.06]"
            style={{ borderRadius: 10, backgroundColor: "rgba(0,0,0,0.04)" }}
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

        {/* Sidebar content */}
        <div className="p-3">
          <nav className="flex flex-col gap-2">
            <MobileItem
              item={navItems[0]}
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
            <MobileItem
              item={navItems[1]}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 21a8 8 0 0 0-16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
            <MobileItem
              item={navItems[2]}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 8V6a5 5 0 0 1 10 0v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 8h12l-1 13H7L6 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <MobileItem
              item={navItems[3]}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 5h16v14H7l-3 3V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10h8M8 14h6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
            <MobileItem
              item={navItems[4]}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16v16H4V4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 8h16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12h8M8 16h6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
          </nav>

          {/* Sidebar CTA */}
          <button
            className="w-full mt-4 px-4 py-3 text-sm font-extrabold text-white transition hover:opacity-95"
            style={{ backgroundColor: primary, borderRadius: 10 }}
          >
            Login
          </button>

          {/* Footer */}
          <div className="mt-4 text-xs text-black/45 px-1">
            © {new Date().getFullYear()} Mogadishu Rental Houses
          </div>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;