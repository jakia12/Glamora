export default function BookingBanner() {
  return (
    <section
      className="page-banner text-white py-165 rpy-130 zndx"
      style={{
        backgroundImage: "url(/images/pban.png)",
        backgroundPosition: "top center",
      }}
    >
      <div className="container">
        <div className="banner-inner text-center">
          <span className="bg-text danR">booking</span>
          <h1 className="page-title wow fadeInUp delay-0-2s Mont">
            Make Appointment
          </h1>
        </div>
      </div>
    </section>
  );
}
