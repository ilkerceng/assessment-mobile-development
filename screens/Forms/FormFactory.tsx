import React from "react";
import SelectFormItem from "../../components/SelectFormItem";
import TextInputFormItem from "../../components/TextInputFormItem";
import FormTypes from "./types";

const FormMap: {
  [key: string]: React.ElementType<any>;
} = {
  choice: SelectFormItem,
  input: TextInputFormItem,
  multi: SelectFormItem,
};

interface Props {
  key: number | string;
  control: FormTypes.FormBase;
  formData: any;
  onValidation: (e: { [key: string]: string }) => void;
}

export const FormComponent = (props: Props) => {
  const { type, ...otherControlAttributes } = props.control;
  const Component = FormMap[type];

  return (
    <Component
      {...otherControlAttributes}
      formData={props.formData}
      onValidation={props.onValidation}
    />
  );
};
