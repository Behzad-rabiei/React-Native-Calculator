import {
  SET_CURRENT_VALUE,
  SET_PREVIOUS_VALUE,
  SET_OPERATOR,
  CLEAR_VALUE
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
          ...state,
          currentValue: `${action.value}`
        };
      }
      return {
        ...state,
        currentValue: `${state.currentValue}${action.value}`
      };
    }
    case SET_PREVIOUS_VALUE: {
      return {
        ...state,
        previousValue: action.value
      };
    }
    case SET_OPERATOR: {
      return {
        ...state,
        operator: action.value
      };
    }
    case CLEAR_VALUE: {
      return {
        ...state,
        currentValue: "0"
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
