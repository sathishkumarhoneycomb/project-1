import AboutUsTextHeader from "../general-components/AboutUsTextHeader";
import Accordion from "./Accordion";
function AboutUsSection() {
  return (
    <>
      <section className="aboutpage_about_section mt-5 mb-5">
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
