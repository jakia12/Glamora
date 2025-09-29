import Link from "next/link";

export default function CategorySection() {
  return (
    <section
      className="category-section"
      style={{ paddingTop: "90px", paddingBottom: "40px" }}
    >
      {/* Item 1 */}
      <div className="category-item bg-butter wow fadeInUp delay-0-2s">
        <img
          src="/images/flaticon/nail.png"
          alt=""
          style={{ width: "115px" }}
        />
        <div className="category-title">
          <span className="bg-text danR">Category</span>
          <h4 style={{ marginTop: "30px" }} className="Mont">
            <Link href="/services">Nail Polish</Link>
          </h4>
        </div>
        <p>
          Pamper your nails with our wide range of luxurious colors and
          long-lasting finishes. From classic elegance to bold statements, we
          ensure your nails always make an impression.
        </p>
        <Link href="/services" className="read-more">
          Learn More <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
        <div className="for-border"></div>
      </div>

      {/* Item 2 */}
      <div className="category-item bg-light-gray wow fadeInUp delay-0-4s">
        <img src="/images/flaticon/eye.png" alt="" style={{ width: "115px" }} />
        <div className="category-title">
          <span className="bg-text danR">Category</span>
          <h4 style={{ marginTop: "30px" }} className="Mont">
            <Link href="/services">Brow Polish</Link>
          </h4>
        </div>
        <p>
          Enhance your natural beauty with perfectly shaped and polished brows.
          Our experts craft a look that highlights your features and adds
          confidence to your everyday style.
        </p>
        <Link href="/services" className="read-more">
          Learn More <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
        <div className="for-border"></div>
      </div>

      {/* Item 3 */}
      <div className="category-item bg-butter wow fadeInUp delay-0-6s">
        <img
          src="/images/flaticon/hair.png"
          alt=""
          style={{ width: "115px" }}
        />
        <div className="category-title">
          <span className="bg-text danR">Category</span>
          <h4 style={{ marginTop: "30px" }} className="Mont">
            <Link href="/services">Hair Dresser</Link>
          </h4>
        </div>
        <p>
          Step into style with our professional hairdressing services. Whether
          it’s a fresh cut, a glamorous blowout, or a complete transformation,
          we make every strand shine.
        </p>
        <Link href="/services" className="read-more">
          Learn More <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
        <div className="for-border"></div>
      </div>

      {/* Item 4 */}
      <div className="category-item bg-light-gray wow fadeInUp delay-0-8s">
        <img
          src="/images/flaticon/foot.png"
          alt=""
          style={{ width: "115px" }}
        />
        <div className="category-title">
          <span className="bg-text danR">Category</span>
          <h4 style={{ marginTop: "30px" }} className="Mont">
            <Link href="/services">Foot Massage</Link>
          </h4>
        </div>
        <p>
          Relax and rejuvenate with our soothing foot massage therapy. Relieve
          stress, improve circulation, and leave with a refreshing lightness in
          every step.
        </p>
        <Link href="/services" className="read-more">
          Learn More <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
        <div className="for-border"></div>
      </div>

      {/* Item 5 */}
      <div className="category-item bg-butter wow fadeInUp delay-1-0s">
        <img
          src="/images/flaticon/cosm.png"
          alt=""
          style={{ width: "115px" }}
        />
        <div className="category-title">
          <span className="bg-text danR">Category</span>
          <h4>
            <Link href="/services" className="Mont">
              Cosmetics
            </Link>
          </h4>
        </div>
        <p>
          Discover premium cosmetics that complement your natural glow. From
          skincare essentials to professional makeup, we bring you beauty that
          lasts all day.
        </p>
        <Link href="/services" className="read-more">
          Learn More <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
        <div className="for-border"></div>
      </div>
    </section>
  );
}
