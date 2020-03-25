import { SET_CURRENT_VALUE } from "../actions/actionType";

const initialState = {
  currentValue: "0"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_VALUE: {
      return {
        currentValue: action.value
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
