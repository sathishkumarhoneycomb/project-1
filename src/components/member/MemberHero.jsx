import GeneralHero from "../general-components/GeneralHero";
import MemberBanner from '../../assets/images/banners/signup-banner.jpg';




function MemberHero() {
  return (
    <>
      <GeneralHero
        path="/member-signup"
        pathName="Member sign up"
        bgPath={MemberBanner} >

        <div className="hero_main ">
          <h1 className="fw-bolder ms-lg-5 text-uppercase fw-bold lh-base page-heading">
            BECOME A MEMBER- BE A PART OF OUR ASSOCIATION
          </h1>
        </div>
        
      </GeneralHero>
    </>
  );
}

export default MemberHero;
