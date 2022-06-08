import {
  ADDITION,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  DIVISON,
  MULTIPLICATION,
  SUBSTRACTION,
} from "./actionType";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case COUNTER_INCREMENT: {
      state.count++;
      break;
      // return { ...state };
    }

    case COUNTER_DECREMENT: {
      state.count--;
      break;
      // return { ...state };
    }

    case ADDITION: {
      state.count = state.count + payload;
      break;
      // return { ...state };
    }

    case MULTIPLICATION: {
      state.count = state.count * payload;
      return { ...state };
    }
    case SUBSTRACTION: {
      state.count = state.count - payload;
      break;

      // return { ...state };
    }

    case DIVISON: {
      // state.count = state.count / payload;
      if (payload === 0) {
        alert("Error Division is Not Possible");
        state.count = 0;
        return { ...state };
      } else {
        state.count /= payload;
        return { ...state };
      }
    }

    default:
      return { ...state };
  }
  return { ...state };
};
