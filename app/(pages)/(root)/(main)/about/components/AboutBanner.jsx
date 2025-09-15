export default function AboutBanner() {
  return (
    <section
      className="page-banner text-white py-165 rpy-130"
      style={{ backgroundImage: "url(/images/about/page-banner.webp)" }}
    >
      <div className="container">
        <div className="banner-inner">
          <span className="bg-text danR">about us</span>
          <h1 className="page-title wow fadeInUp delay-0-2s Mont">About Us</h1>
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">About us</li>
            </ol>
          </nav> */}
        </div>
      </div>
    </section>
  );
}
