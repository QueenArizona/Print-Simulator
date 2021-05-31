import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Speed from "./Speed";
import Accuracy from "./Accuracy";
import Time from "./Time";
import { clearSymbolState } from "../redux/print/actions";
import { reload } from "../svg";

function Sidebar(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(clearSymbolState());
    history.push("/");
  };

  return (
    <aside className="info">
      <div className="card text-center">
        <div className="row g-0">
          <div className="col-sm-4 col-lg-12">
            <Speed />
          </div>
          <div className="col-sm-4 col-lg-12">
            <Accuracy />
          </div>
          <div className="col-sm-4 col-lg-12">
            <Time />
          </div>
        </div>
      </div>
      <div className="row g-0">
        <button className="btn btn-dark" type="button" onClick={handleClick}>
          Еще раз {reload}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
