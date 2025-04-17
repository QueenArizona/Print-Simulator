import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearSymbolState } from "../redux/print/actions";
import Speed from "./Speed";
import Accuracy from "./Accuracy";
import Time from "./Time";

function Sidebar(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const reload = (event) => {
    event.preventDefault();
    dispatch(clearSymbolState());
    history.push("/");
  };

  return (
    <aside className="info">
      <div className="card border-0 text-center">
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
        <div className="row g-0">
          <button
            className="btn btn-secondary rounded-0 rounded-bottom"
            type="button"
            onClick={reload}
          >
            Еще раз <i class="bi bi-arrow-clockwise"></i>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
