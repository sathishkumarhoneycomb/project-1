
import GeneralHero from "../general-components/GeneralHero";
import BenevolentFundBanner from "../../assets/images/banners/fund_banner.jpg";
import BenevolentFundMobileBanner from "../../assets/images/banners/fund_banner_mobile.jpg";


function BenevolentHero() {
  return (
    <>
  <GeneralHero desktopBanner={BenevolentFundBanner} mobileBanner={BenevolentFundMobileBanner} imageAlt="alpa benevolent fund"
      currentPath="benevolent fund" bannerTitle="Alpa Benevolent Fund"
      /> 
    </>
  );
}

export default BenevolentHero;
