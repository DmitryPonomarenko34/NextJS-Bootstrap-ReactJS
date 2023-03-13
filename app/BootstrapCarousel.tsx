"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

export default function BootstrapCarousel() {
  const [mounted, toggleMount] = useState(false);

  useEffect(() => {
    toggleMount(true);
  }, []);

  return (
    <section className="sec-padding">
      <div className="position-relative bg-decor-pseudo text-white py-5">
        <Image src="/hand.jpg" fill alt="bg image" className="-z-index-10" />
        <div className="container">
          <p className="text-uppercase font-oswald fw-medium fs-5 text-center color-darkness-second">
            12+ years experience
          </p>
          <h4 className="title-primary text-center mb-5">
            customers say <span className="color-custom-primary">about us</span>
          </h4>
          {mounted && (
            <Carousel
              indicators={false}
              interval={null}
              nextIcon={
                <span aria-hidden="true" className="custom-arrow">
                  <Image
                    alt="arrow next"
                    src="/icons/arrow-next.svg"
                    width={32}
                    height={31}
                  />
                </span>
              }
              prevIcon={
                <span aria-hidden="true" className="custom-arrow">
                  <Image
                    alt="arrow next"
                    src="/icons/arrow-prev.svg"
                    width={32}
                    height={31}
                  />
                </span>
              }
            >
              <CarouselItem>
                <div className="w-75 d-flex justify-content-center align-items-center mx-auto bg-opacity-border py-2 py-sm-5 min-h-200 mb-3 mb-sm-5">
                  <p className="w-100 w-sm-75 mx-auto text-center fs-5 px-3 px-sm-5 text-custom-width">
                    Absolutely fantastic experience at the AARGO Charger. I also
                    received free charging as the 111th customer. Thanks.
                  </p>
                </div>
                <div className="d-flex justify-content-center aling-items-center text-custom-width mx-auto">
                  <Image
                    src="/icons/user-vector.svg"
                    width={38}
                    height={38}
                    alt="user icon"
                    className="me-2"
                  />
                  <p className="fs-5 fst-italic fw-bold mb-0">
                    Dr. Kishor Rajurkar
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-75 d-flex justify-content-center align-items-center mx-auto bg-opacity-border py-2 py-sm-5 min-h-200 mb-3 mb-sm-5">
                  <p className="w-100 w-sm-75 mx-auto text-center fs-5 px-3 px-sm-5 text-custom-width">
                    Absolutely fantastic experience at the AARGO Charger. I also
                    received free charging as the 111th customer. Thanks.
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center text-custom-width mx-auto">
                  <Image
                    src="/icons/user-vector.svg"
                    width={38}
                    height={38}
                    alt="user icon"
                    className="me-2"
                  />
                  <p className="fs-5 fst-italic fw-bold mb-0">
                    Dr. Kishor Rajurkar
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-75 d-flex justify-content-center align-items-center mx-auto bg-opacity-border py-2 py-sm-5  min-h-200 mb-3 mb-sm-5">
                  <p className="w-100 w-sm-75 mx-auto text-center fs-5 px-3 px-sm-5 text-custom-width">
                    Absolutely fantastic experience at the AARGO Charger. I also
                    received free charging as the 111th customer. Thanks.
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center text-custom-width mx-auto">
                  <Image
                    src="/icons/user-vector.svg"
                    width={38}
                    height={38}
                    alt="user icon"
                    className="me-2"
                  />
                  <p className="fs-5 fst-italic fw-bold mb-0">
                    Dr. Kishor Rajurkar
                  </p>
                </div>
              </CarouselItem>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
