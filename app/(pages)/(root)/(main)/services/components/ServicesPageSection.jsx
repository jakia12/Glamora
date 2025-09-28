import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesPageSection() {
  const delayClass = (i) => {
    // fallback sequence like your old data: delay-0-2s, delay-0-4s, ...
    const steps = [
      "delay-0-2s",
      "delay-0-4s",
      "delay-0-6s",
      "delay-0-8s",
      "delay-1-0s",
      "delay-1-2s",
    ];
    return steps[i % steps.length];
  };
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
          {services.map((s) => (
            <div key={s.slug} className="col-lg-4 col-sm-6">
              <div
                className={`service-item wow fadeInUp ${s.delay || ""} ${
                  !s.delay ? delayClass(services.indexOf(s)) : ""
                }`}
              >
                {/* keep your old img paths exactly */}
                <img src={s.img} alt={s.title} />
                {/* Or, if you prefer Next Image:
      <div className="ratio ratio-4x3">
        <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
      </div>
      */}
                <div className="service-content">
                  {s.icon && <i className={s.icon} />}
                  <h5>
                    <Link href={`/services/${s.slug}`}>{s.title}</Link>
                  </h5>
                  <Link href={`/services/${s.slug}`} className="read-more">
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
