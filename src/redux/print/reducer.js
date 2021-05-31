import {
  CLEAR_SYMBOL_STATE,
  CORRECT_SYMBOL_MARK,
  INCORRECT_SYMBOL_MARK,
} from "./types";

const initialState = {
  index: 0,
  incorrect: false,
  errors: 0,
  lastTime: 0,
  totalTime: 0,
};

export default function printReducer(state = initialState, action) {
  switch (action.type) {
    case CORRECT_SYMBOL_MARK:
      const time = new Date().getTime();
      if (state.lastTime === 0) {
        return {
          ...state,
          incorrect: false,
          index: state.index + 1,
          lastTime: time,
        };
      } else {
        return {
          ...state,
          incorrect: false,
          index: state.index + 1,
          totalTime: state.totalTime + time - state.lastTime,
          lastTime: time,
        };
      }
    case INCORRECT_SYMBOL_MARK:
      return { ...state, incorrect: true, errors: state.errors + 1 };
    case CLEAR_SYMBOL_STATE:
      return initialState;
    default:
      return state;
  }
}
