import GeneralHero from "../general-components/GeneralHero";
import AboutUsBanner from '../../assets/images/banners/about_banner.jpg';
import AboutUsBannerMobile from '../../assets/images/banners/about_banner_mobile.jpg'

import { NavLink } from "react-router-dom";
function HeroAboutUs() {
  return (
    <>
      <GeneralHero desktopBanner={AboutUsBanner} mobileBanner={AboutUsBannerMobile} imageAlt="about alpa"
      currentPath="about" bannerTitle="Bringings the voice of Indian pilots to the fore"
      /> 

    
    </>
  );
}

export default HeroAboutUs;
