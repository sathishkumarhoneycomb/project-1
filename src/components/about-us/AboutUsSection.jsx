import AboutUsTextHeader from "../AboutUsTextHeader";
import Accordion from "./Accordion";
function AboutUsSection() {
  return (
    <>
      <section className="aboutUsSection mt-5 mb-5">
        <div className="container">
          <div className="text-center">
            <AboutUsTextHeader />
          </div>

          <Accordion />
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
