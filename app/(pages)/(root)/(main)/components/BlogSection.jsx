import { blogs } from "@/data/blogs";
import Link from "next/link";

const delays = ["delay-0-2s", "delay-0-4s", "delay-0-6s"];
const pad2 = (n) => String(n ?? 0).padStart(2, "0");
const excerpt = (s, n = 160) =>
  s?.length > n ? s.slice(0, n).trim() + "…" : s || "";

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
                }`}
              >
                <div className="image">
                  <Link href={`/blogs/${p.slug}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.title} />
                  </Link>
                </div>

                <div className="news-header">
                  <div className="title-meta">
                    <ul>
                      <li>
                        <i className="far fa-user-circle" />
                        {/* keep your inline style */}
                        <a
                          href="#"
                          style={{ color: "black", fontSize: "19px" }}
                        >
                          {p.author}
                        </a>
                      </li>
                      <li className="text-black">
                        <i className="far fa-comment-dots" />
                        <a
                          href="#"
                          style={{ color: "black", fontSize: "19px" }}
                        >
                          Comments ({pad2(p.comments)})
                        </a>
                      </li>
                    </ul>

                    <h4>
                      <Link href={`/blogs/${p.slug}`} className="Mont">
                        {p.title}
                      </Link>
                    </h4>

                    <p>{excerpt(p.excerpt)}</p>
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
