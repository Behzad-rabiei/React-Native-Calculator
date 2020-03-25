import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const screen = Dimensions.get("window");

export default EStyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "$lightGray",
    alignItems: "center",
    justifyContent: "center",
    height: screen.width / 4 - 10,
    borderRadius: screen.width / 4,
    margin: 5
  },
  text: {
    fontSize: 20,
    color: "$white"
  }
});
