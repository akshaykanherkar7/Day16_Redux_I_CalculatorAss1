import {
  ADDITION,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  DIVISON,
  MULTIPLICATION,
  SUBSTRACTION,
} from "./actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      state.count++;
      return { ...state };
    }

    case COUNTER_DECREMENT: {
      state.count--;
      return { ...state };
    }

    case ADDITION: {
      state.count = state.count + action.payload;
      return { ...state };
    }

    case MULTIPLICATION: {
      state.count = state.count * action.payload;
      return { ...state };
    }
    case SUBSTRACTION: {
      state.count = state.count - action.payload;
      return { ...state };
    }

    case DIVISON: {
      state.count = state.count / action.payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
