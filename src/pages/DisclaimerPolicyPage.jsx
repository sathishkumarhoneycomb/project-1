import DisclaimerPolicyBanner from "../../src/assets/images/banners/disclaimer_policy_banner.jpg";
import DisclaimerPolicyBannerMobile from "../../src/assets/images/banners/disclaimer_policy_banner_mobile.jpg"

import GeneralHero from "../components/general-components/GeneralHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/general-components/Footer";




function DisclaimerPolicyPage() {
    return (
        <>

        
<GeneralHero desktopBanner={DisclaimerPolicyBanner} mobileBanner={DisclaimerPolicyBannerMobile} imageAlt="Disclaimer Policy alpa"
      currentPath="Disclaimer Policy" bannerTitle="Disclaimer Policy"
      /> 


      <section className="disclaimer_policy_details_section mb-6">
       <div className="container px-md-5">
        
       
        <header className="text-center mb-5">
            <p className="section_sub_heading color_light_gray text-uppercase fw-semibold"> Alpa India </p>
            <h2 className="section_heading color_dark_blue "> Disclaimer Policy </h2>
        </header>


        <div className="fs-5 ">
            <ul className="list-unstyled lh-lg">
                <li className="mb-3"> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> The information contained in this website is for general information purposes only. The information is provided by [business name] and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
</li>
<li className="mb-3"> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arise out of, or in connection with, the use of this website.
</li>
<li className="mb-3"> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>Through this website you are able to link to other websites which are not under the control of [business name]. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
</li>
<li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>Every effort is made to keep the website up and running smoothly. However, [business name] takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
</li>
            </ul>
        </div>

        </div>




      </section>

      <Footer />


        </>
    )
}


export default DisclaimerPolicyPage;
