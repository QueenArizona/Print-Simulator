import React from "react";
import { useSelector } from "react-redux";
import { speed } from "../svg";

function Speed(props) {
  const { index, totalTime } = useSelector((state) => state.print);

  const formatSpeed = () => {
    const min = totalTime / 60000;
    return min === 0 ? 0 : Math.floor(index / min);
  };

  return (
    <div className="card-body">
      <h5 className="card-title">{speed} Скорость</h5>
      <p className="card-text fs-4 fw-bold text-info">{formatSpeed()} зн/м</p>
    </div>
  );
}

export default Speed;
