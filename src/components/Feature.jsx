function FeatureBox() {
  return (
    <>
      <div className="section-feature">
        <div className="container">
          <div className="feature-box">
            {/* for first row */}
            <div>
              {/* for content   */}

              <p className="tertiary-heading"> BENEVOLENT FUND </p>
              <h2 className="secondary-heading"> ALPA BENEVOLENT FUND </h2>
              <hr />

              <p>
                ALPA provides comprehensive monetory coverage and support for
                Indian pilots throughout their careers flying in India or any
                where in the world.
              </p>
              <p>
                From coverage for instances of Death, PMU, TMU, and Temporary
                Grounding (TG), to an extended age limit of 65 years, we ensure
                that our member pilots have the safety net they deserve with
                guaranteed money back policy.
              </p>
              <div className="btn-read-div">
                <p className="btn-read"> Read More </p>
                <img
                  src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg"
                  className="readMoreIcon"
                />
              </div>
            </div>
            <div>
              <img
                src="https://alpaindia.org/_next/static/media/alpa_fund.d3f79f21.png"
                alt="benevolent-fund-photo"
                className="featureBoxImg"
              />
            </div>
          </div>

          <div className="feature-box">
            {/* for second row */}
            <div>
              {/* for image   */}
              <img
                src="https://alpaindia.org/_next/static/media/alpa_medical.f0e47759.png"
                alt="alpa-medical-insurance"
              />
            </div>
            <div>
              {/* for content  */}

              <p className="tertiary-heading">INSURANCE </p>
              <h2 className="secondary-heading"> ALPA Medical Insurance </h2>
              <hr />

              <p className="p-sm"> Medical Insurance Scheme of ALPA India</p>
              <p className="p-sm">
                ALPA medical insurance, for Indian pilots. Group medical
                insurance is offered to members of ALPA India through
                partnerships with major insurance companies.
              </p>
              <p className="p-sm">
                Please find attached the ALPA GMC policy details for the period
                from June 20, 2024, to June 19, 2025.
              </p>
              <p className="p-sm">
                The premium is calculated on a per-family basis. Please note the
                following guidelines for family size:{" "}
              </p>
              <ul className="feature-box-list">
                <li> Maximum of 6 members </li>
                <li> Self (ALPA Member) </li>
                <li> Spouse </li>
                <li> Up to 2 dependent children upto age 25 yrs </li>
                <li> Either 1 set of dependent parents or parent-in-laws </li>
                <li>
                  {" "}
                  Sum insured 3 lakhs /5 lakhs/10 lakhs/ 15 lakhs/ 25 lakhs/ 30
                  lakhs
                </li>
              </ul>
              <div className="btn-read-div">
                <p className="btn-read"> Read More </p>
                <img
                  src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg"
                  className="readMoreIcon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureBox;
