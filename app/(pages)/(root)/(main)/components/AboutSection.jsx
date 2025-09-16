import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section pt-150 rpt-100 z-[-1]">
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="about-left rmb-55 wow fadeInLeft delay-0-2s z-[-1]">
              <img src="/images/abt.webp" alt="About" className="z-[-1]" />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight delay-0-2s">
              <div className="section-title mb-30">
                <span className="bg-text danR">about</span>
                <span className="sub-title Mont">Who We Are</span>
                <h2 className="Mont ttl">Quality &amp; Natural Beauty Salon</h2>
              </div>

              <p style={{ fontSize: "18px" }}>
                At our salon, beauty meets wellness. We believe true beauty
                shines when it’s nurtured naturally, so we bring you treatments
                that blend professional care with pure, organic products. Every
                service is designed not only to enhance your look but to
                rejuvenate your mind and body.
              </p>

              <ul className="list-style-one pt-20 pb-25">
                <li>Natural Beauty Salon Services</li>
                <li>Professional Women’s Spa Treatments</li>
                <li>Luxurious Hair & Skin Care Therapies</li>
              </ul>

              <Link href="/about" className="theme-btn style-two">
                Read More <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
