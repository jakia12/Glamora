// components/SimpleNavbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./Header.css";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkBase =
    "block rounded-lg px-3 py-2 text-[20px] md:text-[22px] transition-colors";
  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header
      className={[
        "z-50 border-b transition-colors duration-300 header",
        open
          ? "bg-[#102039]/90 border-white/10 backdrop-blur shadow-lg"
          : "bg-transparent border-white/25",
      ].join(" ")}
    >
      {/* Grid: logo | nav | cta */}
      <div
        className="items-center gap-3 px-4 py-3 flex justify-between"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
          style={{ textDecoration: "none" }}
        >
          <img src="/images/logo2.png" alt="Logo" style={{ height: "90px" }} />
        </Link>

        {/* Middle: Desktop Nav */}
        <nav className="justify-center gap-12 md:flex mx-7 hidden">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={[
                "text-[20px] font-medium mgx Mont transition-colors",
                isActive(n.href)
                  ? "text-[#EBB42A]"
                  : "text-black hover:text-[#2ecc71]",
              ].join(" ")}
              style={{ textDecoration: "none" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right: Book Now */}
        <div className="md:flex items-center gap-3  hidden">
          <Link
            href="/booking"
            className="theme-btn style-two hidden md:inline-flex"
          >
            Book Now <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        {/* Mobile Burger */}
        <div className="d-lg-none">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
