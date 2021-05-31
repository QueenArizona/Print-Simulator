import React, { useState, useEffect } from "react";
import { time } from "../svg";

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
      <h5 className="card-title">{time} Время</h5>
      <p className="card-text fs-4 fw-bold text-info">{formatTime(seconds)}</p>
    </div>
  );
}

export default Time;
