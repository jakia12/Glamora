"use client";

import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// --- helpers
const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogIndexPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = (searchParams?.get("q") || "").trim();
  const [searchInput, setSearchInput] = useState(query);

  // sort newest first
  const allSorted = [...blogs].sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  // --- filter by query (title, excerpt, author, category, tags)
  const qLower = query.toLowerCase();
  const all = qLower
    ? allSorted.filter((p) => {
        const haystack = [
          p.title,
          p.excerpt,
          p.author,
          p.category,
          ...(p.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(qLower);
      })
    : allSorted;

  // --- pagination
  const pageSize = 6;
  const page = Math.max(1, Number(searchParams?.get("page") || 1));
  const totalPages = Math.max(1, Math.ceil(all.length / pageSize));
  const start = (page - 1) * pageSize;
  const items = all.slice(start, start + pageSize);

  const pageHref = (n) => {
    const sp = new URLSearchParams();
    if (query) sp.set("q", query);
    if (n > 1) sp.set("page", String(n));
    const qs = sp.toString();
    return `/blogs${qs ? `?${qs}` : ""}`;
  };

  // build compact page list with ellipses
  const buildPages = (current, total) => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [1];
    if (current > 3) pages.push("…");
    if (current > 2) pages.push(current - 1);
    pages.push(current);
    if (current < total - 1) pages.push(current + 1);
    if (current < total - 2) pages.push("…");
    pages.push(total);
    return pages.filter((v, i, arr) => v !== arr[i - 1]);
  };

  // --- sidebar data (keep from full corpus for navigation)
  const categories = Array.from(
    allSorted.reduce((m, p) => {
      const prev = m.get(p.categorySlug) || {
        name: p.category,
        slug: p.categorySlug,
        count: 0,
      };
      prev.count += 1;
      return m.set(p.categorySlug, prev);
    }, new Map())
  ).map(([, v]) => v);

  const recent = allSorted.slice(0, 5);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Thanks for subscribing!");
    form.reset();
  };

  // 🔎 Search submit -> push to /blogs?q=...
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const nextQ = searchInput.trim();
    if (!nextQ) {
      // clear query param if input empty
      router.push("/blogs");
      return;
    }
    router.push(`/blogs?q=${encodeURIComponent(nextQ)}`);
  };

  return (
    <main className="container py-4 py-lg-5">
      {/* Breadcrumb */}
      {/* <nav aria-label="breadcrumb" className="mb-3 small">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Blog
          </li>
        </ol>
      </nav> */}

      <div className="row g-4 g-lg-5">
        {/* LEFT: posts */}
        <div className="col-12 col-lg-8">
          {/* Query heading */}
          {query && (
            <div className="mb-2 small text-secondary">
              Showing results for <strong>“{query}”</strong> — {all.length}{" "}
              match
              {all.length === 1 ? "" : "es"}
            </div>
          )}

          {/* Grid of posts */}
          <div className="row g-4">
            {items.length === 0 ? (
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-4 p-4">
                  <div className="h5 mb-2">No results</div>
                  <p className="mb-0 text-secondary">
                    Try a different keyword or{" "}
                    <Link href="/blogs" className="link-dark">
                      view all posts
                    </Link>
                    .
                  </p>
                </div>
              </div>
            ) : (
              items.map((p, idx) => (
                <div key={p.slug} className="col-12 col-md-6 col-lg-6">
                  <article className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                    <div className="ratio ratio-16x9">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        sizes="(max-width: 992px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                        priority={idx === 0}
                      />
                    </div>
                    <div className="card-body d-flex flex-column p-3 p-md-4">
                      <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                        <span className="badge text-bg-light border">
                          {p.category}
                        </span>
                        {p.featured && (
                          <span className="badge text-bg-dark">Featured</span>
                        )}
                        <span className="ms-auto small text-secondary">
                          {fmtDate(p.publishedDate)} • {p.readTime || "5 min"}
                        </span>
                      </div>

                      <h2 className="h5 mb-2">
                        <Link
                          href={`/blogs/${p.slug}`}
                          className="link-dark text-decoration-none"
                        >
                          {p.title}
                        </Link>
                      </h2>

                      <p className="text-secondary mb-3 text-clamp-3">
                        {p.excerpt}
                      </p>

                      <div className="mt-auto d-flex align-items-center gap-3">
                        <div className="small">
                          <i className="far fa-user-circle me-1" />
                          {p.author}
                        </div>
                        <div className="vr" />
                        <div className="small text-secondary">
                          <i className="far fa-comment-dots me-1" />
                          {String(p.comments).padStart(2, "0")} comments
                        </div>

                        <Link
                          href={`/blogs/${p.slug}`}
                          className="btn btn-sm btn-dark ms-auto"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {items.length > 0 && (
            <nav className="mt-4" aria-label="Blog pagination">
              <ul className="pagination">
                {/* Prev */}
                <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
                  {page <= 1 ? (
                    <span className="page-link" aria-label="Previous">
                      <FiChevronLeft size={20} />
                    </span>
                  ) : (
                    <Link
                      href={pageHref(page - 1)}
                      className="page-link"
                      aria-label="Previous"
                    >
                      <FiChevronLeft size={20} />
                    </Link>
                  )}
                </li>

                {buildPages(page, totalPages).map((n, i) =>
                  n === "…" ? (
                    <li key={`dots-${i}`} className="page-item disabled">
                      <span className="page-link">…</span>
                    </li>
                  ) : (
                    <li
                      key={n}
                      className={`page-item ${n === page ? "active" : ""}`}
                    >
                      {n === page ? (
                        <span className="page-link">{n}</span>
                      ) : (
                        <Link href={pageHref(n)} className="page-link">
                          {n}
                        </Link>
                      )}
                    </li>
                  )
                )}

                {/* Next */}
                <li
                  className={`page-item ${
                    page >= totalPages ? "disabled" : ""
                  }`}
                >
                  {page >= totalPages ? (
                    <span className="page-link" aria-label="Next">
                      <FiChevronRight size={20} />
                    </span>
                  ) : (
                    <Link
                      href={pageHref(page + 1)}
                      className="page-link"
                      aria-label="Next"
                    >
                      <FiChevronRight size={20} />
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          )}
        </div>

        {/* RIGHT: sidebar */}
        <aside className="col-12 col-lg-4">
          <div className="sticky-lg-top" style={{ top: "88px" }}>
            {/* Search */}
            <div className="card border-0 shadow-sm rounded-4 mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">Search</h5>
                <form onSubmit={handleSearchSubmit}>
                  <div className="input-group">
                    <input
                      name="q"
                      type="search"
                      className="form-control"
                      placeholder="Search articles..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button className="btn btn-dark" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </div>
                </form>
                {query && (
                  <div className="small mt-2">
                    <Link href="/blogs" className="text-decoration-none">
                      Clear search
                    </Link>
                  </div>
                )}
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
                        href={`/blogs/${c.slug}`}
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

            {/* Newsletter */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="card-title mb-2">Get beauty tips weekly</h5>
                <p className="small text-secondary">
                  Join our newsletter for skincare routines, hair guides, and
                  offers.
                </p>
                <form onSubmit={handleNewsletterSubmit} method="post">
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
