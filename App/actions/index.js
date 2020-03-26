import {
  SET_CURRENT_VALUE,
  SET_PREVIOUS_VALUE,
  SET_OPERATOR,
  CLEAR_VALUE
} from "./actionType";

export const setCurrentValue = number => {
  return {
    type: SET_CURRENT_VALUE,
    value: number
  };
};

export const setPreviousValue = number => {
  return {
    type: SET_PREVIOUS_VALUE,
    value: number
  };
};

export const setOperator = operator => {
  return {
    type: SET_OPERATOR,
    value: operator
  };
};

export const clearValue = () => {
  return {
    type: CLEAR_VALUE
  };
};
