// import styles from "./Offerings.module.css";
import FeatureBox from "./Feature";

function Offerings() {
  return (
    <>
      <div className="section-offering">
        <div className="offering_section container">
          <div className="offering-text-header">
            <p className="tertiary-heading"> offerings </p>
            <h1 className="secondary-heading"> What We Offer?</h1>
          </div>

          <div className="offering-text-body">
            <p>
              ALPA India stands for the welfare of Indian Pilots and is involved
              in the following schemes and other support for our members.
            </p>

            <ol className="offering-text-lists">
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
        </div>
        <FeatureBox />
      </div>
    </>
  );
}

export default Offerings;
