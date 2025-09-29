export const metadata = {
  title: "Privacy Policy | Glamora",
  description:
    "How Glamora collects, uses, shares, and protects your personal data across bookings, communications, marketing, cookies, and analytics.",
};

const LAST_UPDATED = "28 September 2025";

export default function PrivacyPage() {
  return (
    <main className="container py-4 py-lg-5">
      <div className="row g-4 g-lg-5">
        {/* LEFT: Content */}
        <div className="col-12 col-lg-8">
          <header className="mb-4">
            <h1 className="display-6 fw-bold">Privacy Policy</h1>
            <div className="text-secondary">Last updated: {LAST_UPDATED}</div>
          </header>

          <section id="scope" className="mb-4">
            <p>
              This Privacy Policy describes how Glamora (“we”, “us”, “our”)
              collects, uses, shares, and protects your information when you
              visit our website, book online, or receive our salon services (the
              “Services”).
            </p>
            <p className="small text-secondary">
              This policy is intended to be clear and practical, but it is not
              legal advice. Please adapt to your local requirements and consult
              a professional if needed.
            </p>
          </section>

          <hr className="my-4" />

          <section id="info-we-collect" className="mb-4">
            <h2 className="h4">1) Information We Collect</h2>
            <ul className="mb-0">
              <li>
                <strong>Identity &amp; Contact:</strong> name, email, phone;
                optional social handles.
              </li>
              <li>
                <strong>Booking Details:</strong> services requested, dates,
                stylist preferences, notes you provide (e.g., hair history, skin
                sensitivities).
              </li>
              <li>
                <strong>Payment:</strong> we use third-party processors for card
                payments. We do not store full card numbers on our servers.
              </li>
              <li>
                <strong>Communications:</strong> emails, messages, and feedback
                you send us.
              </li>
              <li>
                <strong>Marketing Preferences:</strong> your opt-in choices for
                emails/SMS.
              </li>
              <li>
                <strong>Device &amp; Usage:</strong> cookie IDs, IP address,
                browser type, pages viewed, and interaction logs for analytics
                and security.
              </li>
              <li>
                <strong>Media:</strong> with your consent, before/after photos
                of services.
              </li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-4">
            <h2 className="h4">2) How We Use Your Information</h2>
            <ul className="mb-0">
              <li>
                To manage appointments, provide services, and process payments.
              </li>
              <li>
                To communicate confirmations, reminders, updates, and support.
              </li>
              <li>To personalize recommendations and improve our Services.</li>
              <li>
                To send marketing messages when you’ve opted in (you can opt out
                any time).
              </li>
              <li>
                For safety, security, fraud prevention, and to comply with legal
                obligations.
              </li>
            </ul>
          </section>

          <section id="legal-bases" className="mb-4">
            <h2 className="h4">3) Legal Bases (where applicable)</h2>
            <ul className="mb-0">
              <li>
                <strong>Consent</strong> — e.g., for marketing or photos.
              </li>
              <li>
                <strong>Contract</strong> — to deliver the services you booked.
              </li>
              <li>
                <strong>Legitimate Interests</strong> — improve services,
                prevent fraud.
              </li>
              <li>
                <strong>Legal Obligation</strong> — accounting, record-keeping,
                regulatory requests.
              </li>
            </ul>
          </section>

          <section id="sharing" className="mb-4">
            <h2 className="h4">4) How We Share Information</h2>
            <ul className="mb-0">
              <li>
                <strong>Service Providers:</strong> booking platforms, payment
                processors, email/SMS, analytics, web hosting — only what’s
                necessary to operate our Services.
              </li>
              <li>
                <strong>Team Members:</strong> staff who need access to serve
                you.
              </li>
              <li>
                <strong>Legal &amp; Compliance:</strong> if required by law,
                regulation, or to protect rights and safety.
              </li>
              <li>
                <strong>Business Changes:</strong> in a merger, acquisition, or
                asset transfer, data may be part of the transaction (subject to
                this Policy).
              </li>
            </ul>
          </section>

          <section id="cookies" className="mb-4">
            <h2 className="h4">5) Cookies &amp; Analytics</h2>
            <p>
              We use cookies and similar technologies to keep you signed in,
              remember preferences, and measure site performance. You can
              control cookies via your browser settings and (where implemented)
              our cookie banner.
            </p>
            <ul className="mb-0">
              <li>
                <strong>Essential</strong> — required for site functionality and
                security.
              </li>
              <li>
                <strong>Performance/Analytics</strong> — to understand traffic
                and improve UX.
              </li>
              <li>
                <strong>Marketing</strong> — only if you consent, to show
                relevant offers.
              </li>
            </ul>
          </section>

          <section id="retention" className="mb-4">
            <h2 className="h4">6) Data Retention</h2>
            <p className="mb-0">
              We keep personal data only as long as necessary to provide our
              Services and meet legal obligations. For example, booking records
              may be retained for several years for accounting and service
              history; marketing data is kept until you unsubscribe or we delete
              inactive lists.
            </p>
          </section>

          <section id="security" className="mb-4">
            <h2 className="h4">7) Security</h2>
            <p className="mb-0">
              We implement reasonable technical and organizational measures to
              protect your data. No method of transmission or storage is 100%
              secure, but we work to safeguard your information and review
              practices regularly.
            </p>
          </section>

          <section id="your-rights" className="mb-4">
            <h2 className="h4">8) Your Choices &amp; Rights</h2>
            <ul className="mb-0">
              <li>
                Access, correct, or delete your personal data (subject to legal
                limits).
              </li>
              <li>Withdraw consent (e.g., marketing) at any time.</li>
              <li>
                Object to or restrict certain processing where applicable.
              </li>
              <li>
                Request a copy of your data in a portable format where feasible.
              </li>
            </ul>
          </section>

          <section id="children" className="mb-4">
            <h2 className="h4">9) Children</h2>
            <p className="mb-0">
              Our website is not directed to children. In-salon services for
              clients under 16 require a parent/guardian’s involvement and
              consent.
            </p>
          </section>

          <section id="intl" className="mb-4">
            <h2 className="h4">10) International Transfers</h2>
            <p className="mb-0">
              If your information is transferred outside your country, we take
              reasonable steps to ensure appropriate safeguards are in place in
              accordance with applicable law.
            </p>
          </section>

          <section id="updates" className="mb-4">
            <h2 className="h4">11) Changes to This Policy</h2>
            <p className="mb-0">
              We may update this Policy from time to time. The “Last updated”
              date indicates the latest version. Significant changes will be
              highlighted on this page.
            </p>
          </section>

          <section id="contact" className="mb-2">
            <h2 className="h4">12) Contact Us</h2>
            <p className="mb-0">
              To exercise your rights or ask questions, contact us at{" "}
              <a href="mailto:info@glamora.com">info@glamora.com</a>{" "}
            </p>
          </section>
        </div>

        {/* RIGHT: Sticky TOC */}
        <aside className="col-12 col-lg-4">
          <div className="sticky-lg-top" style={{ top: 88 }}>
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="card-title mb-3">On this page</h5>
                <ul className="list-unstyled mb-0 small">
                  {[
                    ["scope", "Overview"],
                    ["info-we-collect", "Information We Collect"],
                    ["how-we-use", "How We Use It"],
                    ["legal-bases", "Legal Bases"],
                    ["sharing", "Sharing"],
                    ["cookies", "Cookies & Analytics"],
                    ["retention", "Data Retention"],
                    ["security", "Security"],
                    ["your-rights", "Your Rights"],
                    ["children", "Children"],
                    ["intl", "International Transfers"],
                    ["updates", "Changes"],
                    ["contact", "Contact"],
                  ].map(([id, label]) => (
                    <li key={id} className="mb-2">
                      <a
                        className="link-dark text-decoration-none"
                        href={`#${id}`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
