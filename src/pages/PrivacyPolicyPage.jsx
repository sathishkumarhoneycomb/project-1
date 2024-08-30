import PrivacyPolicyBanner from "../../src/assets/images/banners/privacy_policy_banner.jpg";

import PrivacyPolicyBannerMobile from "../../src/assets/images/banners/privacy_policy_banner_mobile.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faLocationDot,faPhone,faEnvelope ,faCircle} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/general-components/Footer";

import GeneralHero from "../components/general-components/GeneralHero";







function PrivacyPolicyPage() {
    return (
        <>

<GeneralHero desktopBanner={PrivacyPolicyBanner} mobileBanner={PrivacyPolicyBannerMobile} imageAlt="Privacy Policy alpa"
      currentPath="Privacy Policy " bannerTitle="Privacy Policy"
      /> 



      <section className="privacy_policy_details_section mb-6">
        <div className="container px-4 px-md-5">
            <header className="text-center mb-5">
                        <p className="section_sub_heading color_light_gray text-uppercase fw-semibold"> Alpa India  </p>
                        <h2 className="section_heading color_dark_blue"> Privacy Policy  </h2>
            </header>

            <div className="fs-5 lh-lg" >

                <p className="text-justify mb-5"> This privacy policy sets out how Alpa india uses and protects any information that you give Alpa india when you use this website. Alpa india is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement. Alpa india may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. </p>

                <h5 className="fw-semibold text-uppercase"> What we collect </h5>
                <p> We may collect the following information: </p>
                <ul className="list-unstyled ms-md-5 mb-5">
                    <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>   Name  </li>
                    <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> Contact information including email address</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>  Demographic information such as postcode, preferences and interests  </li>
                    <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> Other information relevant to customer surveys and/or offers </li>

                </ul>

                <h5 className="fw-semibold text-uppercase"> What we do with the information we gather </h5> 
                <p> We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:

 </p>
 <ul className="list-unstyled ms-md-5 mb-5">
    <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/>  Internal record keeping. </li>
    <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> We may use the information to improve our products and services.
 </li>
 <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
 </li>
 <li> <FontAwesomeIcon icon={faArrowRight} className="color_dark_blue me-2"/> From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
 </li>
 </ul>


{/* security  */}
<h4 className="fw-semibold text-uppercase color_dark_blue mb-4"> Security </h4> 
<p> We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
 </p> 
 <p className="mb-5"> We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. </p> 
 

 <h5 className="fw-semibold text-uppercase mb-4"> How we use cookies
 </h5>
 <p> A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
 </p>
 <p> We use traffic log cookies to identify which pages are being used. This helps us analyses data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
 </p>
 <p> Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
</p>
<p className="mb-5">You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
</p>

<h5  className="fw-semibold text-uppercase mb-4">Links to other websites
 </h5>
 <p className="mb-5"> Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
</p>
<h5  className="fw-semibold text-uppercase mb-4">Controlling your personal information
</h5>
<p>You may choose to restrict the collection or use of your personal information in the following ways:
</p>
<ul className="list-unstyled ms-md-5">
    <li> <FontAwesomeIcon icon={faCircle} className="color_dark_blue me-3"/> Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes
 </li>
 <li> <FontAwesomeIcon icon={faCircle}  className="color_dark_blue me-3"/> If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at [email address]
 </li>
</ul>
<p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
</p>
<p>You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to [address].
</p>
<p className="mb-5"> If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>

{/* contacting us  */}
<h5 className="fw-semibold text-uppercase"> Contacting Us
 </h5>
 <p className="mb-5"> If there are any questions regarding this privacy policy you may contact us using the information below:

 </p>
 <div className="d-block d-md-flex gap-5">
            <div className="col">
                <div className="d-flex gap-4">


            <FontAwesomeIcon
                      className="fs-2 color_dark_blue pt-3"
                      icon={faLocationDot}
                    />

          
            <p className="text-justify"> location
Airline Pilots Association of India # C-312, 2nd Floor, North Winds Apartment, Shivanahalli, Jakkur Main Road, Yelahanka, Bangalore, Karnataka - 560 064, India </p>
</div>
</div>

                <div className="col">

                        <div className="d-flex align-items-center gap-4">
                        <FontAwesomeIcon icon={faPhone} className="fs-2 color_dark_blue" />
<p className="pt-1"> +91 6362366974 </p>

                        </div>

                        <div className="d-flex gap-4 align-items-center"> 
                        <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fs-2 color_dark_blue"
                    />
                    <p className="pt-1"> info@alpaindia.org </p> 
                        </div>

                </div>

 </div>

            </div>
            </div>


      </section>

      <Footer /> 




        </>
    )
}


export default PrivacyPolicyPage;
