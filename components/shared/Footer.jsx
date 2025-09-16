"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer footer-three bg-black text-white pt-85">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title Mont">Menus</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/booking">Booking</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title Mont">Services</h4>
              <ul>
                <li>
                  <Link href="#">Beauty Salon</Link>
                </li>
                <li>
                  <Link href="#">Hair Treatments</Link>
                </li>
                <li>
                  <Link href="#">Autumn vibes</Link>
                </li>
                <li>
                  <Link href="#">Makeup</Link>
                </li>
                <li>
                  <Link href="#">Body Treatments</Link>
                </li>
                <li>
                  <Link href="#">Spa & Foot Massage</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget contact-widget">
              <h4 className="footer-title Mont">Contact</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info-content">
                    <h5>Location</h5>
                    <p>523 Main Street, New York</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <div className="info-content">
                    <h5>Hotline</h5>
                    <p>Call : +012 (345) 6789</p>
                  </div>
                </li>
                <li>
                  <i className="far fa-comment"></i>
                  <div className="info-content">
                    <h5>Email</h5>
                    <Link href="mailto:support@gmail.com">
                      support@gmail.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget newsletter-widget">
              <h4 className="footer-title Mont">Newsletter</h4>
              <form action="#" method="post">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter Email"
                  required
                />
                <button type="submit">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </form>
              <div className="social-style-one pt-40">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-area pt-25 pb-15">
          <ul className="footer-menu py-5">
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Faqs</Link>
            </li>
            <li>
              <Link href="#">My Account</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
          </ul>
          <p>© 2025 Glamora, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
