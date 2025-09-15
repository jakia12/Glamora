import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="about-page pb-120 pt-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9">
            <div className="section-title text-center mb-65">
              <span className="bg-text danR">Services</span>
              <span className="sub-title Mont">Our Services</span>
              <h2 className="Mont">
                Popular Services We Provide For Customers
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="category-section">
        {/* Item 1 */}
        <div className="category-item style-two wow fadeInUp delay-0-2s">
          <img
            src="/images/flaticon/nail.png"
            alt=""
            style={{ width: "110px", marginBottom: "25px" }}
          />
          <div className="category-title">
            <span className="bg-text danR">Category</span>
            <h4>
              <Link href="/service-details " className="Mont">
                Nail Polish
              </Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href="/service-details" className="read-more">
            read more <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>

        {/* Item 2 */}
        <div className="category-item style-two wow fadeInUp delay-0-4s">
          <img
            src="/images/flaticon/eye.png"
            alt=""
            style={{ width: "110px", marginBottom: "25px" }}
          />
          <div className="category-title">
            <span className="bg-text danR">Category</span>
            <h4>
              <Link href="/service-details" className="Mont">
                Brow Polish
              </Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href="/service-details" className="read-more">
            read more <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>

        {/* Item 3 */}
        <div className="category-item style-two wow fadeInUp delay-0-6s">
          <img
            src="/images/flaticon/hair.png"
            alt=""
            style={{ width: "110px", marginBottom: "25px" }}
          />
          <div className="category-title">
            <span className="bg-text danR">Category</span>
            <h4>
              <Link href="/service-details" className="Mont">
                Hair Dresser
              </Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href="/service-details" className="read-more">
            read more <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>

        {/* Item 4 */}
        <div className="category-item style-two wow fadeInUp delay-0-8s">
          <img
            src="/images/flaticon/foot.png"
            alt=""
            style={{ width: "110px", marginBottom: "25px" }}
          />
          <div className="category-title">
            <span className="bg-text danR">Category</span>
            <h4>
              <Link href="/service-details" className="Mont">
                Foot Massage
              </Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href="/service-details" className="read-more">
            read more <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>

        {/* Item 5 */}
        <div className="category-item style-two wow fadeInUp delay-1-0s">
          <img
            src="/images/flaticon/cosm.png"
            alt=""
            style={{ width: "110px", marginBottom: "25px" }}
          />
          <div className="category-title">
            <span className="bg-text danR">Category</span>
            <h4>
              <Link href="/service-details" className="Mont">
                Cosmetics
              </Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href="/service-details" className="read-more">
            read more <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
