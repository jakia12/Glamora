// components/shared/HamburgerMenu.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // lock body scroll + ESC to close
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);
  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <div>
      {/* Trigger button */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={toggle}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/40 text-black hover:bg-black/5"
      >
        <div className="relative h-4 w-5">
          <span
            className="absolute left-0 top-0 block h-[2px] w-5 bg-current transition-transform"
            style={{
              transform: isOpen
                ? "translateY(6px) rotate(45deg)"
                : "translateY(0)",
            }}
          />
          <span
            className="absolute left-0 top-[6px] block h-[2px] w-5 bg-current transition-opacity"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="absolute left-0 top-[12px] block h-[2px] w-5 bg-current transition-transform"
            style={{
              transform: isOpen
                ? "translateY(-6px) rotate(-45deg)"
                : "translateY(0)",
            }}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          role="presentation"
          onClick={close}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* Slide-in panel */}
      <aside
        id="mobile-menu"
        className="fixed top-0 right-0 z-50 h-full w-[90%] max-w-[360px] bg-[#d6b981] shadow-2xl transition-transform"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="px-3 py-3 border-b border-white/20 flex items-center justify-between">
          <span className="text-[20px] font-semibold text-black">Menu</span>
          <button
            aria-label="Close menu"
            onClick={close}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black/40 text-black hover:text-[#00C5C4]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="px-2 py-2">
          {ITEMS.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={close}
              className={[
                "block rounded-lg px-3 py-3 text-[20px] md:text-[22px]",
                isActive(it.href)
                  ? "text-[#EBB42A] font-semibold"
                  : "text-black hover:text-[#00C5C4]",
              ].join(" ")}
            >
              {it.label}
            </Link>
          ))}

          <div className="mt-4 px-2">
            <Link
              href="/booking"
              className="theme-btn style-two inline-flex"
              onClick={close}
            >
              Book Now <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}
