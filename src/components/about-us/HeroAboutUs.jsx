import GeneralHero from "../general-components/GeneralHero";

function HeroAboutUs() {
  return (
    <>
      <GeneralHero
        path="/about"
        pathName="About"
        bgPath="https://alpaindia.org/_next/static/media/about_us_banner.95049a88.jpg"
      >
        <div className="hero_main">
          <h1 className="fw-bolder  ms-lg-5 text-uppercase fw-bold lh-base page-heading">
            Bringings the voice of Indian pilots to the fore
          </h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default HeroAboutUs;
