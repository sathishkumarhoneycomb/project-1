import benevolentFundBanner from "../../assets/images/banners/fund-banner.82a96099.jpg";

import GeneralHero from "../general-components/GeneralHero";

function BenevolentHero() {
  return (
    <>
      <GeneralHero
        path="/alpa-benevolent-fund"
        pathName="Benevolent Fund"
        bgPath={benevolentFundBanner}
      >
        <div className="hero_main">
          <h1 className="fw-bolder  text-uppercase fw-bold lh-base page-heading">
            Alpa Benevolent Fund
          </h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default BenevolentHero;
