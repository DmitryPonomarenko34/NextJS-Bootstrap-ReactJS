import Image from "next/image";
import React from "react";

export default function SolutionInfoSec() {
  return (
    <div className="sec-padding">
      <div className="container">
        <div className="bg-darkness-second text-white pb-5 border-rounded-second">
          <div className="decor-el">
            <Image
              className="img-fluid d-block mx-auto w-25 w-sm-100"
              src="/abb.png"
              width={322}
              height={170}
              alt="abb"
            />
          </div>
          <p className="text-transform-uppercase fz-lot font-oswald fw-bold text-center mt-4">
            Integrated solutions with{" "}
            <span className="color-custom-primary">abb chargers</span>
          </p>
        </div>
      </div>
    </div>
  );
}
