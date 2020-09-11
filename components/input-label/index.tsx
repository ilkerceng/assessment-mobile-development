import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  id: string | number;
  label: string;
}

const InputLabel = ({ id, label }: Props) => {
  return (
    <View key={id}>
      <Text> {label} </Text>
    </View>
  );
};

export default InputLabel;

const styles = StyleSheet.create({});
