import AboutUsTextHeader from "./AboutUsTextHeader";

function AboutUsLists() {
  return (
    <>
      <div className="about-us-text">
        <div className="about-us-text-body">
          <h5 className="mb-4 fw-bold"> THE VOICE OF INDIAN PILOTS </h5>
          <p className="fs-5 lh-lg mb-4">
            <span className="fw-bold me-1"> Introduction: </span> ALPA India is
            dedicated to uniting Indian pilots under a cohesive organization,
            ensuring effective representation and promoting safety and
            professional development in the aviation industry.
          </p>

          <ol className="about-us-text-body-lists ms-3 fs-5">
            <li className="mb-3">
              <span className="fw-bold mb-2 d-block"> Representation: </span>

              <ul className="lh-lg ">
                <li>
                  ALPA India represents Indian pilots at the International
                  Federation of Air Line Pilots’ Associations (IFALPA),
                  headquartered in Montreal, Canada.
                </li>
                <li>
                  It serves as a unified platform for Indian pilots, regardless
                  of their airline or geographic location.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <span className="fw-bold mb-2 d-block"> Location: </span>
              <ul className="lh-lg ">
                <li>
                  The organization’s registered office is based in Bangalore,
                  India.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <span className="fw-bold mb-2 d-block"> Commitment: </span>
              <ul className="lh-lg ">
                <li>
                  ALPA India prioritizes flight safety and supports the
                  professional growth of its members within the aviation sector.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <span className="fw-bold mb-2 d-block">Welfare</span>
              <ul className="lh-lg ">
                <li>
                  <span> Monetary Support:</span> ALPA India provides financial
                  assistance to members in times of need, demonstrating its
                  commitment to their welfare.​​​​
                </li>
                <li>
                  <span> Other Support:</span> Beyond monetary aid, the
                  organization offers various forms of support, such as legal
                  advice and career development resources.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <span className="fw-bold mb-2 d-block"> International: </span>
              <ul className="lh-lg ">
                <li>
                  ALPA India is a proud member of IFALPA, contributing actively
                  to global initiatives on aviation safety and pilot welfare.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default AboutUsLists;
