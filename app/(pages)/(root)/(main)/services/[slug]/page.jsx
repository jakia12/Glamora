import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

// ----- helpers
const findService = (slug) => services.find((s) => s.slug === slug);
const moreServices = (slug, n = 4) =>
  services.filter((s) => s.slug !== slug).slice(0, n);

// ----- SSG
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ----- SEO
export function generateMetadata({ params }) {
  const svc = findService(params.slug);
  if (!svc) return { title: "Service Not Found | Glamora" };
  return {
    title: `${svc.title} | Glamora`,
    description: svc.seo?.description || svc.summary,
    keywords: svc.seo?.keywords,
    openGraph: {
      title: `${svc.title} | Glamora`,
      description: svc.seo?.description || svc.summary,
      images: svc.img ? [{ url: svc.img }] : [],
    },
  };
}

export default function ServiceDetailsPage({ params }) {
  const data = findService(params.slug);
  const more = moreServices(params.slug, 4);

  if (!data) {
    return (
      <main className="container section">
        <h1 className="mb-3">Service Not Found</h1>
        <Link href="/services" className="btn btn-outline-secondary">
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
      {/* BREADCRUMB */}
      <nav className="small text-muted pt-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/services">Services</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {data.title}
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="section">
        <div className="row  g-4 g-lg-5">
          <div className="col-12 col-lg-8">
            <div className="ratio ratio-16x9 rounded-4 shadow-sm overflow-hidden">
              <Image
                src={data.img}
                alt={data.title}
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* GALLERY */}
            {Array.isArray(data.gallery) && data.gallery.length > 0 && (
              <section className="section">
                <h3 className="section-title">Look &amp; Feel</h3>
                <div className="row g-3 g-lg-4">
                  {data.gallery.map((src, i) => (
                    <div className="col-6 col-md-4 col-lg-3" key={i}>
                      <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm card-soft">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`${data.title} ${i + 1}`}
                          className="w-100 h-100 object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TIERS / PRICING */}
            {Array.isArray(data.tiers) && data.tiers.length > 0 && (
              <section className="section">
                <h3 className="section-title">Packages &amp; Pricing</h3>
                <div className="table-responsive card-soft rounded-4">
                  <table className="table align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Package</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.tiers.map((t, i) => (
                        <tr key={i}>
                          <td className="fw-medium">{t.name}</td>
                          <td className="text-muted">{t.duration}</td>
                          <td className="fw-semibold">${t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* PREP / AFTERCARE / BENEFITS */}
            {(data.preparation?.length ||
              data.aftercare?.length ||
              data.benefits?.length) && (
              <section className="section">
                <div className="row g-4 g-lg-5">
                  {data.preparation?.length > 0 && (
                    <div className="col-12 col-lg-4">
                      <div className="card h-100 shadow-sm rounded-4 card-soft">
                        <div className="card-body">
                          <h5 className="card-title mb-3">How to Prepare</h5>
                          <ul className="mb-0 ps-3 small">
                            {data.preparation.map((p, i) => (
                              <li key={i} className="mb-1">
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {data.aftercare?.length > 0 && (
                    <div className="col-12 col-lg-4">
                      <div className="card h-100 shadow-sm rounded-4 card-soft">
                        <div className="card-body">
                          <h5 className="card-title mb-3">Aftercare</h5>
                          <ul className="mb-0 ps-3 small">
                            {data.aftercare.map((p, i) => (
                              <li key={i} className="mb-1">
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {data.benefits?.length > 0 && (
                    <div className="col-12 col-lg-4">
                      <div className="card h-100 shadow-sm rounded-4 card-soft">
                        <div className="card-body">
                          <h5 className="card-title mb-3">Benefits</h5>
                          <ul className="mb-0 ps-3 small">
                            {data.benefits.map((p, i) => (
                              <li key={i} className="mb-1">
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* FAQS */}
            {Array.isArray(data.faqs) && data.faqs.length > 0 && (
              <section className="section">
                <h3 className="section-title">FAQs</h3>
                <div className="accordion accordion-flush" id="faq">
                  {data.faqs.map((item, i) => (
                    <div className="accordion-item" key={i}>
                      <h2 className="accordion-header" id={`h-${i}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#c-${i}`}
                        >
                          {item.q}
                        </button>
                      </h2>
                      <div
                        id={`c-${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body small text-secondary">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              {data.duration && (
                <span className="badge rounded-pill bg-light text-dark border">
                  {data.duration}
                </span>
              )}
              {data.rating && (
                <span className="badge rounded-pill bg-light text-dark border">
                  ★ {Number(data.rating).toFixed(1)}
                </span>
              )}
            </div>

            <h1 className="fw-bold mb-3">{data.title}</h1>
            <p className="lead text-secondary content-narrow mb-4">
              {data.summary}
            </p>

            {Array.isArray(data.features) && data.features.length > 0 && (
              <ul className="list-inline mb-4">
                {data.features.map((f, i) => (
                  <li key={i} className="list-inline-item mb-2">
                    <span className="badge rounded-pill bg-light text-dark border">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="d-flex flex-wrap align-items-center gap-3">
              <div className="display-6 fw-semibold mb-0">
                ${data.fromPrice}
              </div>
              <span className="text-muted">starting price</span>
              <div className="ms-auto d-flex gap-2">
                <a href="#book" className="btn btn-dark">
                  Book Now
                </a>
                <Link href="/services" className="btn btn-outline-secondary">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE SERVICES */}
      <section className="section pt-0">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">More Services</h3>
          <Link href="/services" className="btn btn-link px-0">
            View all →
          </Link>
        </div>

        <div className="row g-4 g-lg-5">
          {more.map((s) => (
            <div className="col-12 col-sm-6 col-lg-3" key={s.slug}>
              <div className="card h-100 shadow-sm border-0 rounded-4 card-hover">
                <div className="ratio ratio-4x3 rounded-top overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-100 h-100 object-cover"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <i className={`${s.icon} fs-5`} />
                    <h6 className="mb-0">{s.title}</h6>
                  </div>
                  <div className="small text-muted">{s.duration}</div>
                  <div className="mt-2 small">
                    From <strong>${s.fromPrice}</strong>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <Link
                    href={`/services/${s.slug}`}
                    className="btn btn-outline-dark w-100"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
