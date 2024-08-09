import GeneralHero from "../general-components/GeneralHero";
import ContactUsBanner from "../../assets/images/banners/contact-banner.jpg";

function ContactUsHero() {
  return (
    <>
      <GeneralHero
        path="/contact"
        pathName="Contact"
        bgPath={ContactUsBanner}
      >
        <div className="hero_main">
          <h1 className="fw-bolder ms-lg-5 lg-heading text-uppercase fw-bold lh-base page-heading">
            GET IN TOUCH WITH US
          </h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default ContactUsHero;
