function FeatureBox() {
  return (
    <>
      <div className="feature-box mt-5  row mb-lg-5">
        {/* for first row */}
        <div className="feature-box-text col-7 pe-lg-5">
          <p className="tertiary-heading"> BENEVOLENT FUND </p>
          <h2 className="secondary-heading"> ALPA BENEVOLENT FUND </h2>
          <hr />

          <p className="fs-5 lh-lg">
            ALPA provides comprehensive monetory coverage and support for Indian
            pilots throughout their careers flying in India or any where in the
            world.
          </p>
          <p className="fs-5 lh-lg">
            From coverage for instances of Death, PMU, TMU, and Temporary
            Grounding (TG), to an extended age limit of 65 years, we ensure that
            our member pilots have the safety net they deserve with guaranteed
            money back policy.
          </p>
          <div className="d-flex  align-items-center gap-2 mt-2">
            <p className="mb-0  color-primary fs-5  fw-bold text-uppercase">
              Read More
            </p>
            <img src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg" />
          </div>
        </div>

        <div className="feature-box-img col-5">
          <img
            src="https://alpaindia.org/_next/static/media/alpa_fund.d3f79f21.png"
            alt="benevolent-fund-photo"
            className="feature-img"
          />
        </div>
      </div>

      <div className="row ">
        <div className="feature-box-img col-5">
          <img
            src="https://alpaindia.org/_next/static/media/alpa_medical.f0e47759.png"
            alt="alpa-medical-insurance"
            className="feature-img"
          />
        </div>

        <div className="feature-box-text col-7 ps-lg-5">
          <p className="tertiary-heading">INSURANCE </p>
          <h2 className="secondary-heading"> ALPA Medical Insurance </h2>
          <hr />

          <p className="mb-0 fs-5 lh-lg  ">
            {" "}
            Medical Insurance Scheme of ALPA India
          </p>
          <p className="mb-0 fs-5 lh-lg">
            ALPA medical insurance, for Indian pilots. Group medical insurance
            is offered to members of ALPA India through partnerships with major
            insurance companies.
          </p>
          <p className="mb-0 fs-5 lh-lg ">
            Please find attached the ALPA GMC policy details for the period from
            June 20, 2024, to June 19, 2025.
          </p>
          <p className="mb-0 fs-5 lh-lg ">
            The premium is calculated on a per-family basis. Please note the
            following guidelines for family size:{" "}
          </p>
          <ul className="offering-lists fs-5 mt-3 ms-3 lh-lg">
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
            <p className="mb-0  color-primary fs-5  fw-bold text-uppercase">
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
