import Link from "next/link";

const hours = [
  { day: "Mon to Friday", time: "7:30 am — 1:00 am" },
  { day: "Saturday", time: "7:30 am — 1:00 am" },
  { day: "Wednesday", time: "7:30 am — 1:00 am" },
];

export default function BookingHours() {
  return (
    <section className="booking-hours-area bg-light-gray rel zndx">
      {/* Left Image */}
      <div
        className="booking-hour-image"
        style={{
          backgroundImage: "url(/images/book.jpg)",
          backgroundPosition: "bottom center",
        }}
      ></div>

      <div className="container zndx">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="booking-hours-content py-150 rpt-0 rpb-100 wow fadeInLeft delay-0-2s">
              {/* Section Title */}
              <div className="section-title mb-30">
                <span className="bg-text danR">menus</span>
                <span className="sub-title Mont">Hair Salon</span>
                <h2 className="Mont">Working Hours</h2>
              </div>

              <p className="para mb-30 wow fadeInRight delay-0-2s">
                At our salon, your beauty and relaxation come first. Whether
                it’s a quick touch-up during the week or a weekend self-care
                session, our doors are always open to welcome you.
              </p>

              {/* Hours List */}
              <ul className="booking-hours py-20 wow fadeInRight delay-0-2s">
                {hours.map((item, i) => (
                  <li key={i}>
                    <span className="date">{item.day}</span>{" "}
                    <span className="symbol">:</span>{" "}
                    <span className="time">{item.time}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/booking" className="theme-btn style-two">
                booking now <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}

      <div className="booking-bg-icon">
        <i className="flaticon-hair-iron"></i>
      </div>
    </section>
  );
}
