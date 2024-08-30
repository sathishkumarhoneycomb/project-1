import GeneralHero from "../general-components/GeneralHero";
import ContactUsBanner from "../../assets/images/banners/contact_banner.jpg";
import ContactUsMobileBanner from "../../assets/images/banners/contact_banner_mobile.jpg"

import { NavLink } from "react-bootstrap";
function ContactUsHero() {
  return (
    <>
  <GeneralHero desktopBanner={ContactUsBanner} mobileBanner={ContactUsMobileBanner} imageAlt="contact alpa"
      currentPath="contact" bannerTitle="Get In Touch With Us"
      /> 
    </>
  );
}

export default ContactUsHero;
