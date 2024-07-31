import NavBar from "../NavBar";
import ResNavBar from "../general-components/ResNavBar";

function Hero() {
  return (
    <>
      <div className="section-hero position-relative w-100 mb-5">
        <main className="hero-main">
          <h1 className="title-heading text-white fw-bold">
            GIVING PILOTS A VOICE
          </h1>
          <p className="hero-description lh-lg">
            Airline Pilots&apos; Association of India (ALPA India) aims to bring
            all Indian pilots under one roof. As an organization, ALPA India
            represents Indian pilots at the International Federation of Air Line
            Pilots&apos; Associations (IFALPA).
          </p>
        </main>
      </div>
    </>
  );
}

export default Hero;
