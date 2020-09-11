import React from "react";
import renderer from "react-test-renderer";
import TextInputFormItem from ".";

const selectProps = {
  type: "input",
  caption: "E-mail",
  validator: "email",
};

describe("<text-input-form-item />", () => {
  test("match snapshot", () => {
    const tree = renderer
      .create(<TextInputFormItem onChange={() => false} {...selectProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
