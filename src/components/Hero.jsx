import alpaLogo from "../assets/images/alpa-logo.jpeg";

function Hero() {
  return (
    <>
      <div id="section-hero">
        <div className="hero-header-div">
          <header className="hero-header">
            <div className="hero-logo-div">
              <img
                src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
                alt="alpa india logo"
                className="logo-img"
              />
            </div>

            <nav className="hero-nav">
              <ul className="hero-lists">
                <li> Home </li>
                <li> About </li>
                <li>News and Events </li>
                <li> Benevolent Fund </li>
                <li> Medical Insurance </li>
                <li> Contact </li>
              </ul>
            </nav>
            <div className="btns">
              <li className="nav-btn"> Become a Member </li>
              <li className="nav-btn"> Login </li>
            </div>
          </header>
        </div>

        <main className="hero-main">
          <h1 className="primary-heading"> GIVING PILOTS A VOICE </h1>
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
