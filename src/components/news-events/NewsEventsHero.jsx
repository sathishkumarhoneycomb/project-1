
import { NavLink } from "react-router-dom";


import NewsBanner from "../../assets/images/banners/news_banner.jpg";
import NewsBannerMobile from "../../assets/images/banners/news_banner_mobile.jpg"
function NewsEventsHero() {
  return (
    <>
      <section className="news_banner_section text-white  w-100 mb-5 ">
        <div className="position-relative">

        <img src={NewsBanner} alt="news  alpa" className="image-fluid w-100 d-none d-md-block"/> 

   
        <img src={NewsBannerMobile} alt="news alpa" className="image-fluid w-100 d-block d-md-none medium_img" />


          <div className="container ">

          <div className="inner_banner_text_block   position-absolute top-50 start-50">
          <nav aria-label="">
            <ol className="breadcrumb mb-5">
                <li className="ps-2"><NavLink to="/" className="text-white text-decoration-none">Home</NavLink></li>
                <li className="breadcrumb-item " aria-current="page">News & Events </li>
            </ol>
          </nav>
          <h1 className="text-white text-uppercase inner_banner_heading lh-base fw-semibold">
          News & Events
          </h1>
        </div>

        </div>
          
        </div>
      </section>
    </>
  );
}

export default NewsEventsHero;
