export default function AboutPageSection() {
  return (
    <section className="about-page-section rel z-2 pt-140 rpt-90">
      <div className="container">
        {/* Top Row */}
        <div className="row mb-55">
          <div className="col-lg-5">
            <div className="about-page-content wow fadeInLeft delay-0-2s">
              <div className="section-title mb-30">
                <span className="bg-text danR">about</span>
                <span className="sub-title Mont" style={{ color: "#D6B981" }}>
                  Who We Are
                </span>
                <h2 className="Mont">Quality &amp; Natural Beauty Salon</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-page-right-text wow fadeInRight delay-0-2s">
              <p className="para">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperia eaque ipsa
                quae abillo inventore veritatis quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim quia voluptas sit aspernatur aut
                odit aut fugit sed consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt porro quisquam
              </p>
              <p className="para">
                Nemo enim quia voluptas sit aspernatur aut odit aut fugit sed
                consequuntur magni dolores ratione voluptatem sequi nesciunt
                quisquam
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row">
          <div className="col-md-6">
            <div className="about-page-left mb-30 wow fadeInUp delay-0-2s">
              <img src="/images/about/about-page-left.webp" alt="About" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-page-left mb-30 wow fadeInUp delay-0-2s">
              <img src="/images/about/about-page-right.webp" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
