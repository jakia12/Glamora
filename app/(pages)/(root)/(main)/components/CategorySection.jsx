import Link from "next/link";

export default function CategorySection() {
  return (
    <section className="category-section">
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
            <Link href="/service-details">Nail Polish</Link>
          </h4>
        </div>
        <p>Quis autem velum reprender eoluptate velit esse</p>
        <Link href="/service-details" className="read-more">
          read more <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
        <div className="for-border"></div>
      </div>

      {/* Item 2 */}
      <div className="category-item bg-light-gray wow fadeInUp delay-0-4s">
        <img src="/images/flaticon/eye.png" alt="" style={{ width: "115px" }} />
        <div className="category-title">
          <span className="bg-text danR">Category</span>
          <h4 style={{ marginTop: "30px" }} className="Mont">
            <Link href="/service-details">Brow Polish</Link>
          </h4>
        </div>
        <p>Quis autem velum reprender eoluptate velit esse</p>
        <Link href="/service-details" className="read-more">
          read more <i className="fas fa-long-arrow-alt-right"></i>
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
            <Link href="/service-details">Hair Dresser</Link>
          </h4>
        </div>
        <p>Quis autem velum reprender eoluptate velit esse</p>
        <Link href="/service-details" className="read-more">
          read more <i className="fas fa-long-arrow-alt-right"></i>
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
            <Link href="/service-details">Foot Massage</Link>
          </h4>
        </div>
        <p>Quis autem velum reprender eoluptate velit esse</p>
        <Link href="/service-details" className="read-more">
          read more <i className="fas fa-long-arrow-alt-right"></i>
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
            <Link href="/service-details" className="Mont">
              Cosmetics
            </Link>
          </h4>
        </div>
        <p>Quis autem velum reprender eoluptate velit esse</p>
        <Link href="/service-details" className="read-more">
          read more <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
        <div className="for-border"></div>
      </div>
    </section>
  );
}
