function Footer() {
  return (
    <>
      <footer className="section-footer text-white pb-1">
        <div className="footer row gap-4 ms-4 pt-5 ">
          {/* first div  */}
          <div className="footer-card col-3 ">
            <img
              src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
              alt="alpa logo"
            />
            <p className="fs-5 lh-lg mt-4 ">
              ALPA India is an organization that unites pilots from all airlines
              and aviation in general. The membership is open presently.
            </p>
          </div>
          {/* ----------------------------------------- */}

          {/* second div  */}
          <div className="col-2">
            <h5 className="text-uppercase mb-5"> QUICK LINKS </h5>

            <ul className="fs-5 list-unstyled ms-4 lh-lg">
              <li> About </li>
              <li> News & Events </li>
              <li> Benevolent Fund </li>
              <li> Medical Insurance </li>
              <li> Contact </li>
            </ul>
          </div>
          {/* ----------------------------------------- */}

          {/* third div  */}
          <div className="footer-card col-2">
            <h5 className="text-uppercase mb-5"> POLICIES </h5>

            <ul className="fs-5 list-unstyled ms-4 lh-lg">
              <li> Terms & Conditions</li>
              <li> Privacy Policy </li>
              <li> Disclaimer Policy </li>
            </ul>
          </div>
          {/* ----------------------------------------- */}

          {/* fourth div  */}
          <div className="footer-card col-2">
            <h5 className="text-uppercase mb-5">PARTNER LOGIN</h5>

            <ul className="fs-5 list-unstyled ms-4 lh-lg">
              <li> Pilot Login</li>
              <li>ALPA Admin </li>
              <li> Medical Panel Login</li>
            </ul>
          </div>

          {/* ----------------------------------------- */}

          {/* fifth div  */}
          <div className="footer-card col-2">
            <h5 className="text-uppercase mb-5"> EMAIL ADDRESS</h5>

            <ul className="fs-5 list-unstyled ms-4 lh-lg ">
              <li>
                <img
                  src="https://alpaindia.org/_next/static/media/email_icon.1e34b855.svg"
                  alt="mail svg "
                />
                <a
                  href="mailto:Office@alpaindia.org"
                  className="text-white text-decoration-none ms-2"
                >
                  Office@alpaindia.org
                </a>
              </li>
              <li>
                <img
                  src="https://alpaindia.org/_next/static/media/email_icon.1e34b855.svg"
                  alt="mail svg "
                />

                <a
                  href="mailto:info@alpaindia.org"
                  className="text-white text-decoration-none ms-2"
                >
                  {" "}
                  info@alpaindia.org{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* ----------------------------------------- */}
        </div>
        <hr />
        <div className="d-flex justify-content-between ms-2 me-2">
          <p>
            Copyright © {new Date().getFullYear()} ALPA India | All Rights
            Reserved
          </p>
          <div>
            <p> Designed by Honeycomb Creative Support </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
