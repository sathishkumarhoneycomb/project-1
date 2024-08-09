import GeneralHero from "../general-components/GeneralHero";
import AboutUsBanner from '../../assets/images/banners/aboutus-banner.jpg';

function HeroAboutUs() {
  return (
    <>
      <GeneralHero
        path="/about"
        pathName="About"
        bgPath={AboutUsBanner}
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
