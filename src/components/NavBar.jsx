import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // register the callback event

    function handleSticky(e) {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    document.addEventListener("scroll", handleSticky);
    return function () {
      document.removeEventListener("scroll", handleSticky);
    };
  }, []);
  return (
    <>
      <div
        className={`hero-header-div w-100 fixed-top z-index-5 ${
          isSticky ? "bg-dark-blue" : ""
        }`}
        ref={navbarRef}
      >
        <header className="hero-header w-100  d-flex justify-content-center align-items-center gap-5 mx-auto mt-1 mb-1">
          <img
            src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
            alt="alpa india logo"
            className="logo-img bg-transparent"
          />

          <nav className="hero-nav pt-3">
            <ul className="hero-lists d-flex align-items-center justify-content-center gap-3 list-unstyled">
              <li className="hero-list-items  ">
                <NavLink to="/"> Home </NavLink>
              </li>
              <li className="hero-list-items">
                <NavLink to="/about"> About </NavLink>
              </li>
              <li className="hero-list-items">
                <NavLink to="/news"> News and Events </NavLink>
              </li>
              <li className="hero-list-items">
                <NavLink to="/benevolent-fund">Benevolent Fund</NavLink>
              </li>
              <li className="hero-list-items">
                <NavLink to="/medical-insurance">Medical Insurance</NavLink>
              </li>
              <li className="hero-list-items">
                <NavLink to="/contact"> Contact </NavLink>{" "}
              </li>
              <li className="hero-list-items">
                <NavLink to="/member-signup" className="nav-btn ">
                  Become a Member
                </NavLink>
              </li>
              <li className="hero-list-items">
                <NavLink to="login" className="nav-btn ">
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default NavBar;
