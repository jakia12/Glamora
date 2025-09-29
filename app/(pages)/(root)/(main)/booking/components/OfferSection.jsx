import { services } from "@/data/services";
import Link from "next/link";

export default function OfferSection() {
  return (
    <section className="offer-section text-center rel  pt-140 rpt-90 pb-120 rpb-70 zndx">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <div className="section-title mb-65">
              <span className="bg-text danR">Offer</span>
              <span className="sub-title Mont">Who We Offer</span>
              <h2 className="Mont">Quality &amp; Natural Spa Salon</h2>
            </div>
          </div>
        </div>

        {/* Offer Items */}
        <div className="row justify-content-center">
          {services.map((s, i) => (
            <div key={i} className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link
                href={`/services/${s.slug}`}
                className={`offer-item wow fadeInUp `}
              >
                {/* <i className={offer.icon}></i> */}
                <h5>{s.title}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
