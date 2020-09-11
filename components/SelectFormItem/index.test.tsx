import React from "react";
import renderer from "react-test-renderer";
import SelectFormItem from "./";

const selectProps = {
  type: "multi",
  multiple: true,
  caption: "Filtre",
  items: {
    type: "multi",
    multiple: true,
    caption: "Filtre",
    items: {
      "0": "Havuz",
      "1": "Spor Salonu",
    },
  },
};

describe("<Select />", () => {
  test("match snapshot", () => {
    const tree = renderer
      .create(
        <SelectFormItem
          key={"test"}
          onValidation={() => false}
          formData={{}}
          {...selectProps}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
