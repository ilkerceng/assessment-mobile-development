import React from "react";
import renderer from "react-test-renderer";
import Select from "../select";

const selectProps = {
  type: "multi",
  multiple: true,
  caption: "Filtre",
  items: [
    {
      id: 1,
      name: "Havuz",
    },
    {
      id: 2,
      name: "Spor Salonu",
    },
  ],
};

describe("<Select />", () => {
  test("match snapshot", () => {
    const tree = renderer.create(<Select {...selectProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
