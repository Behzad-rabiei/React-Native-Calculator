import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

class Button extends Component {
  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
