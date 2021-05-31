import {
  SAMPLE_TEXT_FAILURE,
  SAMPLE_TEXT_REQUEST,
  SAMPLE_TEXT_SUCCESS,
} from "./types";

const initialState = {
  text: "",
  loading: false,
  error: null,
};

export default function sampleTextReducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_TEXT_REQUEST:
      return { ...state, loading: true, error: null };
    case SAMPLE_TEXT_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case SAMPLE_TEXT_SUCCESS:
      const { text } = action.payload;
      return { ...state, loading: false, error: null, text };
    default:
      return state;
  }
}
