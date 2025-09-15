export default function ContactBanner() {
  return (
    <section
      className="page-banner text-white py-165 rpy-130"
      style={{
        backgroundImage: "url(/images/pban.png)",
        backgroundPosition: "top center",
      }}
    >
      <div className="container">
        <div className="banner-inner text-center">
          <span className="bg-text danR">contact</span>
          <h1 className="page-title wow fadeInUp delay-0-2s Mont">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
}
