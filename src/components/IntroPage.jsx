import React from "react";
import { useHistory } from "react-router-dom";

function IntroPage(props) {
  const history = useHistory();

  const start = (event) => {
    event.preventDefault();
    history.push("/simulator");
  };

  return (
    <div className="row d-flex justify-content-center p-3">
      <div class="col-lg-8">
        <div className="card text-center">
          <div className="card-body">
            <h4 className="card-title">
              Тренажер слепой печати.
            </h4>
            <p className="card-text">
              Проверь свои навыки! Убедись, что на клавиатуре выбрана русская
              раскладка и приготовься печатать. Тренажер подсчитает твою
              скорость и точность печати. Не переживай: если что-то пойдет не
              так, всегда можно попробовать заново.
            </p>
            <div class="d-grid">
              <button className="btn btn-success" type="button" onClick={start}>
                Начать печатать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
