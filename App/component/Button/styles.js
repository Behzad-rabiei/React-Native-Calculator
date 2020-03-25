import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const screen = Dimensions.get("window");

export default EStyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "$lightGray",
    alignItems: "center",
    justifyContent: "center",
    height: Math.floor(screen.width / 4 - 10),
    borderRadius: Math.floor(screen.width / 4),
    margin: 5
  },
  buttonDouble: {
    flex: 0,
    width: screen.width / 2 - 10,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  topButton: {
    backgroundColor: "$lightslategrey"
  },
  rightButton: {
    backgroundColor: "$royalblue"
  },
  text: {
    fontSize: 20,
    color: "$white"
  },
  topText: {
    color: "$black"
  }
});
