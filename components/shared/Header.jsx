// components/SimpleNavbar.jsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // focus drawer on open
  useEffect(() => {
    if (open && panelRef.current) panelRef.current.focus();
  }, [open]);

  return (
    <header
      className={[
        // removed: sticky top-0 and negative margin hack
        "z-50 border-b transition-colors duration-300 header",
        open
          ? "bg-[#102039]/90 border-white/10 backdrop-blur shadow-lg"
          : "bg-transparent border-white/25",
      ].join(" ")}
    >
      {/* Grid: logo | nav | cta */}
      <div
        className=" items-center gap-3 px-4 py-3 flex justify-between"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
          style={{ textDecoration: "none" }}
        >
          <img src="/images/logo2.png" alt="" style={{ height: "90px" }} />
        </Link>

        {/* Middle: Nav (centered) */}
        <nav className="hidd justify-center gap-12 md:flex mx-7 ">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-[20px] font-medium text-black hover:text-[#2ecc71] mgx Mont"
              style={{ textDecoration: "none" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right: Book Now + Hamburger */}
        <div className="flex items-center gap-3">
          <Link href="/booking" className="theme-btn style-two hid">
            Book Now <i className="fas fa-long-arrow-alt-right"></i>
          </Link>

          {/* Hamburger (right) */}
          <button
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 text-black hover:bg-white/10 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in drawer (FROM LEFT) */}
      <aside
        id="mobile-menu"
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`h-[100vh] z-50 overflow-y-hidden overflow-x-hidden fixed inset-y-0 left-0 bottom-0 w-full max-w-[100%] transform bg-[#D6B981] shadow-2xl transition-transform duration-300 pl-[20px] pr-[20px] md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/30 px-4 py-3">
          <span className="text-[22px] font-semibold text-black">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black text-black hover:text-[#00C5C4]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="px-2 py-2 lg:hidden block">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-black hover:text-[#00C5C4] text-[22px]"
            >
              {n.label}
            </Link>
          ))}

          <div className="mt-3 pt-3">
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="theme-btn style-two"
            >
              Book Now <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
}
