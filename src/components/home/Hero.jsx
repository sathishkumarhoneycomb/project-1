import ResNavBar from "../general-components/ResNavBar";
import HomeBanner from "../../assets/images/banners/home-banner.jpg";
import HomeBannerMobile from "../../assets/images/banners/home_banner_mobile.jpg";



function Hero() {
  return (
    <>
      <div className="section_hero position-relative w-100 mb-5">
      
       <img src={HomeBanner} alt="alpa india banner" className="img-fluid w-100 d-none d-md-block" /> 
        
        <img src={HomeBannerMobile} alt="main banner" className="img-fluid w-100 d-block d-md-none "  /> 

        
        <main className="banner_text_block  position-absolute start-50 top-50 translate-middle text-white text-center">
          <h1 className="banner_heading fw-bold">
            GIVING PILOTS A VOICE
          </h1>
          <h4 className="banner_sub_heading px-md-5 lh-lg">
            Airline Pilots&apos; Association of India (ALPA India) aims to bring
            all Indian pilots under one roof. As an organization, ALPA India
            represents Indian pilots at the International Federation of Air Line
            Pilots&apos; Associations (IFALPA).
          </h4>
        </main>
       
      </div>3``
    </>
  );
}

export default Hero;
