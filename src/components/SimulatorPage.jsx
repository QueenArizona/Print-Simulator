import React from "react";
import PrintInput from "./PrintInput";
import Sidebar from "./Sidebar";
import SampleText from "./SampleText";

function SimulatorPage(props) {
  return (
    <div className="row align-items-center">
      <div className="col-sm-12 col-lg-3 p-3">
        <Sidebar />
      </div>
      <div className="col-sm-12 col-lg-9 p-3">
        <div className="row position-relative overflow-hidden">
          <PrintInput />
          <SampleText />
        </div>
      </div>
    </div>
  );
}

export default SimulatorPage;
