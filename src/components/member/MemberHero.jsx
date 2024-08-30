import { NavLink } from 'react-router-dom';

import GeneralHero from '../general-components/GeneralHero';
import MemberBanner from '../../assets/images/banners/signup_banner.jpg';
import MemberBannerMobile from "../../assets/images/banners/signup_banner_mobile.jpg";







function MemberHero() {
  return (
    <>
<GeneralHero desktopBanner={MemberBanner} mobileBanner={MemberBannerMobile} imageAlt="alpa member "
      currentPath="Become Member" bannerTitle="Become a Member- Be a part of our Association"
      /> 
    </>
  );
}

export default MemberHero;
