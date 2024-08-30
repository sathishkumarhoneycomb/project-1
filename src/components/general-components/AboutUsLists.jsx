import AboutUsTextHeader from "./AboutUsTextHeader";

function AboutUsLists() {
  return (
    <>
      <div className="about_text_block">
       
          <h5 className="text-uppercase fw-bold mb-4"> The voice of Indian Pilots </h5>
          <p className="fs-5 lh-lg mb-4">
            <span className="fw-semibold  me-1"> Introduction: </span> ALPA India is
            dedicated to uniting Indian pilots under a cohesive organization,
            ensuring effective representation and promoting safety and
            professional development in the aviation industry.
          </p>

          <ol className="about_text_lists ms-3 fs-5 lh-lg">
            <li className="mb-3">
              <span className="fw-semibold"> Representation: </span>

              <ul className="">
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
              <span className="fw-semibold"> Location: </span>
              <ul className="">
                <li>
                  The organization’s registered office is based in Bangalore,
                  India.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <span className="fw-semibold mb-2"> Commitment: </span>
              <ul className="">
                <li>
                  ALPA India prioritizes flight safety and supports the
                  professional growth of its members within the aviation sector.
                </li>
              </ul>
            </li>
            <li className="mb-3">
              <span className="fw-semibold mb-2">Welfare</span>
              <ul>
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
            <li className="mb-5">
              <span className="fw-semibold mb-2"> International: </span>
              <ul>
                <li>
                  ALPA India is a proud member of IFALPA, contributing actively
                  to global initiatives on aviation safety and pilot welfare.
                </li>
              </ul>
            </li>
          </ol>
        </div>
   
    </>
  );
}

export default AboutUsLists;
