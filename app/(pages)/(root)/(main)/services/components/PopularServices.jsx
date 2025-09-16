import Link from "next/link";

const popularServices = [
  { icon: "", title: "Body Relax", href: "/service-details" },
  { icon: "flaticon-beauty", title: "Facials", href: "/service-details" },
  { icon: "flaticon-massage", title: "Massages", href: "/service-details" },
  { icon: "flaticon-cbd-oil", title: "Oil Therapy", href: "/service-details" },
  { icon: "flaticon-sauna", title: "Sauna", href: "/service-details" },
  {
    icon: "flaticon-hair-removal",
    title: "Cosmetology",
    href: "/service-details",
  },
];

export default function PopularServices() {
  return (
    <section className="popular-services rel z-1 py-150 rpy-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="service-left rmb-55 wow fadeInLeft delay-0-2s">
              <img src="/images/services/pserv.jpg" alt="Services" />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="popular-service-wrap wow fadeInRight delay-0-2s">
              <div className="section-title mb-50">
                <span className="bg-text danR">offers</span>
                <span className="sub-title Mont">Popular Service</span>
                <h2 className="Mont">Beauty Treatments</h2>
              </div>

              {/* Service Grid */}
              <div className="row">
                {popularServices.map((s, i) => (
                  <div
                    key={i}
                    className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small"
                  >
                    <Link href={s.href} className="popular-service-item">
                      <i className={s.icon}></i>
                      <h5>{s.title}</h5>
                    </Link>
                  </div>
                ))}
              </div>

              <Link
                href="/booking"
                className="theme-btn mt-30 z-[999999999] cursor-pointer"
              >
                make appointment <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      {/* <img
        src="/assets/images/shapes/service-white-leaf.jpg"
        alt="Shape"
        className="white-leaf"
      />
      <img
        src="/assets/images/shapes/service-color-leaf.jpg"
        alt="Shape"
        className="color-leaf"
      />
      <img
        src="/assets/images/shapes/service-circle.jpg"
        alt="Shape"
        className="circle"
      /> */}
    </section>
  );
}
