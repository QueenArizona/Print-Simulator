import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { textFetch } from "../redux/utils/api";
import Loader from "./Loader";
import Error from "./Error";

function SampleText(props) {
  const { text, loading, error } = useSelector((state) => state.sample);
  const { index, incorrect } = useSelector((state) => state.print);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(textFetch());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="card">
      <div className="card-body fs-5 fw-normal">
        {text.split("").map((el, idx) => (
          <span
            className={`symbol ${
              idx === index ? "text-white bg-success" : ""
            } ${idx < index ? "text-muted" : ""}
            ${incorrect && idx === index ? "text-white bg-danger" : ""}`}
            key={idx}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SampleText;
