import Image from "next/image";
import React from "react";

type Props = {
  imgSrc: string;
  title: string;
  text: string;
  published_at: string;
  commentsQuantity: number;
};

export default function Article({
  imgSrc,
  title,
  text,
  published_at,
  commentsQuantity,
}: Props) {
  return (
    <article className="w-100 bg-white fs-6 shadow-sm">
      <Image
        alt={title}
        src={imgSrc}
        width={434}
        height={272}
        className="img-fluid w-100 d-block"
      />
      <div className="p-2 py-sm-3">
        <h4 className="fs-4 fs-sm-3 fw-bold color-darkness-second mb-2">
          Benefits of EV Charging Stations for your Business.
        </h4>
        <ul className="list-unstyled row">
          <li className="col-12 col-sm-6 col-lg-5 mb-2">
            <div className="d-flex align-items-center">
              <Image
                alt="calendar"
                src="/icons/calendar.svg"
                width={20}
                height={17}
                className="img-fluid me-2"
              />
              {published_at}
            </div>
          </li>
          <li className="col-12 col-sm-6 col-lg-4 mb-2">
            <div>
              <Image
                alt="calendar"
                src="/icons/calendar.svg"
                width={20}
                height={17}
                className="img-fluid me-2"
              />
              {commentsQuantity} coments
            </div>
          </li>
          <li className="col-12 col-sm-6 col-lg-3 mb-2">
            <div>
              <a href="#">
                <Image
                  alt="share"
                  src="/icons/share.svg"
                  width={15}
                  height={17}
                  className="img-fluid"
                />
              </a>
            </div>
          </li>
        </ul>
        <p className="text-muted">{text}</p>
        <a
          className="d-inline-flex align-items-center bg-danger fs-5 text-white text-decoration-none rounded-pill py-2 px-3"
          href="#"
        >
          Learn More{" "}
          <Image
            alt="decor arrow"
            src="/icons/arrow-white-right.svg"
            width={15}
            height={13}
            className="img-fluid ms-2 d-block"
          />
        </a>
      </div>
    </article>
  );
}
