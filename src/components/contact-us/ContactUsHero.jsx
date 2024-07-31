import GeneralHero from "../GeneralHero";

function ContactUsHero() {
  return (
    <>
      <GeneralHero path="/contact" pathName="Contact">
        <div className="hero_main">
          <h1 className="fw-bolder lg-heading">GET IN TOUCH WITH US</h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default ContactUsHero;
