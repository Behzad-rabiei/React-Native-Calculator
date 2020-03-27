import styles from "../component/Button/styles";

export const theming = props => {
  const { size, theme } = props;
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
