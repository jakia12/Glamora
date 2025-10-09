"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
// adjust this path if your folder structure differs
import { services as allServices } from "../../../../../../data/services";

/* ---------------- helpers ---------------- */
const money = (n) =>
  Number(n || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const parseHHMM = (hhmm) => {
  const [h, m] = (hhmm || "").split(":").map(Number);
  return h * 60 + m;
};
const minutesToHHMM = (mins) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};
const todayISO = () => new Date().toISOString().slice(0, 10);

const OPEN_HOURS = {
  start: "10:00",
  end: "19:00",
  interval: 30,
  breaks: [{ start: "13:00", end: "14:00" }],
};

function generateSlots(dateISO, durationMin) {
  if (!dateISO) return [];
  const day = new Date(`${dateISO}T00:00:00`);
  if (day.getDay() === 0) return []; // Sunday closed
  const start = parseHHMM(OPEN_HOURS.start);
  const end = parseHHMM(OPEN_HOURS.end);
  const step = OPEN_HOURS.interval;
  const breaks = OPEN_HOURS.breaks.map((b) => ({
    s: parseHHMM(b.start),
    e: parseHHMM(b.end),
  }));

  const out = [];
  for (let t = start; t + durationMin <= end; t += step) {
    const overlapsBreak = breaks.some(
      (br) => !(t + durationMin <= br.s || t >= br.e)
    );
    if (!overlapsBreak) out.push(minutesToHHMM(t));
  }
  return out;
}

/* Example add-ons per category */
const ADDONS = {
  Hair: [
    { id: "scalp", name: "Scalp massage", price: 10 },
    { id: "gloss", name: "Gloss treatment", price: 20 },
  ],
  Nail: [{ id: "art", name: "Simple nail art", price: 15 }],
  Spa: [{ id: "aroma", name: "Aromatherapy", price: 12 }],
  Face: [{ id: "browtint", name: "Brow tint add-on", price: 10 }],
  Skin: [{ id: "sheet", name: "Sheet mask", price: 8 }],
  Makeup: [{ id: "lashes", name: "False lashes", price: 15 }],
};

const STAFF = [
  { id: "st1", name: "Ava" },
  { id: "st2", name: "Maya" },
  { id: "st3", name: "Noah" },
];

/* ---------------- Zod schema (dynamic for slot validation) ---------------- */
const makeSchema = (slots) =>
  z
    .object({
      selServiceSlug: z.string().min(1, "Please choose a service."),
      tierIdx: z
        .number({ invalid_type_error: "Please choose a package." })
        .int()
        .min(0, "Please choose a package."),
      date: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Pick a valid date (YYYY-MM-DD).")
        .refine(
          (d) =>
            new Date(`${d}T00:00:00`) >= new Date(`${todayISO()}T00:00:00`),
          { message: "Date cannot be in the past." }
        )
        .refine((d) => new Date(`${d}T00:00:00`).getDay() !== 0, {
          message: "We’re closed on Sundays.",
        }),
      time: z
        .string()
        .regex(/^\d{2}:\d{2}$/, "Pick a time slot.")
        .refine((t) => slots.includes(t), {
          message: "Please pick an available time slot.",
        }),
      staffId: z.string().min(1),
      addons: z.array(z.string()).default([]),
      contact: z.object({
        name: z.string().min(2, "Name must be at least 2 characters."),
        email: z.string().email("Enter a valid email address."),
        phone: z
          .string()
          .regex(/^[+]?[\d\s\-()]{7,}$/, "Enter a valid phone number."),
      }),
      notes: z.string().max(500).optional().or(z.literal("")),
      agree: z.boolean().refine((v) => v === true, {
        message: "You must accept the Terms and Privacy Policy.",
      }),
      smsOptIn: z.boolean().optional(),
    })
    .strict();

/* convert zod issues -> { "field.path": "msg" } */
function zodErrorsToMap(result) {
  const map = {};
  if (result.success) return map;
  for (const iss of result.error.issues) {
    const key = iss.path.join(".");
    if (!map[key]) map[key] = iss.message;
  }
  return map;
}

