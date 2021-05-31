import {
  CORRECT_SYMBOL_MARK,
  INCORRECT_SYMBOL_MARK,
  CLEAR_SYMBOL_STATE,
} from "./types";

export function correctSymbolMark() {
  return { type: CORRECT_SYMBOL_MARK };
}

export function incorrectSymbolMark() {
  return { type: INCORRECT_SYMBOL_MARK };
}

export function clearSymbolState() {
  return { type: CLEAR_SYMBOL_STATE };
}
