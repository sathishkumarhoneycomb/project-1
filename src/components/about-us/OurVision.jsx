import OurVisionCards from "./OurVisionCards";

function OurVision() {
  return (
    <>
      <section className="sectionOurVision">
        <header className="container text-center">
          <p className="tertiary-heading"> Our company vision </p>
          <h2 className="secondary-heading"> Vision </h2>
        </header>
        <div className="container d-flex flex-column  flex-lg-row flex-md-column flex-sm-column gap-5  ">
          <OurVisionCards headingTitle="Technical">
            <ul className=" lh-lg fs-5_5">
              <li>
                <span className="fw-bold"> Inclusivity: </span> Aim to enroll
                all Indian pilots as members of ALPA
              </li>
              <li>
                <span className="fw-bold">Support : </span> Provide enhanced
                monetary coverage and comprehensive support systems for
                ALPA-India members.
              </li>

              <li>
                <span className="fw-bold"> Advocacy : </span> Establish
                effective liaison with DGCA and MOCA to advocate for improved
                working conditions of pilots in India.
              </li>
              <li>
                <span className="fw-bold"> Global : </span>
                Address key issues through IFALPA, advocating for our members'
                interests at ICAO to elevate global aviation standards.
              </li>
            </ul>
          </OurVisionCards>

          <OurVisionCards headingTitle="Pilot Welfare">
            <p className="lh-lg  fs-5_5">
              ALPA India stands for the welfare of Indian Pilots and is involved
              in the following schemes and other support for our memebrs.{" "}
            </p>

            <ol className="fs-5_5 lh-lg">
              <li> Ordinary and Benevolent Memebrship. </li>
              <li>
                {" "}
                Benevolent ( B/F) Scheme :Monetary support due
                PMU/Death/TMU/Temporary grounding{" "}
              </li>
              <li>
                {" "}
                GMC (General Medical cover ) Health Insurance for self and
                family.{" "}
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
      </section>
    </>
  );
}

export default OurVision;
