import * as React from "react";
import { StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Text } from "../../components/Themed";
import { FormComponent } from "./FormFactory";
import { build } from "./formBuilder";
import FormTypes from "./types";

const controlsModel = require("../../mocks/data/controls.json");

export function FormGenerator() {
  const {
    title,
    controls = [],
  }: {
    title: string;
    controls: FormTypes.FormBase[];
  } = controlsModel;

  const [errorMap, setErrorMap] = React.useState<{ [key: string]: string }>({});
  let formData = build({}, controls);

  const onValidation = (newError: { [key: string]: string }) => {
    setErrorMap({ ...errorMap, ...newError });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      {controls.map((control, index: number) => {
        return (
          <FormComponent
            key={index}
            control={control}
            formData={formData[control.caption]}
            onValidation={onValidation}
          />
        );
      })}
      <Button
        onPress={() => {
          console.log(formData);
        }}
        disabled={Object.values(errorMap).some(
          (e: string) => e && e.length > 0
        )}
        title="Gönder"
        color="#841584"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
