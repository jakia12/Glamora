import Link from "next/link";

const offers = [
  { icon: "flaticon-relax", title: "Body Relax", delay: "delay-0-2s" },
  { icon: "flaticon-beauty", title: "Facials", delay: "delay-0-4s" },
  { icon: "flaticon-massage", title: "Massages", delay: "delay-0-6s" },
  { icon: "flaticon-cbd-oil", title: "Oil Therapy", delay: "delay-0-8s" },
  { icon: "flaticon-spa-1", title: "Sauna", delay: "delay-1-0s" },
  { icon: "flaticon-hair-removal", title: "Cosmetology", delay: "delay-1-2s" },
];

export default function OfferSection() {
  return (
    <section className="offer-section text-center rel z-1 pt-140 rpt-90 pb-120 rpb-70">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <div className="section-title mb-65">
              <span className="bg-text">Offer</span>
              <span className="sub-title">Who We Offer</span>
              <h2>Quality &amp; Natural Spa Salon</h2>
            </div>
          </div>
        </div>

        {/* Offer Items */}
        <div className="row justify-content-center">
          {offers.map((offer, i) => (
            <div key={i} className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link
                href="/service-details"
                className={`offer-item wow fadeInUp ${offer.delay}`}
              >
                <i className={offer.icon}></i>
                <h5>{offer.title}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
