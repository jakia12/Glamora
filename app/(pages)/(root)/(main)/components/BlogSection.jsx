import { blogs } from "@/data/blogs";
import Link from "next/link";

const delays = ["delay-0-2s", "delay-0-4s", "delay-0-6s"];
const pad2 = (n) => String(n ?? 0).padStart(2, "0");
const excerpt = (s, n = 160) =>
  s?.length > n ? s.slice(0, n).trim() + "…" : s || "";
const fmtDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

export default function BlogSection() {
  const posts = blogs.slice(0, 9); // show up to 9

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
          {posts.slice(0, 3).map((p, idx) => (
            <div key={p.slug} className="col-xl-4 col-md-6">
              <div
                className={`news-item wow fadeInUp ${
                  delays[idx % delays.length]
                } shadow-sm rounded-4 overflow-hidden`}
              >
                {/* Image */}
                <div className="image">
                  <div className="ratio ratio-16x9">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Link
                    href={`/blogs/${p.slug}`}
                    className="stretched-link"
                    aria-label={`Read ${p.title}`}
                  />
                </div>

                {/* Content */}
                <div className="news-header p-3 p-md-4">
                  <div className="title-meta">
                    {/* Meta row: category + date + read time + comments */}
                    {/* <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="badge text-bg-light border">
                        {p.category || "General"}
                      </span>
                      {p.featured && (
                        <span className="badge text-bg-dark">Featured</span>
                      )}
                     
                    </div> */}

                    {/* Author & comments */}
                    <ul className="d-flex flex-wrap gap-3 list-unstyled small mb-3">
                      <li className="d-flex align-items-center gap-2">
                        <i className="far fa-user-circle" />
                        <a
                          href="#"
                          style={{ color: "black", fontSize: "15px" }}
                        >
                          {p.author}
                        </a>
                      </li>
                      <li className="d-flex align-items-center gap-2 text-black">
                        <i className="far fa-comment-dots" />
                        <a
                          href="#"
                          style={{ color: "black", fontSize: "15px" }}
                        >
                          Comments ({pad2(p.comments)})
                        </a>
                      </li>
                    </ul>

                    {/* Title */}
                    <h4 className="mb-2">
                      <Link
                        href={`/blogs/${p.slug}`}
                        className="Mont text-decoration-none text-dark"
                      >
                        {p.title.slice(0, 50)}
                      </Link>
                    </h4>

                    {/* Excerpt */}
                    <p className="mb-3 text-muted">
                      {excerpt(p.excerpt.slice(0, 200))}
                    </p>

                    {/* Read more */}
                    <div className="d-flex align-items-center">
                      <Link
                        href={`/blogs/${p.slug}`}
                        className="btn btn-sm btn-dark"
                      >
                        Read more
                      </Link>
                      <span className="ms-auto small text-muted">
                        {fmtDate(p.publishedDate)}
                        {p.readTime ? ` • ${p.readTime}` : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Posts */}
        </div>
      </div>
    </section>
  );
}
