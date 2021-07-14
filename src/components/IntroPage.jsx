import React from "react";
import { useHistory } from "react-router-dom";
import keyboard from "../img/keyboard.svg";

function IntroPage(props) {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/simulator");
  };

  return (
    <div className="row p-3">
      <div className="card text-center">
        <div className="card-body">
          <img
            className="card-img-top"
            src={keyboard}
            alt="keyboard"
            style={{ width: "5rem" }}
          />
          <h4 className="card-title">Тренажер слепой печати.</h4>
          <p className="card-text">
            Проверь свои навыки! Убедись, что на клавиатуре выбрана русская
            раскладка и приготовься печатать. Тренажер подсчитает твою скорость
            и точность печати. Не переживай: если что-то пойдет не так, всегда
            можно попробовать заново.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleClick}
          >
            Начать печатать
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
