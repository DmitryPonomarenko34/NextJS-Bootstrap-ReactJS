import Image from "next/image";

export default function GuideSec() {
  return (
    <section className="sec-padding">
      <div className="container">
        <h2 className="title-primary text-center mb-3 mb-lg-5">
          Discover Chargers{" "}
          <span className="color-custom-primary">On-the-Go</span>
        </h2>
        <div className="row">
          <div className="d-none d-lg-block col-6 mr-lg-4 mr-0 position-relative">
            <Image
              src="/phones.png"
              alt="phones"
              fill
              className="img-fluid mh-100 h-auto object-scale-down"
            />
          </div>
          <div className="col-12 col-lg-6">
            <ol className="custom-list-ol mb-3 list-unstyled">
              <li className="mb-2 mb-lg-3 fs-lg-5">
                View real-time charger availability
              </li>
              <li className="mb-2 mb-lg-3 fs-lg-5">
                Monitor your charging session
              </li>
              <li className="mb-2 mb-lg-3 fs-lg-5">Earn rewards by charging</li>
              <li className="mb-2 mb-lg-3 fs-lg-5">View session summary</li>
              <li className="mb-2 mb-lg-3 fs-lg-5">Reserve an AARGO charger</li>
              <li className="mb-2 mb-lg-3 fs-lg-5">
                Contact the AARGO Charging Crew
              </li>
            </ol>
            <a
              className="d-inline-flex rounded-pill align-items-center px-3 py-2 bg-custom-second text-white text-decoration-none fw-700 fs-5"
              href="#"
            >
              <Image
                src="/icons/download-ic.svg"
                alt="download ic"
                width={25}
                height={26}
                className="me-2 d-block"
              />
              <span className="d-block">Download The App</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
