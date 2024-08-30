function FeatureBox() {
  return (
    <>
      <div className="feature_box ">

           {/* for first row */}
        <div className="feature_box_row row mb-5 mb-lg-2" > 
     
        <div className="feature_box_text_block col-lg-7 fs-5 lh-lg">
          <p className=" color_light_gray text-uppercase fs-6 fs-6 fw-semibold"> BENEVOLENT FUND </p>
          <h3 className="color_dark_blue"> ALPA Benevolent Fund </h3>
          <hr />

          <p >
            ALPA provides comprehensive monetory coverage and support for Indian
            pilots throughout their careers flying in India or any where in the
            world.
          </p>
          <p >
            From coverage for instances of Death, PMU, TMU, and Temporary
            Grounding (TG), to an extended age limit of 65 years, we ensure that
            our member pilots have the safety net they deserve with guaranteed
            money back policy.
          </p>

          <div className="d-flex  align-items-center gap-2 mb-4 mb-md-5">
            <p className="mb-0  color_dark_blue fs-5  fw-bold text-uppercase">
              Read More
            </p>
            <img src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg" className="image-fluid"/>
          </div>
        </div>

        <div className="feature_box_image_block col-lg-5 ">
          <img
            src="https://alpaindia.org/_next/static/media/alpa_fund.d3f79f21.png"
            alt="benevolent-fund-photo"
            className="image-fluid h-70 w-100"
          />
        </div>
      </div>
      </div>

      <div className="feature_box_row row">
        <div className="feature_box_image_block col-lg-5 mb-5">
          <img
            src="https://alpaindia.org/_next/static/media/alpa_medical.f0e47759.png"
            alt="alpa-medical-insurance"
            className="image-fluid h-70 w-100"
          />
        </div>

        <div className="feature_box_text_block col-lg-7 ps-lg-5 lh-lg fs-5">
          <p className="color_light_gray text-uppercase fs-6 fw-semibold">Insurance </p>
          <h3 className="color_dark_blue"> ALPA Medical Insurance </h3>
          <hr />

          <p >
            {" "}
            Medical Insurance Scheme of ALPA India
          </p>
          <p >
            ALPA medical insurance, for Indian pilots. Group medical insurance
            is offered to members of ALPA India through partnerships with major
            insurance companies.
          </p>
          <p >
            Please find attached the ALPA GMC policy details for the period from
            June 20, 2024, to June 19, 2025.
          </p>
          <p className="fw-semibold">
            The premium is calculated on a per-family basis. Please note the
            following guidelines for family size:{" "}
          </p>
          <ul className="ms-md-3 ">
            <li> Maximum of 6 members </li>
            <li> Self (ALPA Member) </li>
            <li> Spouse </li>
            <li> Up to 2 dependent children upto age 25 yrs </li>
            <li> Either 1 set of dependent parents or parent-in-laws </li>
            <li>
              Sum insured 3 lakhs /5 lakhs/10 lakhs/ 15 lakhs/ 25 lakhs/ 30
              lakhs
            </li>
          </ul>
          <div className="d-flex  align-items-center gap-2 my-lg-5">
            <p className="mb-0  color_dark_blue   fw-bold text-uppercase">
              Read More
            </p>
            <img src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureBox;
