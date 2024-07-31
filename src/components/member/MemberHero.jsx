import GeneralHero from "../GeneralHero";

function MemberHero() {
  return (
    <>
      <GeneralHero path="/member-signup" pathName="Member sign up">
        <div className="hero_main ">
          <h1 className="lg-heading fw-bolder">
            {" "}
            BECOME A MEMBER- BE A PART OF OUR ASSOCIATION
          </h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default MemberHero;
