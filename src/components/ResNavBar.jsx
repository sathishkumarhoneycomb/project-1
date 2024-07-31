import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function ResNavBar() {
  const [isSticky, setIsSticky] = useState(false);

  // add the event listener to the window object
  // whenever the user scrolls just apply bg-dark-blue color to the nav

  useEffect(() => {
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
  });

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg p-1 fixed-top z-index-5 ${
          isSticky ? "bg-dark-blue" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
              alt="alpa india logo"
              className="logo-img bg-transparent mx-lg-5"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-lg-center gap-lg-4 gap-sm-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  {" "}
                  about{" "}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/news" className="nav-link">
                  {" "}
                  News and Events{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/benevolent-fund" className="nav-link">
                  Benevolent Fund
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/medical-insurance" className="nav-link">
                  Medical Insurance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  {" "}
                  Contact{" "}
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                <NavLink
                  to="/member-signup"
                  className="fs-4 color-primary btn  p-1 px-2 bg-light mb-2 mb-lg-0 "
                >
                  Become a Member
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="login"
                  className="fs-4 color-primary btn p-1 px-2  bg-white"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ResNavBar;
