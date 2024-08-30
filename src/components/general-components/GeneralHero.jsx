import ResNavBar from "./ResNavBar";

import { Link, NavLink } from "react-router-dom";

function GeneralHero({ desktopBanner, mobileBanner, imageAlt, currentPath, bannerTitle }) {
  return (
    <>
      <section className="inner_banner_section text-white  w-100 mb-5 ">
        <div className="position-relative">

        <img src={desktopBanner} alt={imageAlt} className="img-fluid w-100 d-none d-md-block "/> 

        <img src={mobileBanner} alt={imageAlt} className="img-fluid w-100 d-block d-md-none medium_img" />


          <div className="container">

          <div className="inner_banner_text_block   position-absolute top-50 start-50">
          
              <nav aria-label="">
        
                <ol class="breadcrumb mb-5 mb-md-4 mb-xl-5">
                    <li class="ps-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                    <li class="breadcrumb-item " aria-current="page"> {currentPath} </li>
                </ol>
                
              </nav>

              
              <h1 className="text-white text-uppercase inner_banner_heading lh-base fw-semibold">
                        {bannerTitle}
              </h1>


        </div>

        </div>
          
        </div>
      </section>
    </>
  );
}

export default GeneralHero;
