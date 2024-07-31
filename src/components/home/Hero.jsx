import NavBar from "../NavBar";
import ResNavBar from "../ResNavBar";

function Hero() {
  return (
    <>
      <ResNavBar />
      <div className="section-hero position-relative w-100 mb-5">
        <main className="hero-main text-white">
          <h1 className="primary-heading fw-bold "> GIVING PILOTS A VOICE </h1>
          <p className="hero-description">
            Airline Pilots' Association of India (ALPA India) aims to bring all
            Indian pilots under one roof. As an organization, ALPA India
            represents Indian pilots at the International Federation of Air Line
            Pilots’ Associations (IFALPA).
          </p>
        </main>
      </div>
    </>
  );
}

export default Hero;
