import OurVisionCards from "./OurVisionCards";

function OurVision() {
  return (
    <>
      <section className="section_our_vision py-5 mb-5 ">
        <div className="container">

        <header className="text-center">
          <p className="section_sub_heading color_light_gray fw-semibold text-uppercase"> Our company vision </p>
          <h2 className="color_dark_blue "> Vision </h2>
        </header>


        <div className="d-flex flex-column  flex-lg-row  gap-5">
          <OurVisionCards headingTitle="Technical">
            <ul className="lh-lg">
              <li className="mb-2">
                <span className="fw-bold"> Inclusivity: </span> Aim to enroll
                all Indian pilots as members of ALPA
              </li>
              <li className="mb-2">
                <span className="fw-bold">Support : </span> Provide enhanced
                monetary coverage and comprehensive support systems for
                ALPA-India members.
              </li>

              <li className="mb-2">
                <span className="fw-bold"> Advocacy : </span> Establish
                effective liaison with DGCA and MOCA to advocate for improved
                working conditions of pilots in India.
              </li>
              <li className="mb-2">
                <span className="fw-bold"> Global : </span>
                Address key issues through IFALPA, advocating for our members'
                interests at ICAO to elevate global aviation standards.
              </li>
            </ul>
          </OurVisionCards>

          <OurVisionCards headingTitle="Pilot Welfare">
            <p className="lh-lg">
              ALPA India stands for the welfare of Indian Pilots and is involved
              in the following schemes and other support for our memebrs.{" "}
            </p>

            <ol className="lh-lg">
              <li className=""> Ordinary and Benevolent Memebrship. </li>
              <li>
                {" "}
                Benevolent ( B/F) Scheme :Monetary support due
                PMU/Death/TMU/Temporary grounding{" "}
              </li>
              <li>
               
                GMC (General Medical cover ) Health Insurance for self and
                family
              </li>
              <li>
                {" "}
                Consultation services to members dealing with employment,
                grounding, or regulatory issues through our expert team.{" "}
              </li>
              <li>
                {" "}
                Counseling to unemployed pilots on employment opportunities and
                skill enhancement.{" "}
              </li>
              <li> Legal services for employment or regulatory matters . </li>
            </ol>
          </OurVisionCards>
        </div>
        </div>
      </section>
    </>
  );
}

export default OurVision;
