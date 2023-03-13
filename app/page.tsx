import Link from "next/link";
import BootstrapCarousel from "./BootstrapCarousel";
import ChargingForm from "./ChargingForm";
import FirstSec from "./FirstSec";
import GuideSec from "./GuideSec";
import MyMap from "./MyMap";
import PartnersSec from "./PartnersSec";
import SolutionInfoSec from "./SolutionInfoBlock";
import StationInfoSec from "./StationInfoSec";
import VideoPlayer from "./VideoPlayer";
import WhoWeAre from "./WhoWeAre";
import Image from "next/image";
import FormPartners from "./FormPartners";
import Article from "./Article";

export default function HomePage() {
  return (
    <div>
      <FirstSec />
      <SolutionInfoSec />
      <section className="bg-light position-relative map-sec">
        <div className="container start-50 top-10 form-wrapper">
          <ChargingForm />
        </div>
        <MyMap />
      </section>
      <WhoWeAre />
      <StationInfoSec />
      <PartnersSec />
      <GuideSec />
      <BootstrapCarousel />
      <section className="sec-padding">
        <div className="container">
          <h3 className="title-primary text-center mb-5">
            glimpse <span className="text-danger">of ev drive</span>
          </h3>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <VideoPlayer url="https://www.youtube.com/watch?v=Axm5HDBw-bk" />
              <h4 className="font-oswald fs-5 fw-semibold color-darkness-second text-center mt-3">
                Green Drive 1.0
              </h4>
            </div>
            <div className="col-12 col-sm-6">
              <VideoPlayer url="https://www.youtube.com/watch?v=mQFwN0Q2nVE" />
              <h4 className="font-oswald fs-5 fw-semibold color-darkness-second text-center mt-3">
                Green Drive 2.0
              </h4>
            </div>
            <div className="col-12 col-sm-6">
              <VideoPlayer url="https://www.youtube.com/watch?v=MZ-Y7WdjFC8" />
              <h4 className="font-oswald fs-5 fw-semibold color-darkness-second text-center mt-3">
                Green Drive 4.0
              </h4>
            </div>
            <div className="col-12 col-sm-6">
              <VideoPlayer url="https://www.youtube.com/watch?v=9VXE2NCiu_s" />
              <h4 className="font-oswald fs-5 fw-semibold color-darkness-second text-center mt-3">
                Green Drive 5.0
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-padding">
        <h3 className="title-primary text-center">become our partner</h3>
        <div className="bg-darkness-second py-4">
          <div className="container">
            <div className="w-100 w-sm-50 mx-auto bg-white rounded-3 py-2 py-md-4 mb-3">
              <div className="border-start border-2 border-info px-2 px-md-4">
                <p className="text-muted mb-3">
                  If you are interested in having EV chargers at your location,
                  write to us at
                </p>
                <a
                  className="mb-3 fs-6 fs-md-4 fw-bold color-darkness-second text-decoration-none d-flex align-items-center"
                  href="tel:+919311291378"
                >
                  <Image
                    src="/icons/tel-red.svg"
                    width={30}
                    height={30}
                    alt="arrow right"
                    className="d-block me-1 me-md-3 img-fluid"
                  />
                  +91 93112 91378
                </a>
                <a
                  className="mb-3 fs-6 fs-md-4 fw-bold text-break color-darkness-second text-decoration-none d-flex align-items-center"
                  href="mailto:evinfo@aarpowersolutions.com d-block"
                >
                  <Image
                    src="/icons/gmail-red.svg"
                    width={30}
                    height={30}
                    alt="arrow right"
                    className="d-block me-1 me-md-3 img-fluid"
                  />
                  evinfo@aarpowersolutions.com
                </a>
                <Link
                  href="/"
                  className="fs-6 text-danger d-flex align-items-center text-decoration-none fw-bold"
                >
                  <Image
                    src="/icons/arrow-right-red.svg"
                    width={14}
                    height={12}
                    alt="arrow right"
                    className="d-block me-2"
                  />
                  Get Directions
                </Link>
              </div>
            </div>
            <FormPartners />
          </div>
        </div>
      </section>
      <section className="sec-padding">
        <div className="container">
          <h3 className="title-primary text-center mb-3">
            our <span className="text-danger">updates</span>
          </h3>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mb-2">
              <Article
                commentsQuantity={3}
                imgSrc="/article-1.jpg"
                published_at="Sep 22, 2022"
                text="Plug-in electric vehicles (otherwise called electric vehicles or EVs) are associated, fun, and useful. They can reduce emissions and even save your money..."
                title="Benefits of EV Charging Stations for your Business."
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-2">
              <Article
                commentsQuantity={3}
                imgSrc="/article-2.jpg"
                published_at="Sep 22, 2022"
                text="Plug-in electric vehicles (otherwise called electric vehicles or EVs) are associated, fun, and useful. They can reduce emissions and even save your money..."
                title="Benefits of EV Charging Stations for your Business."
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-2">
              <Article
                commentsQuantity={3}
                imgSrc="/article-3.jpg"
                published_at="Sep 12, 2022"
                text="Numerous reasons can answer to the question what is the need for an electric vehicle? Let us see the benefits of buying an EV."
                title="What is the need for an Electric Vehicle?"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
