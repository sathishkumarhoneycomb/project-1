import AboutUsLists from "../AboutUsLists";
import PresentPosition from "./PresentPosition";

import { useState } from "react";

function Accordion() {
  const [selected, setSelected] = useState("background");

  function handleClick(val) {
    setSelected(val);
  }

  return (
    <>
      <div className="accordionComponent">
        <div className=" text-center mb-5 ">
          <button
            className={`accordion-btn  me-4 shadow-sm   ${
              selected == "background" ? "active" : ""
            }`}
            onClick={() => {
              handleClick("background");
            }}
          >
            background
          </button>
          <button
            className={`accordion-btn shadow-sm ${
              selected == "presentation" ? "active" : ""
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
