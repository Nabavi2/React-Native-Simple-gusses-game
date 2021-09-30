import React from "react";
import { Text } from "react-native";
import defaultStyle from '../constants/Default-Style';
function TextBody(props) {
  return (
    <Text style={{...defaultStyle.textBody, ...props.style }}>
      {props.children}
    </Text>
  );
}

export default TextBody;
