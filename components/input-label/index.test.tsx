import React from "react";
import renderer from "react-test-renderer";
import InputLabel from "./index";

describe("<input-label />", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<InputLabel id={1} label={"test"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("has 1 child", () => {
    const tree = renderer.create(<InputLabel />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
