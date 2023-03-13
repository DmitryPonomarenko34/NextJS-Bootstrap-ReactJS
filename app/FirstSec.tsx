import Image from "next/image";

export default function FirstSec() {
  return (
    <section className="position-relative sec-padding first text-white">
      <Image
        src="/firstSec-bg.jpg"
        fill
        alt="bg"
        className="img-fluid -z-index-10"
      />
      <div className="container">
        <div className="row">
          <div className="info-box col-12 col-md-6">
            <h1 className="title">
              Accelerating The <span className="text-dark">Transition</span>
            </h1>
            <ul className="first__list list-unstyled">
              <li className="first__list-item">
                <p>
                  We are the most suitable & reliable EV Charging Station
                  Installers
                </p>
              </li>
              <li className="first__list-item">
                <p>
                  We are the most suitable & reliable EV Charging Station
                  Installers
                </p>
              </li>
            </ul>
            <div className="row">
              <div className="col-12 mb-2 mb-lg-0 col-lg-4">
                <a
                  className="text-uppercase w-100 py-3 py-sm-2 mb-sm-0 px-4 bg-danger border-rounded d-block d-sm-inline-block ps-5 text-reset font-oswald fs-lg-18 text-decoration-none phone-link position-relative"
                  href="tel:+919311291378"
                >
                  Call Now
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <a
                  className="text-uppercase w-100 color-custom-second d-block d-sm-inline-block bg-white py-3 py-sm-2 px-3 pe-4 font-oswald fs-lg-18 position-relative locate-link text-reset text-decoration-none border-rounded"
                  href="tel:+919311291378"
                >
                  Locate A Charging Station
                </a>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-6 position-relative">
            <Image
              src="/car.png"
              alt="bg"
              width={839}
              height={580}
              className="-z-index-10 img-fluid "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
