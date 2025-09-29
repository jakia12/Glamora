export const metadata = {
  title: "Terms & Conditions | Glamora",
  description:
    "The terms that govern appointments, payments, cancellations, patch tests, promotions, and use of the Glamora website and services.",
};

const LAST_UPDATED = "28 September 2025";

export default function TermsPage() {
  return (
    <main className="container py-4 py-lg-5">
      <div className="row g-4 g-lg-5">
        {/* LEFT: Content */}
        <div className="col-12 col-lg-8">
          <header className="mb-4">
            <h1 className="display-6 fw-bold">Terms & Conditions</h1>
            <div className="text-secondary">Last updated: {LAST_UPDATED}</div>
          </header>

          <section id="intro" className="mb-4">
            <p>
              Welcome to Glamora. These Terms &amp; Conditions (“Terms”) govern
              your access to and use of our website, online booking, and salon
              services (the “Services”). By booking or using our Services, you
              agree to these Terms. If you do not agree, please refrain from
              using the Services.
            </p>
            <p className="small text-secondary">
              Note: This page is provided for general information only and does
              not constitute legal advice. For specific guidance, consult a
              qualified professional in your jurisdiction.
            </p>
          </section>

          <hr className="my-4" />

          <section id="appointments" className="mb-4">
            <h2 className="h4">1) Appointments &amp; Bookings</h2>
            <ul className="mb-0">
              <li>
                Bookings can be made online, by phone, or in-salon. Please
                provide accurate contact details so we can confirm or update you
                about your appointment.
              </li>
              <li>
                Certain services (e.g., color, keratin, lash lifts) may require
                a <strong>consultation</strong> or <strong>patch test</strong>{" "}
                at least 24–48 hours before your appointment.
              </li>
              <li>
                If you are booking for another person, you confirm you have
                their consent to share their details with us.
              </li>
            </ul>
          </section>

          <section id="cancellations" className="mb-4">
            <h2 className="h4">
              2) Cancellations, Rescheduling &amp; No-Shows
            </h2>
            <ul className="mb-0">
              <li>
                We kindly request <strong>24 hours’ notice</strong> to cancel or
                reschedule. Late changes may incur a fee of up to{" "}
                <strong>50% of the service value</strong>.
              </li>
              <li>
                <strong>No-shows</strong> may be charged up to{" "}
                <strong>100%</strong> of the service value and may require full
                prepayment for future bookings.
              </li>
              <li>
                If you arrive late, we will do our best to accommodate you;
                however, your service may be shortened or rebooked to respect
                following clients.
              </li>
            </ul>
          </section>

          <section id="health" className="mb-4">
            <h2 className="h4">3) Patch Tests, Allergies &amp; Health</h2>
            <ul className="mb-0">
              <li>
                Chemical/color services may require a{" "}
                <strong>patch test</strong> at least 24–48 hours prior. Refusing
                a patch test may result in your appointment being declined.
              </li>
              <li>
                Inform us of any{" "}
                <strong>
                  allergies, sensitivities, medications, pregnancy
                </strong>
                , or medical conditions before treatments. We may adapt,
                postpone, or refuse a service for safety.
              </li>
              <li>
                If irritation or adverse reaction occurs, seek medical advice
                and contact us as soon as possible.
              </li>
            </ul>
          </section>

          <section id="pricing" className="mb-4">
            <h2 className="h4">4) Pricing, Deposits &amp; Payments</h2>
            <ul className="mb-0">
              <li>
                Prices shown online or in-salon are subject to change. Final
                quotes may vary based on hair length/density, product use, time,
                or requested finish.
              </li>
              <li>
                A <strong>deposit</strong> may be required to secure
                appointments. Deposits are applied to your bill on the day and
                are <strong>non-refundable</strong> for late cancellations or
                no-shows.
              </li>
              <li>
                We accept common payment methods (cash/cards/approved digital
                wallets). Tips are optional and appreciated.
              </li>
            </ul>
          </section>

          <section id="guarantee" className="mb-4">
            <h2 className="h4">5) Satisfaction &amp; Redo Policy</h2>
            <ul className="mb-0">
              <li>
                If something isn’t quite right, notify us within{" "}
                <strong>7 days</strong> of your appointment. We’ll assess and,
                where appropriate, offer a complimentary adjustment (redo) with
                the same stylist/technician.
              </li>
              <li>
                A redo does not cover a change of mind or new services not
                discussed during the original consultation.
              </li>
            </ul>
          </section>

          <section id="giftcards" className="mb-4">
            <h2 className="h4">6) Gift Cards, Packages &amp; Memberships</h2>
            <ul className="mb-0">
              <li>
                Gift cards are non-refundable and valid until the printed expiry
                date. Lost or stolen cards cannot always be replaced.
              </li>
              <li>
                Packages/memberships are non-transferable and may have usage
                windows and blackout dates. See specific terms at purchase.
              </li>
            </ul>
          </section>

          <section id="promos" className="mb-4">
            <h2 className="h4">7) Promotions &amp; Discounts</h2>
            <ul className="mb-0">
              <li>
                Promotions cannot usually be combined unless specified. Each
                offer is subject to availability and may change or end without
                notice.
              </li>
              <li>
                To redeem, mention the promotion when booking and show any
                required code in-salon.
              </li>
            </ul>
          </section>

          <section id="minors" className="mb-4">
            <h2 className="h4">8) Children &amp; Young Clients</h2>
            <ul className="mb-0">
              <li>
                Clients under <strong>16</strong> must be accompanied by a
                parent/guardian for consultations and some treatments.
              </li>
              <li>
                For safety, young children must be supervised at all times in
                the salon.
              </li>
            </ul>
          </section>

          <section id="belongings" className="mb-4">
            <h2 className="h4">9) Personal Belongings</h2>
            <p className="mb-0">
              We are not responsible for loss or damage to personal items.
              Please keep valuables with you and wear protective gowns as
              directed.
            </p>
          </section>

          <section id="retail" className="mb-4">
            <h2 className="h4">10) Retail Products &amp; Returns</h2>
            <ul className="mb-0">
              <li>
                We accept unopened retail returns within <strong>7 days</strong>{" "}
                with proof of purchase, unless defective by manufacturer.
              </li>
              <li>
                For defective items, we will repair, replace, or refund in line
                with consumer law.
              </li>
            </ul>
          </section>

          <section id="online" className="mb-4">
            <h2 className="h4">11) Website Use &amp; Intellectual Property</h2>
            <ul className="mb-0">
              <li>
                All website content (text, images, logos) is owned by or
                licensed to Glamora. You may not copy, modify, or distribute
                without permission.
              </li>
              <li>
                Do not misuse the site (e.g., attempt to breach security, scrape
                data, or post unlawful content).
              </li>
            </ul>
          </section>

          <section id="ugc" className="mb-4">
            <h2 className="h4">12) Reviews, Photos &amp; Social</h2>
            <ul className="mb-0">
              <li>
                With your consent, we may capture “before/after” images for
                training or marketing. You can withdraw consent at any time.
              </li>
              <li>
                If you tag or share content featuring our work, you grant us a
                non-exclusive right to repost with credit to you.
              </li>
            </ul>
          </section>

          <section id="liability" className="mb-4">
            <h2 className="h4">13) Liability &amp; Disclaimers</h2>
            <ul className="mb-0">
              <li>
                To the fullest extent permitted by law, Glamora is not liable
                for indirect or consequential loss. Nothing limits liability
                where unlawful to do so.
              </li>
              <li>
                You are responsible for following aftercare advice to maintain
                results.
              </li>
            </ul>
          </section>

          <section id="force" className="mb-4">
            <h2 className="h4">14) Force Majeure</h2>
            <p className="mb-0">
              We are not responsible for delays or failures caused by events
              beyond our reasonable control (e.g., power outages, extreme
              weather, public health directives).
            </p>
          </section>

          <section id="changes" className="mb-4">
            <h2 className="h4">15) Changes to These Terms</h2>
            <p className="mb-0">
              We may update these Terms from time to time. The “Last updated”
              date reflects the most recent changes. Continued use of the
              Services constitutes acceptance of the new Terms.
            </p>
          </section>

          <section id="law" className="mb-4">
            <h2 className="h4">16) Governing Law</h2>
            <p className="mb-0">
              These Terms are governed by the laws of{" "}
              <strong>[Your Jurisdiction]</strong>. You agree to the exclusive
              jurisdiction of the courts in <strong>[Your Jurisdiction]</strong>{" "}
              for any disputes.
            </p>
          </section>

          <section id="contact" className="mb-2">
            <h2 className="h4">17) Contact</h2>
            <p className="mb-0">
              Questions? Email us at{" "}
              <a href="mailto:info@glamora.com">info@glamora.com</a>
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
                    ["intro", "Introduction"],
                    ["appointments", "Appointments"],
                    ["cancellations", "Cancellations & No-Shows"],
                    ["health", "Patch Tests & Health"],
                    ["pricing", "Pricing & Payments"],
                    ["guarantee", "Satisfaction & Redo"],
                    ["giftcards", "Gift Cards & Packages"],
                    ["promos", "Promotions"],
                    ["minors", "Children & Young Clients"],
                    ["belongings", "Belongings"],
                    ["retail", "Retail & Returns"],
                    ["online", "Website & IP"],
                    ["ugc", "Reviews & Social"],
                    ["liability", "Liability"],
                    ["force", "Force Majeure"],
                    ["changes", "Changes"],
                    ["law", "Governing Law"],
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
