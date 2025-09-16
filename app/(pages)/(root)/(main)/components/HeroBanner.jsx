import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section rel z-[-1] bg-butter relative py-[150px]">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="hero-content mt-200 mb-220">
              <span className="bg-text danR">Beauty</span>
              <h1 className="wow fadeInUp delay-0-2s hero_title">
                Natural Beauty spa salon
              </h1>
              <div className="hero-btn mt-30 wow fadeInUp delay-0-4s">
                <Link href="/about" className="theme-btn">
                  Learn more <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-right-image"
        style={{
          backgroundImage: "url(/images/banner.jpg)",
          backgroundPosition: "center center",
        }}
      ></div>
    </section>
  );
}
