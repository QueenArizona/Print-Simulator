import React from "react";
import { useSelector } from "react-redux";

function Speed(props) {
  const { index, totalTime } = useSelector((state) => state.print);

  const formatSpeed = () => {
    const min = totalTime / 60000;
    return min === 0 ? 0 : Math.floor(index / min);
  };

  return (
    <div className="card-body">
      <h6 className="card-title">
        <i class="bi bi-stopwatch"></i> Скорость
      </h6>
      <p className="card-text fs-4 fw-bold text-success">
        {formatSpeed()} зн/м
      </p>
    </div>
  );
}

export default Speed;
