import Link from "next/link";

export default function BookingBanner() {
  return (
    <section
      className="page-banner text-white py-165 rpy-130"
      style={{
        backgroundImage: "url(/assets/images/banners/page-banner-three.jpg)",
      }}
    >
      <div className="container">
        <div className="banner-inner text-center">
          <span className="bg-text">booking</span>
          <h1 className="page-title wow fadeInUp delay-0-2s">
            Make Appointment
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Appointment</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
