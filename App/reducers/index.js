import {
  SET_CURRENT_VALUE,
  SET_PREVIOUS_VALUE,
  SET_OPERATOR
} from "../actions/actionType";

const initialState = {
  currentValue: "0",
  previousValue: null,
  operator: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_VALUE: {
      if (state.currentValue === "0") {
        return {
          currentValue: `${action.value}`
        };
      }
      return {
        currentValue: `${state.currentValue}${action.value}`
      };
    }
    case SET_PREVIOUS_VALUE: {
      return {
        previousValue: action.value
      };
    }
    case SET_OPERATOR: {
      return {
        operator: action.value
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
