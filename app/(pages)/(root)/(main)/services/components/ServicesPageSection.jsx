import Link from "next/link";

const services = [
  {
    img: "/images/services/hair.png",
    icon: "flaticon-cut",
    title: "Hair Cutting",
    href: "/service-details",
    delay: "delay-0-2s",
  },
  {
    img: "/images/services/nail.png",
    icon: "flaticon-nail",
    title: "Nail Polish",
    href: "/service-details",
    delay: "delay-0-4s",
  },
  {
    img: "/images/services/body.png",
    icon: "flaticon-massage-1",
    title: "Body Massage",
    href: "/service-details",
    delay: "delay-0-6s",
  },
  {
    img: "/images/services/spa.png",
    icon: "flaticon-relax",
    title: "Spa & Foot",
    href: "/service-details",
    delay: "delay-0-8s",
  },
  {
    img: "/images/services/haircl.png",
    icon: "flaticon-beauty-treatment-1",
    title: "Hair Colors",
    href: "/service-details",
    delay: "delay-1-0s",
  },
  {
    img: "/images/services/brow.png",
    icon: "flaticon-liner",
    title: "Brow Polish",
    href: "/service-details",
    delay: "delay-1-2s",
  },
];

export default function ServicesPageSection() {
  return (
    <section className="services-page pt-140 rpt-90 pb-90 rpb-40">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-65">
              {/* <img
                className="bg-image"
                src="/assets/images/shapes/service-bg.jpg"
                alt="Leaf"
              /> */}
              <span className="sub-title Mont" style={{ color: "#D6B981" }}>
                What We Offer
              </span>
              <h3 className="para">
                At Glamora, we offer a range of premium beauty and spa services
                designed to help you relax, rejuvenate, and feel your absolute
                best.
              </h3>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row justify-content-center">
          {services.map((s, idx) => (
            <div key={idx} className="col-lg-4 col-sm-6">
              <div className={`service-item wow fadeInUp ${s.delay}`}>
                <img src={s.img} alt="Service" />
                <div className="service-content">
                  <i className={s.icon}></i>
                  <h5>
                    <Link href={s.href}>{s.title}</Link>
                  </h5>
                  <Link href={s.href} className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* /Services Grid */}
      </div>
    </section>
  );
}
