import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import {
  setCurrentValue,
  setPreviousValue,
  setOperator,
  clearValue
} from "../../actions/index";
import styles from "./styles";

class Button extends Component {
  theming = () => {
    const { size, theme } = this.props;
    const buttonStyle = [styles.button];
    const textStyle = [styles.text];
    if (size === "double") {
      buttonStyle.push(styles.buttonDouble);
    }
    if (theme === "top") {
      buttonStyle.push(styles.topButton);
      textStyle.push(styles.topText);
    } else if (theme === "right") {
      buttonStyle.push(styles.rightButton);
    }
    return {
      buttonStyle,
      textStyle
    };
  };

  handleOnPress = (value, type) => {
    const { dispatch, currentValue, previousValue, operator } = this.props;

    if (type === "number") {
      dispatch(setCurrentValue(value));
    } else if (type === "operator") {
      dispatch(setOperator(value));
      dispatch(setPreviousValue(currentValue));
      dispatch(clearValue());
    } else if (type === "equal") {
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousValue);
      if (operator === "+") {
        this.resetStates();
        dispatch(setCurrentValue(current + previous));
      } else if (operator === "-") {
        this.resetStates();
        dispatch(setCurrentValue(previous - current));
      } else if (operator === "/") {
        this.resetStates();
        dispatch(setCurrentValue(previous / current));
      } else if (operator === "x") {
        this.resetStates();
        dispatch(setCurrentValue(previous * current));
      }
    }
  };

  resetStates = () => {
    const { dispatch } = this.props;
    dispatch(clearValue());
    dispatch(setPreviousValue(null));
    dispatch(setOperator(null));
  };

  render() {
    const { value, type } = this.props;
    const { buttonStyle, textStyle } = this.theming();
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => this.handleOnPress(value, type)}
      >
        <Text style={textStyle}>{value}</Text>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => {
  const { currentValue, previousValue, operator } = state;
  return {
    currentValue,
    previousValue,
    operator
  };
};
export default connect(mapStateToProps)(Button);
