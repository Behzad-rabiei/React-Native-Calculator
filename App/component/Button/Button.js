import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

class Button extends Component {
  render() {
    const { text, size, theme } = this.props;
    const buttonStyle = [styles.button];
    const textStyle = [styles.text];
    if (size === "Double") {
      buttonStyle.push(styles.buttonDouble);
    }
    if (theme === "Top") {
      buttonStyle.push(styles.topButton);
      textStyle.push(styles.topText);
    } else if (theme === "Right") {
      buttonStyle.push(styles.rightButton);
    }
    return (
      <TouchableOpacity style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
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
