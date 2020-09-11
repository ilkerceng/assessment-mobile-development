import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

interface Props {
  onChange: (e: string) => void;
}

const TextInput = (props: Props) => {
  const [value, onChangeText] = React.useState("");

  const handleChangeText = (text: string) => {
    onChangeText(text);
    props.onChange(text);
  };

  const { onChange, ...rnTextInputProps } = props;
  return (
    <RNTextInput
      {...rnTextInputProps}
      style={styles.textInput}
      onChangeText={(text: string) => handleChangeText(text)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default TextInput;