/* ---------------- Component ---------------- */
export default function BookingForm({ serviceSlug } = {}) {
  const services = allServices;

  // pick default service (safe if no prop passed)
  const initialService = useMemo(
    () => services.find((s) => s.slug === serviceSlug) || services[0],
    [serviceSlug, services]
  );

  const [selServiceSlug, setSelServiceSlug] = useState(
    initialService?.slug || ""
  );
  const selService = useMemo(
    () => services.find((s) => s.slug === selServiceSlug) || initialService,
    [selServiceSlug, initialService, services]
  );

  const [tierIdx, setTierIdx] = useState(0);
  const tier = selService?.tiers?.[tierIdx] || {
    name: "Standard",
    price: selService?.fromPrice ?? 0,
    duration: selService?.duration ?? "60 min",
  };

  // date/time
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const durationMin = useMemo(() => {
    if (tier?.duration?.includes?.("min")) {
      const n = parseInt(tier.duration, 10);
      return Number.isFinite(n) ? n : 60;
    }
    const m = /\d+/.exec(selService?.duration || "");
    return m ? Number(m[0]) : 60;
  }, [selService, tier]);

  const slots = useMemo(
    () => generateSlots(date, durationMin),
    [date, durationMin]
  );

  // staff & add-ons
  const [staffId, setStaffId] = useState(STAFF[0].id);
  const addonList = ADDONS[selService?.category] || [];
  const [addons, setAddons] = useState([]);

  // contact
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [notes, setNotes] = useState("");
  const [agree, setAgree] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(true);

  // validation state
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // totals
  const basePrice = tier?.price ?? selService?.fromPrice ?? 0;
  const addonsTotal = addons.reduce((sum, id) => {
    const a = addonList.find((x) => x.id === id);
    return sum + (a?.price || 0);
  }, 0);
  const total = basePrice + addonsTotal;

  useEffect(() => {
    // reset when service changes
    setTierIdx(0);
    setAddons([]);
    setTime("");
  }, [selServiceSlug]);

  /* --------- VALIDATE ONLY AFTER FIRST SUBMIT --------- */
  useEffect(() => {
    if (!submitted) return; // do not show errors until user submits once
    const schema = makeSchema(slots);
    const result = schema.safeParse({
      selServiceSlug,
      tierIdx,
      date,
      time,
      staffId,
      addons,
      contact,
      notes,
      agree,
      smsOptIn,
    });
    setErrors(zodErrorsToMap(result));
  }, [
    submitted,
    selServiceSlug,
    tierIdx,
    date,
    time,
    staffId,
    addons,
    contact,
    notes,
    agree,
    smsOptIn,
    slots,
  ]);

  function toggleAddon(id) {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function submit(e) {
    e.preventDefault();
    setSubmitted(true);

    const schema = makeSchema(slots);
    const result = schema.safeParse({
      selServiceSlug,
      tierIdx,
      date,
      time,
      staffId,
      addons,
      contact,
      notes,
      agree,
      smsOptIn,
    });

    if (!result.success) {
      setErrors(zodErrorsToMap(result));
      const el = document.querySelector(".is-invalid");
      el?.scrollIntoView?.({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        service: selService?.slug,
        tier: selService?.tiers?.[tierIdx]?.name || "Standard",
        date,
        time,
        staffId,
        addons,
        contact,
        notes,
        total, // client-side total (server will recompute)
        smsOptIn,
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Checkout failed");
      }

      const { url } = await res.json();
      toast.success("Securing your checkout…", {
        duration: 1100,
        style: { borderRadius: "10px", background: "#111", color: "#fff" },
      });

      setTimeout(() => {
        window.location.href = url;
      }, 700);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  // show messages only after submit
  const showErr = (key) => (submitted ? errors[key] : "");

  return (
    <section
      id="book"
      className="booking-form container px-0 pb-[80px]"
      style={{ marginBottom: "70px" }}
    >
      {/* Toasts */}
      <Toaster position="top-center" />

      <div className="booking-page-content wow fadeInLeft delay-0-2s">
        <div className="section-title mb-30">
          <span className="bg-text danR">booking</span>
          <span className="sub-title Mont" style={{ color: "#D6B981" }}>
            Book Your Visit
          </span>
          <h2 className="Mont">Reserve Your Glow</h2>
          <p className="text-muted Mont" style={{ maxWidth: 620 }}>
            Choose a service, pick a time, and add your details — fast, simple,
            and secure.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {/* LEFT */}
        <div className="col-12 col-lg-7">
          <form onSubmit={submit} noValidate>
            {/* Step 1: Service & Package */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="badge rounded-pill text-bg-dark">1</span>
                  <h5 className="mb-0">Select Service & Package</h5>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Service</label>
                    <select
                      className={`form-select ${
                        showErr("selServiceSlug") ? "is-invalid" : ""
                      }`}
                      value={selServiceSlug}
                      onChange={(e) => setSelServiceSlug(e.target.value)}
                      aria-invalid={!!showErr("selServiceSlug")}
                    >
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {showErr("selServiceSlug") && (
                      <div className="invalid-feedback">
                        {showErr("selServiceSlug")}
                      </div>
                    )}
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Package</label>
                    <select
                      className={`form-select ${
                        showErr("tierIdx") ? "is-invalid" : ""
                      }`}
                      value={tierIdx}
                      onChange={(e) => setTierIdx(Number(e.target.value))}
                      aria-invalid={!!showErr("tierIdx")}
                    >
                      {(selService?.tiers || [tier]).map((t, i) => (
                        <option key={i} value={i}>
                          {t.name} — {t.duration} — {money(t.price)}
                        </option>
                      ))}
                    </select>
                    {showErr("tierIdx") && (
                      <div className="invalid-feedback">
                        {showErr("tierIdx")}
                      </div>
                    )}
                  </div>

                  {addonList.length > 0 && (
                    <div className="col-12">
                      <label className="form-label">Add-ons (optional)</label>
                      <div className="d-flex flex-wrap gap-2">
                        {addonList.map((a) => (
                          <button
                            type="button"
                            key={a.id}
                            className={`btn btn-sm ${
                              addons.includes(a.id)
                                ? "btn-dark"
                                : "btn-outline-dark"
                            }`}
                            onClick={() => toggleAddon(a.id)}
                          >
                            {a.name} (+{money(a.price)})
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 2: Date & Time */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="badge rounded-pill text-bg-dark">2</span>
                  <h5 className="mb-0">Choose Date & Time</h5>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="bf-date" className="form-label">
                      Date
                    </label>
                    <input
                      id="bf-date"
                      type="date"
                      className={`form-control ${
                        showErr("date") ? "is-invalid" : ""
                      }`}
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setTime("");
                      }}
                      min={todayISO()}
                      aria-invalid={!!showErr("date")}
                    />
                    {showErr("date") && (
                      <div className="invalid-feedback">{showErr("date")}</div>
                    )}
                    <div className="form-text">We’re closed on Sundays.</div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Staff (optional)</label>
                    <select
                      className="form-select"
                      value={staffId}
                      onChange={(e) => setStaffId(e.target.value)}
                    >
                      {STAFF.map((st) => (
                        <option value={st.id} key={st.id}>
                          {st.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label d-flex justify-content-between">
                      <span>Available time slots</span>
                      <small className="text-muted">
                        Duration: {tier?.duration || selService?.duration}
                      </small>
                    </label>

                    <div className="d-flex flex-wrap gap-2">
                      {slots.length === 0 && (
                        <div className="text-muted">
                          Pick a date to see available times.
                        </div>
                      )}
                      {slots.map((t) => (
                        <button
                          type="button"
                          key={t}
                          className={`btn btn-sm ${
                            time === t ? "btn-dark" : "btn-outline-dark"
                          }`}
                          onClick={() => setTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    {showErr("time") && (
                      <div className="text-danger small mt-2">
                        {showErr("time")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Your Details */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="badge rounded-pill text-bg-dark">3</span>
                  <h5 className="mb-0">Your Details</h5>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Full name</label>
                    <input
                      className={`form-control ${
                        showErr("contact.name") ? "is-invalid" : ""
                      }`}
                      placeholder="Your name"
                      value={contact.name}
                      onChange={(e) =>
                        setContact({ ...contact, name: e.target.value })
                      }
                      aria-invalid={!!showErr("contact.name")}
                    />
                    {showErr("contact.name") && (
                      <div className="invalid-feedback">
                        {showErr("contact.name")}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                      className={`form-control ${
                        showErr("contact.phone") ? "is-invalid" : ""
                      }`}
                      placeholder="+1 555 000 1234"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact({ ...contact, phone: e.target.value })
                      }
                      aria-invalid={!!showErr("contact.phone")}
                    />
                    {showErr("contact.phone") && (
                      <div className="invalid-feedback">
                        {showErr("contact.phone")}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${
                        showErr("contact.email") ? "is-invalid" : ""
                      }`}
                      placeholder="you@example.com"
                      value={contact.email}
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                      aria-invalid={!!showErr("contact.email")}
                    />
                    {showErr("contact.email") && (
                      <div className="invalid-feedback">
                        {showErr("contact.email")}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Notes (optional)</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Allergies, preferences, parking notes…"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className={` ${showErr("agree") ? "is-invalid" : ""}`}
                        type="checkbox"
                        id="agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        aria-invalid={!!showErr("agree")}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <label
                        className="form-check-label tiny-label"
                        htmlFor="agree"
                      >
                        I accept the <Link href="/terms">Terms</Link> and{" "}
                        <Link href="/privacy">Privacy Policy</Link>
                      </label>
                      {showErr("agree") && (
                        <div className="invalid-feedback d-block">
                          {showErr("agree")}
                        </div>
                      )}
                    </div>

                    {/* Uncomment to enable SMS opt-in
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input tiny-check"
                        type="checkbox"
                        id="sms"
                        checked={smsOptIn}
                        onChange={(e) => setSmsOptIn(e.target.checked)}
                      />
                      <label
                        className="form-check-label tiny-label"
                        htmlFor="sms"
                      >
                        Send me SMS reminders
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="d-grid">
              <button
                className="btn btn-dark btn-lg"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    />
                    Processing…
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: sticky summary */}
        <div className="col-12 col-lg-5">
          <div className="card shadow-sm sticky-top" style={{ top: "1rem" }}>
            <div className="card-body">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className="ratio ratio-1x1 rounded overflow-hidden"
                  style={{ width: 72, position: "relative" }}
                >
                  <Image
                    src={selService?.img || "/images/services/hair.png"}
                    alt={selService?.title || "Service"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div className="small text-muted">
                    {selService?.category || ""}
                  </div>
                  <h5 className="mb-0">{selService?.title || "Service"}</h5>
                  <div className="small text-muted">
                    {selService?.duration || ""}
                  </div>
                </div>
                {selService?.rating && (
                  <div className="ms-auto small">
                    ★ {Number(selService.rating).toFixed(1)}
                  </div>
                )}
              </div>

              <ul className="list-unstyled mb-3">
                <li className="d-flex justify-content-between">
                  <span>Package</span>
                  <strong>{tier?.name}</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Date</span>
                  <strong>{date || "-"}</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Time</span>
                  <strong>{time || "-"}</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Staff</span>
                  <strong>{STAFF.find((s) => s.id === staffId)?.name}</strong>
                </li>
              </ul>

              <hr />
              <div className="mb-2">Add-ons</div>
              <ul className="list-group mb-3">
                {addons.length === 0 && (
                  <li className="list-group-item d-flex justify-content-between small text-muted">
                    None selected
                  </li>
                )}
                {addons.map((id) => {
                  const a = addonList.find((x) => x.id === id);
                  return (
                    <li
                      key={id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <span>{a?.name}</span>
                      <span>{money(a?.price)}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="d-flex justify-content-between">
                <span>Base</span>
                <strong>{money(basePrice)}</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Add-ons</span>
                <strong>{money(addonsTotal)}</strong>
              </div>
              <hr className="my-2" />
              <div className="d-flex justify-content-between fs-5">
                <span>Total</span>
                <strong>{money(total)}</strong>
              </div>

              <div className="small text-muted mt-3">
                Free cancellation up to 24 hours before your appointment.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tiny checkbox styles */}
      <style jsx>{`
        .tiny-check {
          width: 20px;
          height: 20px;
          min-width: 20px;
          min-height: 20px;
          border-radius: 0.25rem;
          margin-top: 0.2rem;
          background-size: 14px 14px;
        }
        .form-check-input.tiny-check:checked {
          background-color: #d6b981;
          border-color: #d6b981;
        }
        .form-check-input.tiny-check:focus {
          box-shadow: 0 0 0 0.2rem rgba(214, 185, 129, 0.25);
          border-color: #d6b981;
        }
        .tiny-label {
          margin-left: 0.4rem;
        }
      `}</style>
    </section>
  );
}
