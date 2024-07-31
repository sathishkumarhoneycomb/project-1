import AboutUsLists from "../general-components/AboutUsLists";
import AboutUsTextHeader from "../general-components/AboutUsTextHeader";

function AboutUs() {
  return (
    <>
      <section className="container d-flex flex-column flex-lg-row flex-sm-column flex-md-column align-items-start gap-5 mb-5">
        <img
          src="https://alpaindia.org/_next/static/media/aboutus_img.89e1548a.jpg"
          alt="about us image"
          className="about-us-img"
        />

        <div>
          <AboutUsTextHeader />
          <AboutUsLists />
          <div className="d-flex  align-items-center gap-2 mt-5">
            <p className="mb-0  color-primary fs-5  fw-bold text-uppercase">
              Read More
            </p>
            <img src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
