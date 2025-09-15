import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="blog-section rel z-1 pt-110 rpt-60 mb-105 rmb-55">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <div className="section-title text-center mb-65">
              <span className="bg-text danR">Blog</span>
              <span className="sub-title Mont">News &amp; Blog</span>
              <h2 className="Mont" style={{ fontSize: "47px" }}>
                Latest News &amp; Blog
              </h2>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="row">
          {/* Post 1 */}
          <div className="col-xl-4 col-md-6">
            <div className="news-item wow fadeInUp delay-0-2s">
              <div className="image">
                <Link href="/blog-details">
                  <img src="/images/news-1.webp" alt="News" />
                </Link>
              </div>
              <div className="news-header">
                <div className="title-meta">
                  <ul>
                    <li>
                      <i className="far fa-user-circle"></i>
                      <a href="#" style={{ color: "black", fontSize: "19px" }}>
                        Robert Doe
                      </a>
                    </li>
                    <li className="text-black">
                      <i className="far fa-comment-dots"></i>
                      <a href="#" style={{ color: "black", fontSize: "19px" }}>
                        Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details" className="Mont">
                      Smase Podcast Episode Chris Ferdinande
                    </Link>
                  </h4>
                  <p>
                    Temporibus laboriosam veritatis expedita tenetur sequi
                    molestiae
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="col-xl-4 col-md-6">
            <div className="news-item wow fadeInUp delay-0-4s">
              <div className="image">
                <Link href="/blog-details">
                  <img src="/images/news-2.webp" alt="News" />
                </Link>
              </div>
              <div className="news-header">
                <div className="title-meta">
                  <ul>
                    <li>
                      <i className="far fa-user-circle"></i>
                      <a href="#" style={{ color: "black", fontSize: "19px" }}>
                        Robert Doe
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comment-dots"></i>
                      <a href="#" style={{ color: "black", fontSize: "19px" }}>
                        Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details" className="Mont">
                      Useful React Hooks That You Can Projects
                    </Link>
                  </h4>
                  <p>
                    Penetur sequi molestiae dicta hic omnis eligendi deserunt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="col-xl-4 col-md-6">
            <div className="news-item wow fadeInUp delay-0-6s">
              <div className="image">
                <Link href="/blog-details">
                  <img src="/images/news-3.webp" alt="News" />
                </Link>
              </div>
              <div className="news-header">
                <div className="title-meta">
                  <ul>
                    <li>
                      <i className="far fa-user-circle"></i>
                      <a href="#" style={{ color: "black", fontSize: "19px" }}>
                        Robert Doe
                      </a>
                    </li>
                    <li>
                      <i className="far fa-comment-dots"></i>
                      <a href="#" style={{ color: "black", fontSize: "19px" }}>
                        Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details" className="Mont">
                      Smase Podcast Episode Chris Ferdinande
                    </Link>
                  </h4>
                  <p>
                    Architecto cumque porro, veniam suscipit consequatur harum,
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Post 3 */}
        </div>
      </div>
    </section>
  );
}
