import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import styles from "./styles";

class Result extends Component {
  render() {
    const { currentValue } = this.props;
    return (
      <Text style={styles.result}>
        {parseFloat(currentValue).toLocaleString()}
      </Text>
    );
  }
}

// Read about toLocalString
const mapStateToProps = state => {
  const { currentValue } = state;
  return {
    currentValue
  };
};
export default connect(mapStateToProps)(Result);
