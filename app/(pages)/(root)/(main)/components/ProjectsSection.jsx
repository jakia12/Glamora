import Link from "next/link";

export default function ProjectSection() {
  return (
    <section className="project-section pt-170 rpt-110 pb-150 rpb-100">
      <div className="container">
        <div className="row align-items-end project-active">
          {/* Project Item 1 */}
          <div className="item col-md-4 col-sm-6">
            <div className="project-item mt-140 wow fadeInUp delay-0-2s">
              <img src="/images/project-1.webp" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Project Item 2 */}
          <div className="item col-md-4 col-sm-6">
            <div className="project-item wow fadeInUp delay-0-4s">
              <img src="/images/project-3.webp" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Project Item 3 */}
          <div className="item col-md-4 col-sm-6">
            <div className="project-item mt-75 ml-lg-auto wow fadeInUp delay-0-6s">
              <img src="/images/project-5.webp" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Project Item 4 */}
          <div className="item col-md-4 col-sm-6">
            <div className="project-item mb-80 wow fadeInUp delay-0-2s">
              <img src="/images/project-4.webp" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Project Item 5 */}
          <div className="item col-md-4 col-sm-6">
            <div className="project-item ml-lg-auto wow fadeInUp delay-0-4s">
              <img src="/images/project-6.webp" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Project Item 6 */}
          <div className="item col-md-4 col-sm-6">
            <div className="project-item wow fadeInUp delay-0-6s">
              <img src="/images/project-2.webp" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="item col-lg-12">
            <div className="project-btn text-center">
              <Link href="/portfolio" className="theme-btn">
                View More <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
