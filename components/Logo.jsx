// components/GlamoraLogo.jsx
"use client";

export default function Logo({
  size = 36,
  showWordmark = true,
  className = "",
}) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* ORB */}
      <div
        aria-hidden
        style={{ width: size, height: size }}
        className="relative rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.25)] overflow-visible"
      >
        {/* base gradient (brighter for white bg) */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(120%_120%_at_30%_20%,#5A7BFF_0%,#7B4DFF_45%,#2EE6A0_100%)]" />
        {/* inner glass */}
        <div className="absolute inset-[2px] rounded-full bg-white/10 backdrop-blur-[1px]" />
        {/* tiny wave icon */}
        <svg
          viewBox="0 0 32 32"
          className="absolute inset-0 m-auto h-3/5 w-3/5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M4 18c4-4 6-4 10 0s6 4 10 0" />
          <path d="M9 12c1.5-1.2 3-1.2 4.5 0" opacity="0.85" />
        </svg>
        {/* breathing ring */}
        <span className="absolute inset-0 rounded-full ring-2 ring-white/20 animate-[pulse_3s_ease-in-out_infinite]" />
      </div>

      {/* WORDMARK */}
      {showWordmark && (
        <div className="leading-none">
          <span className="text-[1.6rem] font-semibold tracking-tight text-neutral-800">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#20E3B2_0%,#79F1A4_30%,#7B4DFF_100%)]">
              mora
            </span>
          </span>
          <div className="text-[11px] -mt-0.5 text-neutral-500">
            experience beautifully
          </div>
        </div>
      )}
    </div>
  );
}
