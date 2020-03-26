import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import { setCurrentValue } from "../../actions/index";
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

  handleOnPress = value => {
    const { dispatch } = this.props;
    dispatch(setCurrentValue(value));
  };

  render() {
    const { value } = this.props;
    const { buttonStyle, textStyle } = this.theming();
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => this.handleOnPress(value)}
      >
        <Text style={textStyle}>{value}</Text>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => {
  const { currentValue } = state;
  return {
    currentValue
  };
};
export default connect(mapStateToProps)(Button);
