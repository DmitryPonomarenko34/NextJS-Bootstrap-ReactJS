import Link from "next/link";
import React from "react";
import Image from "next/image";

//  flex-fill flex-sm-grow-1 flex-sm-shrink-1

export default function Footer() {
  return (
    <footer className="footer text-white fs-6 pt-3 pt-sm-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4 col-md-4">
            <Link href="/" className="d-block mb-3">
              <Image
                src="/logo.png"
                width={340}
                height={93}
                alt="logo"
                className="maxw-55 maxw-lg-100 img-fluid d-block"
              />
            </Link>
            <p>
              A pioneer in realizing the dream of an electrical mobility
              solution, AARGO EV SMART stations will offer state of the art
              technology solution. Imbibing the global best practices and safety
              protocols, our solution is one-of-its kind in terms of technology,
              implementation, usage and maintenance.
            </p>
            <h4 className="second-title">Download Our App Now</h4>
            <div className="d-flex">
              <a href="#" className="d-block mr-3">
                <Image
                  src="/icons/google-play.png"
                  width={200}
                  height={60}
                  alt="google play"
                  className="img-fluid d-block"
                />
              </a>
              <a href="#">
                <Image
                  src="/icons/app-store.png"
                  width={200}
                  height={60}
                  alt="app store"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <ul className="col-12 mb-4 col-sm-6 col-md-4 list-unstyled">
            <li>
              <h4 className="second-title">Download Our App Now</h4>
            </li>
            <li>
              <Link className="footer__link" href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/">
                Our Products
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/">
                Partners
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/">
                Our Blog
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/">
                Gallary
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="col-12 mb-4 col-sm-6 col-md-4 list-unstyled">
            <li>
              <h4 className="second-title">Contact Us</h4>
            </li>
            <li>
              <a
                className="footer__link footer__link--email fs-5 fs-lg-4 ps-5 position-relative"
                href="tel:+919311291378"
              >
                +91 93112 91378
              </a>
            </li>
            <li>
              <a
                className="text-break footer__link footer__link--phone fs-5 fs-lg-4 ps-5 position-relative"
                href="mailto:evinfo@aarpowersolutions.com"
              >
                evinfo@aarpowersolutions.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <p className="text-center">
          © 2023 AARGO EV SMART. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
