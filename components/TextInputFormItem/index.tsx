import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import InputLabel from "../input-label";
import TextInput from "../text-input";
import { validate } from "../../utils/validations";

const TextInputFormItem = (props) => {
  const {
    formData,
    caption,
    validator,
    onValidation,
    ...textInputProps
  } = props;

  const [errors, setErrors] = useState({
    [caption]: {
      message: "",
    },
  });

  useEffect(() => {
    if (validator) {
      validateInput("");
    }
    return () => {};
  }, []);

  useEffect(() => {
    onValidation({ field: errors[caption].message });
    return () => {};
  }, [errors]);

  const validateInput = (value: string) => {
    let validateResult = {
      [caption]: {
        message: validate(value, validator),
      },
    };
    setErrors(validateResult);
    onValidation({ field: errors[caption].message });
  };

  const onChange = (value: string) => {
    formData.value = value;
    validateInput(value);
  };

  return (
    <>
      <InputLabel id={caption} label={caption} />
      <TextInput onChange={onChange} {...textInputProps} />
      {errors[caption].message ? (
        <Text style={styles.validationText}>{errors[caption].message}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  validationText: {
    color: "red",
  },
});

export default TextInputFormItem;
