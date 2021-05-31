import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearSymbolState } from "../redux/print/actions";
import Speed from "./Speed";
import Accuracy from "./Accuracy";
import { reload } from "../svg";
import success from "../img/success.svg";

function ResultPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(clearSymbolState());
    history.push("/");
  };

  return (
    <div className="row p-4">
      <div className="card text-center">
        <div className="row">
          <div className="card-body">
            <img
              className="card-img-top"
              src={success}
              alt="success"
              style={{ width: "12rem" }}
            />
            <h5 className="card-title">Поздравляем!</h5>
            <p className="card-text">
              Отличный результат. Продолжайте тренироваться!
            </p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleClick}
            >
              Попробовать еще {reload}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Speed />
          </div>
          <div className="col-md-6">
            <Accuracy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
