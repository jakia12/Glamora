import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

// ---------- helpers ----------
const findPost = (slug) => blogs.find((p) => p.slug === slug);
const relatedPosts = (slug, category, n = 3) => {
  const same = blogs.filter(
    (p) => p.slug !== slug && p.categorySlug === category
  );
  const pool = same.length >= n ? same : blogs.filter((p) => p.slug !== slug);
  return pool.slice(0, n);
};
const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// ---------- SSG ----------
export function generateStaticParams() {
  return blogs.map((p) => ({ slug: p.slug }));
}

// ---------- SEO ----------
export function generateMetadata({ params }) {
  const post = findPost(params.slug);
  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    keywords: [post.category, ...(post.tags || [])],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.img ? [{ url: post.img }] : [],
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = findPost(params.slug);

  if (!post) {
    return (
      <main className="container py-5">
        <h1 className="mb-3">Post Not Found</h1>
        <Link href="/blogs" className="btn btn-outline-secondary">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  // derive sidebar data (server-safe)
  const categories = Array.from(
    blogs.reduce(
      (m, p) =>
        m.set(p.categorySlug, {
          name: p.category,
          slug: p.categorySlug,
          count: (m.get(p.categorySlug)?.count || 0) + 1,
        }),
      new Map()
    )
  ).map(([, v]) => v);

  const recent = [...blogs]
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, 5);

  const tagCloud = Array.from(
    blogs.reduce((set, p) => {
      (p.tags || []).forEach((t) => set.add(t));
      return set;
    }, new Set())
  ).slice(0, 20);

  const rel = relatedPosts(post.slug, post.categorySlug, 3);
  const paragraphs = (post.content || "")
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="container py-4 py-lg-5">
      {/* BREADCRUMB */}
      <nav aria-label="breadcrumb" className="mb-3 small">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/blogs">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      <div className="row g-4 g-lg-5">
        {/* MAIN */}
        <div className="col-12 col-lg-8">
          <article className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
            <div className="ratio ratio-16x9">
              <Image
                src={post.img}
                alt={post.title}
                fill
                sizes="(max-width: 992px) 100vw, 66vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="card-body p-3 p-md-4 p-lg-5">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge text-bg-light border">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="badge text-bg-dark">Featured</span>
                )}
                <span className="ms-auto small text-secondary">
                  {fmtDate(post.publishedDate)} • {post.readTime || "5 min"}
                </span>
              </div>

              <h1 className="display-6 fw-bold mb-3">{post.title}</h1>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="d-inline-flex align-items-center gap-2">
                  <i className="far fa-user-circle" />
                  <span className="fw-medium">{post.author}</span>
                </div>
                <div className="vr" />
                <div className="small text-secondary">
                  <i className="far fa-comment-dots me-1" />
                  {String(post.comments).padStart(2, "0")} comments
                </div>
              </div>

              <div className="content lead" style={{ lineHeight: 1.8 }}>
                {paragraphs.map((p, i) => (
                  <p key={i} className="mb-4">
                    {p}
                  </p>
                ))}
              </div>

              {/* {!!post.tags?.length && (
                <div className="mt-4">
                  {post.tags.map((t) => (
                    <Link
                      key={t}
                      href={`/blogs/tag/${t}`}
                      className="btn btn-sm btn-outline-secondary me-2 mb-2"
                    >
                      #{t}
                    </Link>
                  ))}
                </div>
              )} */}
            </div>
          </article>

          {/* RELATED */}
          <section className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="h5 mb-0">Related posts</h3>
              <Link href="/blogs" className="btn btn-link px-0">
                View all →
              </Link>
            </div>
            <div className="row g-3 g-md-4">
              {rel.map((r) => (
                <div className="col-12 col-md-6 col-xl-4" key={r.slug}>
                  <div className="card h-100 border-0 shadow-sm rounded-4">
                    <div className="ratio ratio-4x3 rounded-top overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.img}
                        alt={r.title}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="card-body">
                      <span className="badge text-bg-light border mb-2">
                        {r.category}
                      </span>
                      <h6 className="mb-2">
                        <Link
                          href={`/blogs/${r.slug}`}
                          className="stretched-link text-reset"
                        >
                          {r.title}
                        </Link>
                      </h6>
                      <div className="small text-secondary">
                        {fmtDate(r.publishedDate)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="col-12 col-lg-4">
          <div className="sticky-lg-top" style={{ top: "88px" }}>
            {/* Search (GET to /blogs?q=... so index page filters) */}
            <div className="card border-0 shadow-sm rounded-4 mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Search</h5>
                <form
                  action="/blogs"
                  method="GET"
                  role="search"
                  aria-label="Site blog search"
                >
                  <div className="input-group">
                    <input
                      name="q"
                      type="search"
                      className="form-control"
                      placeholder="Search articles..."
                      aria-label="Search blog posts"
                    />
                    <button className="btn btn-dark" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                      <span className="visually-hidden">Search</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Categories */}
            <div className="card border-0 shadow-sm rounded-4 mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Categories</h5>
                <ul className="list-unstyled mb-0">
                  {categories.map((c) => (
                    <li
                      key={c.slug}
                      className="d-flex align-items-center justify-content-between mb-2"
                    >
                      <Link
                        href={`/blogs/category/${c.slug}`}
                        className="link-dark text-decoration-none"
                      >
                        {c.name}
                      </Link>
                      <span className="badge text-bg-light border">
                        {c.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent posts */}
            <div className="card border-0 shadow-sm rounded-4 mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Recent Posts</h5>
                <ul className="list-unstyled mb-0">
                  {recent.map((r) => (
                    <li
                      key={r.slug}
                      className="d-flex gap-3 align-items-center mb-3"
                    >
                      <div
                        className="ratio ratio-1x1 rounded overflow-hidden"
                        style={{ width: 64 }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={r.img}
                          alt={r.title}
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <Link
                          href={`/blogs/${r.slug}`}
                          className="small link-dark text-decoration-none"
                        >
                          {r.title}
                        </Link>
                        <div className="small text-secondary">
                          {fmtDate(r.publishedDate)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tag cloud */}
            {/* {tagCloud.length > 0 && (
              <div className="card border-0 shadow-sm rounded-4 mb-3">
                <div className="card-body">
                  <h5 className="card-title mb-3">Tags</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {tagCloud.map((t) => (
                      <Link
                        key={t}
                        href={`/blogs/tag/${t}`}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        #{t}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )} */}

            {/* Newsletter (POST, server-safe) */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="card-title mb-2">Get beauty tips weekly</h5>
                <p className="small text-secondary">
                  Join our newsletter for skincare routines, hair guides, and
                  offers.
                </p>
                <form action="/api/newsletter" method="POST">
                  <div className="mb-2">
                    <input
                      name="email"
                      type="email"
                      required
                      className="form-control"
                      placeholder="you@example.com"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
