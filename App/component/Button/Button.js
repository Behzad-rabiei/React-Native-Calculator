import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

class Button extends Component {
  render() {
    const { text, size } = this.props;
    const buttonStyle = [styles.button];
    if (size === "Double") {
      buttonStyle.push(styles.buttonDouble);
    }
    return (
      <TouchableOpacity style={buttonStyle}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
