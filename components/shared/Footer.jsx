"use client";

import { services } from "@/data/services";
import Link from "next/link";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { z } from "zod";

// Zod schema: basic email validation
const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

export default function Footer() {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    // supports either name="EMAIL" (your current markup) or name="email"
    const email = (fd.get("EMAIL") || fd.get("email") || "").toString();

    const parsed = emailSchema.safeParse({ email });
    if (!parsed.success) {
      const msg = parsed.error.issues?.[0]?.message || "Invalid email";
      setError(msg);
      toast.error(msg);
      return;
    }

    setError("");

    // If you have an API endpoint, you could send it here:
    // await fetch("/api/newsletter", { method: "POST", body: fd });

    toast.success("Thanks! Your email has been submitted.");
    form.reset();
  };

  return (
    <footer className="main-footer footer-three bg-black text-white pt-85">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title Mont">Menus</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/booking">Booking</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services (dynamic from your data) */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title Mont">Services</h4>
              <ul>
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget contact-widget">
              <h4 className="footer-title Mont">Contact</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info-content">
                    <h5>Location</h5>
                    <p>523 Main Street, New York</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <div className="info-content">
                    <h5>Hotline</h5>
                    <p>Call : +012 (345) 6789</p>
                  </div>
                </li>
                <li>
                  <i className="far fa-comment"></i>
                  <div className="info-content">
                    <h5>Email</h5>
                    <Link href="mailto:support@gmail.com">
                      info@glamora.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter with Zod validation + toast */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget newsletter-widget">
              <h4 className="footer-title Mont">Newsletter</h4>

              <form
                onSubmit={handleSubmit}
                method="post"
                className="d-flex flex-column"
              >
                <div className="d-flex">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter Email"
                    required
                    className={`form-control me-2 ${error ? "is-invalid" : ""}`}
                    aria-invalid={error ? "true" : "false"}
                    aria-describedby="newsletter-error"
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
                {error && (
                  <small id="newsletter-error" className="text-danger mt-1">
                    {error}
                  </small>
                )}
              </form>

              <div className="social-style-one pt-40">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="https://www.twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-area pt-25 pb-15">
          <ul className="footer-menu py-5">
            <li>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
          <p>© 2025 Glamora, All Rights Reserved</p>
        </div>
      </div>

      {/* Toaster (you can move this to app/layout.jsx if you already have one) */}
      <Toaster position="top-center" />
    </footer>
  );
}
