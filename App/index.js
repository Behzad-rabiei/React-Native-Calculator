import React from "react";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import store from "./config/store";
import Home from "./screens/Home";

EStyleSheet.build({
  $black: "#060606",
  $white: "#fff",
  $lightGray: "#333333",
  $royalblue: "#d2691e",
  $lightslategrey: "#a6a6a6"
});

export default () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
