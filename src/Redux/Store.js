import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

let initialState = {
  count: 0,
  input_value: 0,
};

export const store = legacy_createStore(reducer, initialState);
