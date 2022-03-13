import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { correctSymbolMark, incorrectSymbolMark } from "../redux/print/actions";

function PrintInput(props) {
  const { index } = useSelector((state) => state.print);
  const { text } = useSelector((state) => state.sample);
  const history = useHistory();
  const dispatch = useDispatch();
  const input = React.createRef();

  const handleBlur = useCallback(
    (event) => {
      input.current.focus();
    },
    [input]
  );

  useEffect(() => {
    handleBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePress = (event) => {
    if (
      event.charCode === text.charCodeAt(index) ||
      (event.key === "е" && text[index] === "ё")
    ) {
      dispatch(correctSymbolMark());
      if (index === text.length - 1) {
        history.push("/result");
      }
    } else {
      dispatch(incorrectSymbolMark());
    }
  };

  return (
    <input
      className="form-control form-control-sm position-absolute visually-hidden"
      type="text"
      placeholder="Печатай тут"
      aria-label=".form-control-sm example"
      onKeyPress={handlePress}
      onBlur={handleBlur}
      ref={input}
    />
  );
}

export default PrintInput;
