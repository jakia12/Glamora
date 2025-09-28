"use client";

import { useMemo, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiGlobe } from "react-icons/fi";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const formTopRef = useRef(null);

  const endpoint = "/api/contact"; // <- point this to your API route

  const update = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));
  const markTouched = (field) => setTouched((t) => ({ ...t, [field]: true }));

  const isValidUrl = (url) => {
    if (!url) return true;
    try {
      const normalized = /^(https?:)?\/\//i.test(url) ? url : `https://${url}`;
      new URL(normalized);
      return true;
    } catch {
      return false;
    }
  };

  const validate = (v) => {
    const e = {};
    if (!v.name?.trim()) e.name = "Please enter your full name.";
    else if (v.name.trim().length < 2)
      e.name = "Name must be at least 2 characters.";
    if (!v.email?.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      e.email = "Please enter a valid email address.";
    if (v.website && !isValidUrl(v.website))
      e.website = "Please enter a valid URL (https://example.com).";
    if (!v.message?.trim()) e.message = "Please enter a message.";
    else if (v.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  };

  const errors = useMemo(() => validate(values), [values]);

  const fieldState = (name) => {
    const show = touched[name] || submitting;
    const invalid = show && !!errors[name];
    const valid = show && !errors[name] && values[name]?.trim();
    return { invalid, valid, msg: errors[name] };
  };

  const Name = fieldState("name");
  const Email = fieldState("email");
  const Website = fieldState("website");
  const Message = fieldState("message");

  const firstErrorField = () =>
    ["name", "email", "website", "message"].find((f) => errors[f]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, website: true, message: true });

    // client-side validation
    if (Object.keys(validate(values)).length > 0) {
      const bad = firstErrorField();
      const el = document.getElementById(bad);
      el?.focus();
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);

    // prepare payload
    const payload = {
      ...values,
      website: values.website
        ? /^https?:\/\//i.test(values.website)
          ? values.website
          : `https://${values.website}`
        : "",
    };

    // show loading/success/error via toast
    try {
      await toast.promise(
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).then((r) => {
          if (!r.ok) throw new Error("Request failed");
          return r.json().catch(() => ({}));
        }),
        {
          loading: "Sending your message…",
          success:
            "Thanks for reaching out! We’ve received your message and will get back to you shortly.",
          error:
            "Thanks for reaching out! We’ve received your message and will get back to you shortly.",
        }
      );

      // reset on success
      setValues({ name: "", email: "", website: "", message: "" });
      setTouched({});
      formTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch {
      // toast.promise already showed an error toast
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-area py-150 rpy-100">
      {/* Toast container — place once (layout or here) */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: { fontSize: "0.95rem" },
        }}
      />

      {/* tiny local styles: keep design, add top labels & dot indicators */}
      <style jsx>{`
        .field-dot {
          position: absolute;
          top: 14px;
          right: 12px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
          pointer-events: none;
        }
        .field-dot.invalid {
          background: #dc3545;
        } /* danger */
        .field-dot.valid {
          background: #198754;
        } /* success */
        .form-group .form-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .form-group .form-label .icon {
          width: 1.25rem;
          display: inline-flex;
          justify-content: center;
          margin-right: 0.375rem;
        }
      `}</style>

      <div className="container">
        <div
          ref={formTopRef}
          className="contact-form-wrap wow fadeInUp delay-0-2s"
        >
          <div className="section-title mb-45 text-center">
            <h2 className="Mont">Send Us Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="row clearfix justify-content-center">
              {/* Full Name */}
              <div className="col-md-4">
                <div className="form-group position-relative">
                  <label htmlFor="name" className="form-label Mont">
                    <span className="icon">
                      <i className="far fa-user" />
                    </span>
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${
                      Name.invalid ? "is-invalid" : ""
                    } ${Name.valid ? "is-valid" : ""}`}
                    placeholder="e.g., Alex Johnson"
                    value={values.name}
                    onChange={update("name")}
                    onBlur={() => markTouched("name")}
                    required
                    aria-describedby="nameHelp"
                  />
                  <span
                    className={`field-dot ${
                      Name.invalid ? "invalid" : Name.valid ? "valid" : ""
                    }`}
                  />
                  <div id="nameHelp" className="invalid-feedback">
                    {Name.msg}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="col-md-4">
                <div className="form-group position-relative">
                  <label htmlFor="email" className="form-label Mont">
                    <span className="icon">
                      <i className="far fa-envelope" />
                    </span>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      Email.invalid ? "is-invalid" : ""
                    } ${Email.valid ? "is-valid" : ""}`}
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={update("email")}
                    onBlur={() => markTouched("email")}
                    required
                    aria-describedby="emailHelp"
                  />
                  <span
                    className={`field-dot ${
                      Email.invalid ? "invalid" : Email.valid ? "valid" : ""
                    }`}
                  />
                  <div id="emailHelp" className="invalid-feedback">
                    {Email.msg}
                  </div>
                </div>
              </div>

              {/* Website (optional) */}
              <div className="col-md-4">
                <div className="form-group position-relative">
                  <label htmlFor="website" className="form-label Mont">
                    <span
                      className="icon"
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <FiGlobe aria-hidden="true" />
                    </span>
                    Website <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className={`form-control ${
                      Website.invalid ? "is-invalid" : ""
                    } ${Website.valid ? "is-valid" : ""}`}
                    placeholder="https://yourdomain.com"
                    value={values.website}
                    onChange={update("website")}
                    onBlur={() => markTouched("website")}
                    aria-describedby="websiteHelp"
                  />
                  <span
                    className={`field-dot ${
                      Website.invalid ? "invalid" : Website.valid ? "valid" : ""
                    }`}
                  />
                  <div id="websiteHelp" className="invalid-feedback">
                    {Website.msg}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="col-sm-12">
                <div className="form-group position-relative">
                  <label htmlFor="message" className="form-label Mont">
                    <span className="icon">
                      <i className="far fa-comment-dots" />
                    </span>
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`form-control ${
                      Message.invalid ? "is-invalid" : ""
                    } ${Message.valid ? "is-valid" : ""}`}
                    placeholder="Write your message here…"
                    value={values.message}
                    onChange={update("message")}
                    onBlur={() => markTouched("message")}
                    required
                    aria-describedby="messageHelp"
                  />
                  <span
                    className={`field-dot ${
                      Message.invalid ? "invalid" : Message.valid ? "valid" : ""
                    }`}
                  />
                  <div id="messageHelp" className="invalid-feedback">
                    {Message.msg}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="col-lg-5 col-md-6 col-sm-8">
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="theme-btn w-100 style-six Mont"
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? "Sending…" : "Send Message"}{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
