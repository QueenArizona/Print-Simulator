import React from "react";
import { useSelector } from "react-redux";

function Accuracy(props) {
  const { text } = useSelector((state) => state.sample);
  const { errors } = useSelector((state) => state.print);

  const formatAccuracy = () => {
    const length = text.length || 100;
    const acc = 100 - (errors * 100) / length;
    return acc === Math.floor(acc) ? `${acc}%` : `${acc.toFixed(1)}%`;
  };

  return (
    <div className="card-body">
      <h5 className="card-title">
        <i class="bi bi-emoji-smile"></i> Точность
      </h5>
      <p className="card-text fs-4 fw-bold text-primary">{formatAccuracy()}</p>
    </div>
  );
}

export default Accuracy;
