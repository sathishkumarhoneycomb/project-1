import GeneralHero from "../general-components/GeneralHero";

function ContactUsHero() {
  return (
    <>
      <GeneralHero
        path="/contact"
        pathName="Contact"
        bgPath="https://alpaindia.org/_next/static/media/contact-banner.5ea462a7.jpg"
      >
        <div className="hero_main">
          <h1 className="fw-bolder lg-heading text-uppercase fw-bold lh-base page-heading">
            GET IN TOUCH WITH US
          </h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default ContactUsHero;
