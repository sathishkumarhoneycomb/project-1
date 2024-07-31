import ResNavBar from "../ResNavBar";
import { NavLink } from "react-router-dom";

function HeroAboutUs() {
  return (
    <>
      <section className="about-us-hero text-white position-relative w-100">
        <ResNavBar />
        <div className="banner">
          <ul className="breadcrumb">
            <li>
              <NavLink to="/" className="text-decoration-none text-white">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/about" className="text-decoration-none text-white">
                {" "}
                About{" "}
              </NavLink>{" "}
            </li>
          </ul>

          <div className="hero_main">
            <h1 className="fw-bolder lg-heading">
              BRINGINGS THE VOICE OF INDIAN PILOTS TO THE FORE
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroAboutUs;
