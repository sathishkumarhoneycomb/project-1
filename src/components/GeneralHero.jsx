import ResNavBar from "./ResNavBar";

import { NavLink } from "react-router-dom";

function GeneralHero({ path, pathName, children }) {
  return (
    <>
      <section className="text-white position-relative w-100 mb-5 ">
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
              <NavLink to={path} className="text-decoration-none text-white">
                {" "}
                {pathName}{" "}
              </NavLink>{" "}
            </li>
          </ul>
          {children}
        </div>
      </section>
    </>
  );
}

export default GeneralHero;
