"use client";
import React from "react";
import Image from "next/image";

export default function FormPartners() {
  return (
    <form className="custom-form">
      <div className="row mb-3">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2 position-relative">
          <Image
            src="/icons/user-gray.svg"
            width={16}
            height={16}
            alt="user icon"
            className="d-block position-absolute left-10 top-50 translate-middle-y"
          />
          <input
            className="p-1 d-block w-100 p-2 ps-5 bg-input-secondary rounded-pill border-2 border border-light fs-6 text-white"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2 position-relative">
          <Image
            src="/icons/email-gray.svg"
            width={20}
            height={16}
            alt="user icon"
            className="d-block position-absolute left-10 top-50 translate-middle-y"
          />
          <input
            className="p-1 d-block w-100 ps-5 p-2 bg-input-secondary rounded-pill border-2 border border-light fs-6 text-white"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2 position-relative">
          <Image
            src="/icons/phone-gray.svg"
            width={16}
            height={16}
            alt="user icon"
            className="d-block position-absolute left-10 top-50 translate-middle-y"
          />
          <input
            className="p-1 d-block w-100 ps-5 p-2 bg-input-secondary rounded-pill border-2 border border-light fs-6 text-white"
            type="number"
            placeholder="Phone"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2 position-relative">
          <Image
            src="/icons/message-gray.svg"
            width={16}
            height={16}
            alt="user icon"
            className="d-block position-absolute left-10 top-50 translate-middle-y"
          />
          <input
            className="p-1 d-block w-100 ps-5 p-2 bg-input-secondary rounded-pill border-2 border border-light fs-6 text-white"
            type="text"
            placeholder="Message"
          />
        </div>
      </div>
      <button
        className="bg-custom-primary text-white w-100 w-sm-50 mx-auto py-3 rounded-pill font-popins d-flex align-items-center justify-content-center border-0"
        type="submit"
      >
        <span className="d-block me-2">Submit</span>
        <span>
          <Image
            src="/icons/arrow-white-right.svg"
            width={12}
            height={10}
            alt="arrow icon"
          />
        </span>
      </button>
    </form>
  );
}
