import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="features-section rel z-1 pt-150 rpt-100">
      <div className="container-fluid">
        <div className="row">
          {/* Left Image */}
          <div className="col-xl-3 align-self-end">
            <div className="features-image left-image wow fadeInDown delay-0-2s">
              <img src="/images/feature-left.webp" alt="Feature" />
            </div>
          </div>

          {/* Middle Content */}
          <div className="col-xl-6">
            <div className="features-section-content">
              <div className="section-title text-center mb-15">
                <span className="bg-text danR">Features</span>
                <span className="sub-title Mont">What We Do</span>
                <h2 className="Mont">We provide Natural Treatments</h2>
              </div>

              <div className="features-item-wrap pb-150">
                {/* Feature Item 1 */}
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="/images/flaticon/laser.png"
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="feature-content">
                    <h4 className="Mont">
                      <Link href="/service-details">Clinical Treatments</Link>
                    </h4>
                    <span>Organic Modern Treatments</span>
                  </div>
                </div>

                {/* Feature Item 2 */}
                <div className="feature-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <img
                      src="/images/flaticon/relax.png"
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="feature-content">
                    <h4 className="Mont">
                      <Link href="/service-details">Toxins Free</Link>
                    </h4>
                    <span>Organic Modern Treatments</span>
                  </div>
                </div>

                {/* Feature Item 3 */}
                <div className="feature-item wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <img
                      src="/images/flaticon/spa.png"
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="feature-content">
                    <h4 className="Mont">
                      <Link href="/service-details">Organic Products</Link>
                    </h4>
                    <span>Organic Modern Treatments</span>
                  </div>
                </div>

                {/* Feature Item 4 */}
                <div className="feature-item wow fadeInUp delay-0-8s">
                  <div className="icon">
                    <img
                      src="/images/flaticon/hand.png"
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="feature-content">
                    <h4 className="Mont">
                      <Link href="/service-details">No Side Affects</Link>
                    </h4>
                    <span>Organic Modern Treatments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-xl-3">
            <div className="features-image right-image wow fadeInUp delay-0-2s">
              <img src="/images/feature-right.webp" alt="Feature" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Leaf */}
      {/* <div className="features-leaf">
        <img src="/images/leaf.png" alt="Leaf" />
      </div> */}
    </section>
  );
}
