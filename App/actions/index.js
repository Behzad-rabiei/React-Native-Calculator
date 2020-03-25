import { SET_CURRENT_VALUE } from "./actionType";

export const setCurrentValue = number => {
  return {
    type: SET_CURRENT_VALUE,
    value: number
  };
};
