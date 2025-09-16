"use client";

export default function BookingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking form submitted");
  };

  return (
    <section className="booking-section pt-140 rpt-90 pb-150 rpb-100">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-title text-center mb-45">
              <span className="bg-text danR">Booking</span>
              <span className="sub-title Mont">Booking Seat</span>
              <h2 className="Mont">Make Appointment</h2>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="booking-from">
          <div className="row clearfix">
            {/* Full Name */}
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-2s">
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

            {/* Phone Number */}
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-3s">
                <label htmlFor="number">
                  <i className="fas fa-phone"></i>
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-4s">
                <label htmlFor="email">
                  <i className="far fa-envelope"></i>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            {/* Service Select */}
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="form-group z-2 wow fadeInUp delay-0-5s">
                <select name="services" id="services" className="form-control">
                  <option value="services">Services</option>
                  <option value="service1">Hair Cutting</option>
                  <option value="service2">Foot Massage</option>
                  <option value="service3">Nail Colors</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-6s">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Time */}
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-7s">
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="col-lg-12">
              <div className="form-group mb-0 wow fadeInUp delay-0-8s">
                <button type="submit" className="theme-btn w-100 style-six">
                  Make appointment{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
