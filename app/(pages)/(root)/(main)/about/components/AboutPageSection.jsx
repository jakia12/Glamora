export default function AboutPageSection() {
  return (
    <section className="about-page-section rel z-[-1] pt-140 rpt-90">
      <div className="container">
        {/* Top Row */}
        <div className="row mb-55">
          <div className="col-lg-5">
            <div className="about-page-content wow fadeInLeft delay-0-2s">
              <div className="section-title mb-30">
                <span className="bg-text danR">about</span>
                <span className="sub-title Mont" style={{ color: "#D6B981" }}>
                  Who We Are
                </span>
                <h2 className="Mont">Quality &amp; Natural Beauty Salon</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-page-right-text wow fadeInRight delay-0-2s">
              <p className="para">
                At Glamora, we believe beauty is more than appearance—it’s an
                experience of relaxation, confidence, and care. Our mission is
                to bring out your natural glow with treatments that combine
                luxury, comfort, and expertise. From soothing facials and
                rejuvenating spa therapies to professional hair and beauty
                services, our team of skilled specialists is dedicated to
                creating an environment where you can truly unwind.
              </p>
              <p className="para">
                With years of experience, premium products, and a passion for
                perfection, we make every visit a moment of self-care you’ll
                treasure.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row">
          <div className="col-md-6">
            <div className="about-page-left mb-30 wow fadeInUp delay-0-2s">
              <img
                src="/images/about/about-page-left.webp"
                alt="About"
                className="abtImg"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-page-left mb-30 wow fadeInUp delay-0-2s">
              <img
                src="/images/about/about-page-right.webp"
                alt="About"
                className="abtImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
