import AboutUsLists from "../general-components/AboutUsLists";
import AboutUsTextHeader from "../general-components/AboutUsTextHeader";

function AboutUs() {
  return (
    <>
    <section className="homepage_about_section mb-5">
      <div className="container">

      
      <div className="d-flex flex-column flex-lg-row  align-items-start gap-5">
        <img
          src="https://alpaindia.org/_next/static/media/aboutus_img.89e1548a.jpg"
          alt="about alpa image"
          className="image-fluid w-100"
        />

        <div>
          <AboutUsTextHeader />
          <AboutUsLists />
          <div className="d-flex  align-items-center gap-2">
            <p className="mb-0 fs-5 color_dark_blue fw-bold text-uppercase">
              Read More
            </p>
            <img src="https://alpaindia.org/_next/static/media/rightButton.2920a726.svg" className="image-fluid"/>
          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
}

export default AboutUs;
