import React from "react";
import { Text } from "react-native";
import defaultStyle from "../constants/Default-Style";
function TextTitle(props) {
  return (
    <Text style={{ ...defaultStyle.textTitle, ...props.style }}>
      {props.children}
    </Text>
  );
}

export default TextTitle;
