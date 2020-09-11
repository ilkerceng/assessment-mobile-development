import React from "react";
import renderer from "react-test-renderer";
import TextInput from "./";

describe("<text-input />", () => {
  test("match snapshot", () => {
    const tree = renderer.create(<TextInput onChange={() => false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
