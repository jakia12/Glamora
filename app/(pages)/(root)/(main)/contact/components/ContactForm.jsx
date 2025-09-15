"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit here (e.g., API call or email service)
    console.log("Form submitted!");
  };

  return (
    <div className="contact-form-area py-150 rpy-100">
      <div className="container">
        <div className="contact-form-wrap wow fadeInUp delay-0-2s">
          <div className="section-title mb-45 text-center">
            <h2 className="Mont">Send Us Message</h2>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row clearfix justify-content-center">
              {/* Full Name */}
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="far fa-user"></i>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="far fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Us"
                    required
                  />
                </div>
              </div>

              {/* Website */}
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="col-sm-12">
                <div className="form-group">
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Write Message"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit */}
              <div className="col-lg-5 col-md-6 col-sm-8">
                <div className="form-group mb-0">
                  <button
                    type="submit"
                    className="theme-btn w-100 style-six Mont"
                  >
                    send message <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
