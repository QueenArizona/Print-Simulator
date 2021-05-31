import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sampleTextReducer from "./sample/reducer";
import printReducer from "./print/reducer";

const reducer = combineReducers({
  sample: sampleTextReducer,
  print: printReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
