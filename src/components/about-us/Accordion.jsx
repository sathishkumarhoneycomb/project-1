import AboutUsLists from "../general-components/AboutUsLists";
import PresentPosition from "./PresentPosition";

import { useState } from "react";

function Accordion() {
  const [selected, setSelected] = useState("background");

  function handleClick(val) {
    setSelected(val);
  }

  return (
    <>
      <div className="accordion_component">
        <div className=" d-flex justify-content-center mb-5 ">
          <button
            className={`accordion_btn border-0 px-3 py-2 bg-transparent  text-uppercase me-5 shadow-sm   ${
              selected == "background" ? "active fw-semibold" : ""
            }`}
            onClick={() => {
              handleClick("background");
            }}
          >
            background
          </button>
          <button
            className={`accordion_btn border-0 px-3 py-2 bg-transparent text-uppercase shadow-sm ${
              selected == "presentation" ? "active fw-semibold" : ""
            }`}
            onClick={() => {
              handleClick("presentation");
            }}
          >
            present position
          </button>
        </div>

        <div className="accordionBody">
          {/* decide which div should be selected */}

          {selected == "background" ? <AboutUsLists /> : <PresentPosition />}
        </div>
      </div>
    </>
  );
}

export default Accordion;
