// import styles from "./Offerings.module.css";
import FeatureBox from "./Feature";

function Offerings() {
  return (
    <>
      <section className="section_offerings bg_light_gray py-5 mb-5 ">
        <div className="container">
          <div className="text-center">
            <p className="section_sub_heading color_light_gray text-uppercase fw-semibold"> offerings </p>
            <h2 className=" color_dark_blue mb-5"> What We Offer?</h2>
          </div>

          <div className="fs-5 mb-5">
            <p>
              ALPA India stands for the welfare of Indian Pilots and is involved
              in the following schemes and other support for our members.
            </p>

            <ol className="offering_text_lists lh-lg ms-1 ms-md-3">
              <li>Ordinary and Benevolent Memebrship. </li>
              <li>
                Benevolent ( B/F) Scheme : PMU/Death/TMU/Temporary grounding
              </li>
              <li>
                GMC (General Medical cover ) Health Insurance for self and
                family.
              </li>
              <li>
                Consultation services to members dealing with employment,
                grounding, or regulatory issues through our expert team. Charges
                will be communicated as applicable.
              </li>
              <li>
                Provide counseling to unemployed pilots on employment
                opportunities and skill enhancement. Fees may apply.
              </li>
              <li>
                Legal services for employment or regulatory matters are
                available with applicable fees.
              </li>
            </ol>
          </div>
          <FeatureBox />
        </div>
      </section>
    </>
  );
}

export default Offerings;
