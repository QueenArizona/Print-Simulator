import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearSymbolState } from "../redux/print/actions";
import Speed from "./Speed";
import Accuracy from "./Accuracy";
import success from "../img/success.svg";

function ResultPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const reload = (event) => {
    event.preventDefault();
    dispatch(clearSymbolState());
    history.push("/");
  };

  return (
    <div className="row d-flex justify-content-center p-3">
      <div className="card text-center">
        <img
          className="card-img-top align-self-center"
          src={success}
          alt="success"
          style={{ width: "5rem" }}
        />
        <div className="card-body">
          <h4 className="card-title">Поздравляем!</h4>
          <p className="card-text">
            Отличный результат. Продолжайте тренироваться!
          </p>
          <div class="d-grid">
            {" "}
            <button className="btn btn-primary" type="button" onClick={reload}>
              Попробовать еще <i class="bi bi-arrow-clockwise"></i>
            </button>
          </div>
          <div className="row g-0">
            <div className="col-md-6">
              <Speed />
            </div>
            <div className="col-md-6">
              <Accuracy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
