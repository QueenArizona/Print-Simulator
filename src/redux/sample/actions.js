import {
  SAMPLE_TEXT_REQUEST,
  SAMPLE_TEXT_FAILURE,
  SAMPLE_TEXT_SUCCESS,
} from "./types";

export function sampleTextRequest() {
  return { type: SAMPLE_TEXT_REQUEST };
}

export function sampleTextFailure(error) {
  return { type: SAMPLE_TEXT_FAILURE, payload: { error } };
}

export function sampleTextSuccess(text) {
  return { type: SAMPLE_TEXT_SUCCESS, payload: { text } };
}
