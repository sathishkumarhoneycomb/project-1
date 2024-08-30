import TcBanner from "../../src/assets/images/banners/tc_banner.jpg";
import TcBannerMobile from "../../src/assets/images/banners/tc_banner_mobile.jpg"

import GeneralHero from "../components/general-components/GeneralHero";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


import Footer from "../components/general-components/Footer";



function TcPage() {
    return (
        <>  

<GeneralHero desktopBanner={TcBanner} mobileBanner={TcBanner} imageAlt="Terms and conditions alpa"
      currentPath="Terms & Conditions" bannerTitle="Terms and Conditions"
      /> 


        <section className="terms_and_conditions_section mb-6">

            <div className="container">

                    <header className="text-center mb-5">

                    <p className="section_sub_heading color_light_gray text-uppercase fw-semibold"> Terms and conditions for  </p>
                    <h2 className="section_heading color_dark_blue"> ALPA Membership </h2>

                    </header>

                    <div>

                        <ul className="list-unstyled lh-lg fs-5 terms_and_condition_lists">
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>  Membership of ALPA India is for professional Pilots of Indian origin only. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> ALPA India membership is subject to approval of the executive committee. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> ALPA India membership can be continued beyond the age of 65 as well. </li> 
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> If accepted, ALPA India will convey acceptance of your membership, to the email id provided by you, in the enrollment form. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> ALPA India will assign a unique id for each member. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> In case of no notification from ALPA INDIA by 30 days, you can consider your membership accepted and get in touch with the office for your unique ID. </li> 
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> ALPA India reserves the right to refuse membership to any individual without assigning any reason whatsoever. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>  Members of Alpa India agree to abide by the rules and regulation of ALPA India, as are inforce and amended form time to time. </li> 
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> Membership may be terminated for any reason as mentioned in the Bylaws of the society. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> Initial membership fees are accepted in cheque only drawn in favor of ALPA INDIA payable at Bengaluru India. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> Subsequent year’s fees may be paid by Cheque, DD, cash, online transfer or any other electronic format as notified from time to time by ALPA INDIA.  </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> Any legal action brought about against ALPA India would be within the jurisdiction of the High court of Karnataka.  </li> 
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> I certify that all information provided by me to ALPA INDIA are true and correct to the best of my knowledge. </li>
                                <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> I agree to abide by the rules, regulation of ALPA INDIA as are I force and amended for time to time. </li>



                        </ul>




                    </div>





            </div>

        </section>

        <Footer /> 
        




        
    

        
        </>
    )
}


export default TcPage;
