function AboutUs() {
  return (
    <>
      <div className="section-about-us container">
        <div className="about-us-img-div">
          <img
            src="https://alpaindia.org/_next/static/media/aboutus_img.89e1548a.jpg"
            alt="about us image"
            className="about-us-img"
          />
        </div>

        <div className="about-us-text">
          <div className="about-us-text-header">
            <span className="tertiary-heading"> About us </span>
            <h2 className="secondary-heading"> What We Stand For? </h2>
            <hr />
          </div>
          <div className="about-us-text-body">
            <h3> THE VOICE OF INDIAN PILOTS </h3>
            <p>
              <span> Introduction: </span> ALPA India is dedicated to uniting
              Indian pilots under a cohesive organization, ensuring effective
              representation and promoting safety and professional development
              in the aviation industry.
            </p>

            <ol className="about-us-text-body-lists">
              <li>
                Representation:
                <ul>
                  <li>
                    ALPA India represents Indian pilots at the International
                    Federation of Air Line Pilots’ Associations (IFALPA),
                    headquartered in Montreal, Canada.
                  </li>
                  <li>
                    It serves as a unified platform for Indian pilots,
                    regardless of their airline or geographic location.
                  </li>
                </ul>
              </li>
              <li>
                Location:
                <ul>
                  <li>
                    The organization’s registered office is based in Bangalore,
                    India.
                  </li>
                </ul>
              </li>
              <li>
                Commitment:
                <ul>
                  <li>
                    ALPA India prioritizes flight safety and supports the
                    professional growth of its members within the aviation
                    sector.
                  </li>
                  <li>
                    <span className="list-span span-bold">Welfare</span>
                    <span className="span-bold"> Monetary Support:</span> ALPA
                    India provides financial assistance to members in times of
                    need, demonstrating its commitment to their welfare.​​​​
                  </li>
                  <li>
                    <span className="span-bold"> Other Support:</span> Beyond
                    monetary aid, the organization offers various forms of
                    support, such as legal advice and career development
                    resources.
                  </li>
                </ul>
              </li>
              <li>
                International:
                <ul>
                  <li>
                    ALPA India is a proud member of IFALPA, contributing
                    actively to global initiatives on aviation safety and pilot
                    welfare.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="btn-read-div">
              <p className="btn-read"> Read More </p>
              <img src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
