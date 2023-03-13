import React from "react";
import Image from "next/image";

export default function StationInfoSec() {
  return (
    <section className="sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4 className="text-uppercase fs-2 fs-sm-1 font-oswald font-bold">
              advantages of using charging
              <span className="text-danger d-block w-100">
                stations provided by aargo
              </span>
            </h4>

            <div className="row">
              <div className="col-12 col-sm-6 mb-3">
                <div className="bg-light py-3 px-3 border-start border-info border-2 h-100">
                  <h6 className="text-uppercase font-oswald fw-medium fs-4">
                    avant-garde
                  </h6>
                  <p>Can be customized as per consumer needs</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-3">
                <div className="bg-light py-3 px-3 border-start border-info border-2 h-100">
                  <h6 className="text-uppercase font-oswald fw-medium fs-4">
                    free support
                  </h6>
                  <p>24*7 Support, Easily available</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-3">
                <div className="bg-light py-3 px-3 border-start border-info border-2 h-100">
                  <h6 className="text-uppercase font-oswald fw-medium fs-4">
                    high quality
                  </h6>
                  <p>
                    Well-Engineered to meet the needs of businesses, retail,
                    government, and different organizations
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-3">
                <div className="bg-light py-3 px-3 border-start border-info border-2 h-100">
                  <h6 className="text-uppercase font-oswald fw-medium fs-4">
                    smart connected
                  </h6>
                  <p>
                    Available at key catchment areas in the city/on highways to
                    create a steady futuristic business.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="bg-light py-3 px-3 border-start border-info border-2 h-100">
                  <h6 className="text-uppercase font-oswald fw-medium fs-4">
                    best in-class
                  </h6>
                  <p>
                    Available at key catchment areas in the city/on highways to
                    create a steady futuristic business.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="bg-light py-3 px-3 border-start border-info border-2 h-100">
                  <h6 className="text-uppercase font-oswald fw-medium fs-4">
                    free support
                  </h6>
                  <p>
                    The intensity of charging at 350 kW is the ability to stop,
                    drink an espresso, and go
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 position-relative">
            <Image
              src="/man.jpg"
              fill
              alt="man"
              className="d-none d-md-block mh-100 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
