import React, { useState, useEffect } from "react";

function Time(props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSeconds((prev) => (prev < 3599 ? prev + 1 : 0)),
      1000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;

    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  return (
    <div className="card-body">
      <h6 className="card-title">
        <i class="bi bi-alarm"></i> Время
      </h6>
      <p className="card-text fs-4 fw-bold text-success">
        {formatTime(seconds)}
      </p>
    </div>
  );
}

export default Time;
