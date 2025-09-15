import Link from "next/link";

export default function BookingSection() {
  return (
    <section className="booking-section pb-20" style={{ marginTop: "140px" }}>
      <div className="container-fluid">
        <div className="row">
          {/* Left: Working Hours */}
          <div className="col-xl-6">
            <div className="booking-item">
              <div
                className="booking-image wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url(/images/booking-left.webp)",
                }}
              />
              <div className="booking-content wow fadeInUp delay-0-4s">
                <span className="bg-text danR">Booking</span>
                <h3 className="Mont btl">Working Hours</h3>
                <p className="para">
                  Quis autem vel eum repreh enderit voluptate velit esse quame
                  molestiae consequatur veillum
                </p>
                <ul>
                  <li>
                    <i className="far fa-clock"></i>
                    <div className="booking-info">
                      <p>
                        Mon to Fri: 7:30 am — 1:00 am <br />
                        Sat: 9:00 am — 1:00 am <br />
                        Sun: 9:00 am — 11:30 pm
                      </p>
                      <Link href="/booking" className="theme-btn">
                        appointment{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Contact Us */}
          <div className="col-xl-6">
            <div className="booking-item">
              <div
                className="booking-image wow fadeInUp delay-0-6s"
                style={{
                  backgroundImage: "url(/images/booking-right.webp)",
                }}
              />
              <div className="booking-content wow fadeInUp delay-0-8s">
                <span className="bg-text danR">address</span>
                <h3 className="Mont btl">Contact us</h3>
                <p className="para">
                  Quis autem vel eum repreh enderit voluptate velit esse quame
                  molestiae consequatur veillum
                </p>
                <ul>
                  <li>
                    <i className="far fa-clock"></i>
                    <div className="booking-info">
                      <h5>Location</h5>
                      <p>523 Main Street, 2nd Floor, New York City</p>
                    </div>
                  </li>
                  <li>
                    <i className="far fa-clock"></i>
                    <div className="booking-info">
                      <h5>Hotline</h5>
                      <p>Call : +012 (345) 6789</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
}
