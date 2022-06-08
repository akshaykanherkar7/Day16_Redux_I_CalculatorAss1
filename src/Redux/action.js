import {
  ADDITION,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  DIVISON,
  MULTIPLICATION,
  SUBSTRACTION,
} from "./actionType";

export const increment = () => ({ type: COUNTER_INCREMENT });
export const decrement = () => ({ type: COUNTER_DECREMENT });

export const addition = (value) => ({ type: ADDITION, payload: value });
export const substraction = (value) => ({ type: SUBSTRACTION, payload: value });
export const muliplication = (value) => ({
  type: MULTIPLICATION,
  payload: value,
});
export const divide = (value) => ({ type: DIVISON, payload: value });
