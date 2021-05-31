import {
  sampleTextRequest,
  sampleTextFailure,
  sampleTextSuccess,
} from "../sample/actions";

export const textFetch = () => async (dispatch) => {
  dispatch(sampleTextRequest());
  try {
    const response = await fetch(
      "https://fish-text.ru/get?format=json&type=sentence&number=5"
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(sampleTextSuccess(data.text));
  } catch (e) {
    dispatch(sampleTextFailure(e.message));
  }
};
