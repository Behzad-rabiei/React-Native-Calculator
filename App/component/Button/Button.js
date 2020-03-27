import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import { theming } from "../../util/themeButton";
import { calculator } from "../../util/calculator";

class Button extends Component {
  handleOnPress = () => {
    calculator(this.props);
  };

  render() {
    const { value, type } = this.props;
    const { buttonStyle, textStyle } = theming(this.props);
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
