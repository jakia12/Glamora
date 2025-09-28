"use client";

import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiGlobe } from "react-icons/fi";
import { z } from "zod";

// Zod schema
const ContactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  website: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v === "" ? undefined : v))
    .refine(
      (val) => {
        if (!val) return true;
        try {
          const withProto = /^(https?:)?\/\//i.test(val)
            ? val
            : `https://${val}`;
          new URL(withProto);
          return true;
        } catch {
          return false;
        }
      },
      { message: "Please enter a valid URL (https://example.com)." }
    ),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters."),
});

export default function ContactForm() {
  const formRef = useRef(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [touched, setTouched] = useState({}); // { name?: true, email?: true, website?: true, message?: true }
  const [errors, setErrors] = useState({}); // { name?: string, email?: string, website?: string, message?: string }

  // validate everything and store per-field errors
  const validateAll = (v) => {
    const parsed = ContactSchema.safeParse(v);
    if (parsed.success) {
      setErrors({});
      return { ok: true, data: parsed.data };
    } else {
      const fe = parsed.error.flatten().fieldErrors;
      const next = {
        name: fe.name?.[0],
        email: fe.email?.[0],
        website: fe.website?.[0],
        message: fe.message?.[0],
      };
      setErrors(next);
      return { ok: false, errors: next };
    }
  };

  // handle live change
  const onChange = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (!touched[field]) setTouched((t) => ({ ...t, [field]: true }));
    validateAll(next); // live validation
  };

  const onBlur = (field) => () => {
    if (!touched[field]) setTouched((t) => ({ ...t, [field]: true }));
    validateAll(values);
  };

  // helpers for valid/invalid classes
  const isInvalid = (f) => !!touched[f] && !!errors[f];
  const isValid = (f) => {
    if (!touched[f]) return false;
    if (f === "website") {
      // optional: only show green when user typed something valid
      return values.website.trim() !== "" && !errors.website;
    }
    // required fields: green when non-empty & no errors
    return values[f].trim() !== "" && !errors[f];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // mark all touched so errors show if any
    setTouched({ name: true, email: true, website: true, message: true });

    const result = validateAll(values);
    if (!result.ok) {
      // focus first invalid
      const order = ["name", "email", "website", "message"];
      const first = order.find((f) => result.errors?.[f]);
      if (first) {
        const el = document.getElementById(first);
        el?.focus();
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // success toast & reset — no API calls
    const firstName = result.data.name.split(" ")[0] || "there";
    toast.success(
      `Thanks, ${firstName}! Your message has been sent. We’ll get back to you shortly.`
    );
    setErrors({});
    setTouched({});
    setValues({ name: "", email: "", website: "", message: "" });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="contact-form-area py-150 rpy-100">
      {/* Toast container (remove if you already have one globally) */}
      <Toaster
        position="top-center"
        toastOptions={{ duration: 5000, style: { fontSize: "0.95rem" } }}
      />

      <div className="container">
        <div
          ref={formRef}
          className="contact-form-wrap wow fadeInUp delay-0-2s"
        >
          <div className="section-title mb-45 text-center">
            <h2 className="Mont">Send Us Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="row clearfix justify-content-center">
              {/* Full Name */}
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="name" className="form-label Mont">
                    <span className="me-2">
                      <i className="far fa-user" />
                    </span>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${
                      isInvalid("name") ? "is-invalid" : ""
                    } ${isValid("name") ? "is-valid" : ""}`}
                    placeholder="e.g., Alex Johnson"
                    value={values.name}
                    onChange={onChange("name")}
                    onBlur={onBlur("name")}
                  />
                  {isInvalid("name") && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="email" className="form-label Mont">
                    <span className="me-2">
                      <i className="far fa-envelope" />
                    </span>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      isInvalid("email") ? "is-invalid" : ""
                    } ${isValid("email") ? "is-valid" : ""}`}
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={onChange("email")}
                    onBlur={onBlur("email")}
                  />
                  {isInvalid("email") && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>

              {/* Website (optional) */}
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="website" className="form-label Mont">
                    <span
                      className="me-2"
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
                      isInvalid("website") ? "is-invalid" : ""
                    } ${isValid("website") ? "is-valid" : ""}`}
                    placeholder="https://yourdomain.com"
                    value={values.website}
                    onChange={onChange("website")}
                    onBlur={onBlur("website")}
                  />
                  {isInvalid("website") && (
                    <div className="invalid-feedback">{errors.website}</div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="message" className="form-label Mont">
                    <span className="me-2">
                      <i className="far fa-comment-dots" />
                    </span>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`form-control ${
                      isInvalid("message") ? "is-invalid" : ""
                    } ${isValid("message") ? "is-valid" : ""}`}
                    placeholder="Write your message here…"
                    value={values.message}
                    onChange={onChange("message")}
                    onBlur={onBlur("message")}
                  />
                  {isInvalid("message") && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="col-lg-5 col-md-6 col-sm-8">
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="theme-btn w-100 style-six Mont"
                  >
                    Send Message <i className="fas fa-long-arrow-alt-right"></i>
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
