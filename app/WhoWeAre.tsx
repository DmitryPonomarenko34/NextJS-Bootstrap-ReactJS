import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="sec-padding">
      <div className="container">
        <h3 className="mx-auto text-uppercase color-darkness-second text-wrap fs-3 fs-sm-1 text-max-900 text-center font-oswald fw-bold mb-3">
          <span>We are the leading developer and installer of {""}</span>
          <span className="w-100 d-block text-danger">
            modern electric {""}
          </span>
          <span>vehicle charging systems</span>
        </h3>
        <p>
          AARGO EV SMART, a new division launched by AAR POWER SOLUTION
          envisions to build a robust ecosystem of electric mobility – ‘Electric
          Vehicles Charging Stations – EVCS ‘. The charging station
          infrastructure is the backbone of the electric mobility vision of the
          country. The aim is to contribute towards reducing the carbon
          footprint and contribute towards sustainable development of the
          economy. AAR Power solution has an exclusive partnership with ABB, a
          global leader, and pioneer of electric mobility solutions to design,
          install, and service electric vehicle charging infrastructure in the
          country.
        </p>
      </div>
      <div className="container-custom">
        <div className="row px-2">
          <div className="col-12 col-sm-6 col-xl-3 px-0">
            <div className="bg-custom-second px-2 px-sm-3 py-3 py-sm-4 h-100 d-flex flex-column justify-content-center">
              <div className="row text-center text-sm-start">
                <div className="col-12 col-sm-4 mb-2 mb-sm-0">
                  <Image
                    src="/icons/home.svg"
                    width={95}
                    height={95}
                    alt="home icon"
                    className="d-block mx-auto mx-sm-0"
                  />
                </div>
                <div className="col-12 col-sm-8 text-white ps-sm-3">
                  <h4 className="font-oswald fw-medium fs-4">Home</h4>
                  <p>Get charging station for your home.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3 px-0">
            <div className="bg-custom-primary px-2 px-sm-3 py-3 py-sm-4 h-100 d-flex flex-column justify-content-center">
              <div className="row text-center text-sm-start">
                <div className="col-12 col-sm-4 mb-2 mb-sm-0">
                  <Image
                    src="/icons/powerPlant.svg"
                    width={95}
                    height={95}
                    alt="home icon"
                    className="d-block mx-auto mx-sm-0"
                  />
                </div>
                <div className="col-12 col-sm-8 text-white ps-sm-3">
                  <h4 className="font-oswald fw-medium fs-4">Workplace</h4>
                  <p>Get charging stations for staffs and visitors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3 px-0">
            <div className="bg-danger px-2 px-sm-3 py-3 py-sm-4 h-100 d-flex flex-column justify-content-center">
              <div className="row text-center text-sm-start">
                <div className="col-12 col-sm-4 mb-2 mb-sm-0">
                  <Image
                    src="/icons/car.svg"
                    width={95}
                    height={95}
                    alt="home icon"
                    className="d-block mx-auto mx-sm-0"
                  />
                </div>
                <div className="col-12 col-sm-8 text-white ps-sm-3">
                  <h4 className="font-oswald fw-medium fs-4">Fleet</h4>
                  <p>Electrify your fleet with our smart Charging Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3 px-0">
            <div className="bg-custom-second px-2 px-sm-3 py-3 py-sm-4 h-100 d-flex flex-column justify-content-center">
              <div className="row text-center text-sm-start">
                <div className="col-12 col-sm-4 mb-2 mb-sm-0">
                  <Image
                    src="/icons/chargingStation.svg"
                    width={95}
                    height={95}
                    alt="home icon"
                    className="d-block mx-auto mx-sm-0"
                  />
                </div>
                <div className="col-12 col-sm-8 text-white ps-sm-3">
                  <h4 className="font-oswald fw-medium fs-4">
                    Retails & Dealership
                  </h4>
                  <p>Attract EV owners with chargers in your premisses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
