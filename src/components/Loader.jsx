import React from "react";

function Loader(props) {
  return (
    <div className="d-flex justify-content-center text-light">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
