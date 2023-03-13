"use client";
import Image from "next/image";
import React from "react";

export default function ChargingForm() {
  return (
    <form className="bg-white rounded-3 py-3 px-4 form-charging">
      <p className="text-uppercase text-center fs-2 fs-sm-1 fw-bold font-oswald">
        Find a charging station
      </p>
      <div className="row mb-3">
        <div className="col-12 col-sm-6 col-lg-3 mb-2 position-relative">
          <Image
            src="/icons/widget.svg"
            width={21}
            height={21}
            alt="phone icon"
            className="position-absolute left-10 top-50 translate-middle-y"
          />
          <select
            className="form-select rounded-pill ps-5"
            aria-label="Default select example"
          >
            <option defaultChecked>Address, City or ZIP</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-2 position-relative">
          <Image
            src="/icons/user.svg"
            width={16}
            height={16}
            alt="phone icon"
            className="position-absolute left-10 top-50 translate-middle-y"
          />
          <select
            className="form-select rounded-pill ps-5"
            aria-label="Default select example"
          >
            <option defaultChecked>Name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-2 position-relative">
          <Image
            src="/icons/formEmail.svg"
            width={20}
            height={16}
            alt="phone icon"
            className="position-absolute left-10 top-50 translate-middle-y"
          />
          <input
            type="email"
            className="form-control rounded-pill ps-5"
            placeholder="Email"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-2 position-relative">
          <Image
            src="/icons/phoneForm.svg"
            width={16}
            height={16}
            alt="phone icon"
            className="position-absolute left-10 top-50 translate-middle-y"
          />
          <input
            type="number"
            className="form-control rounded-pill ps-5"
            placeholder="Phone"
          />
        </div>
      </div>
      <button
        className="bg-danger text-white w-100 w-sm-50 mx-auto py-3 rounded-pill font-popins d-flex align-items-center justify-content-center border-0"
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
