import GeneralHero from "../general-components/GeneralHero";

function MemberHero() {
  return (
    <>
      <GeneralHero
        path="/member-signup"
        pathName="Member sign up"
        bgPath="https://alpaindia.org/_next/static/media/sign-up-banner.f867247c.jpg"
      >
        <div className="hero_main w-100">
          <h1 className="fw-bolder  text-uppercase fw-bold lh-base page-heading">
            BECOME A MEMBER- BE A PART OF OUR ASSOCIATION
          </h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default MemberHero;
