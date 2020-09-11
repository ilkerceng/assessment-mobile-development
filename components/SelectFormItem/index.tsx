import React from "react";
import { StyleSheet } from "react-native";
import InputLabel from "../input-label";
import Select from "../select";
import FormTypes from "../../screens/Forms/types";

interface Props extends FormTypes.Choice {
  key: number | string;
  formData: any;
  onValidation: (e: { [key: string]: string }) => void;
}

const SelectFormItem = (props: Props) => {
  const onChange = (value: any[]) => {
    props.formData.value = value;
  };

  const { formData, caption, items, ...selectProps } = props;
  const itemsAsArray: FormTypes.ChoiceSelectItem[] = Object.entries(items).map(
    ([id, value]): FormTypes.ChoiceSelectItem => ({
      id,
      name: value,
    })
  );

  return (
    <>
      <InputLabel id={props.caption} label={props.caption} />
      <Select onChange={onChange} items={itemsAsArray} {...selectProps} />
    </>
  );
};

export default SelectFormItem;

const styles = StyleSheet.create({});
