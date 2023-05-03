import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/Button";

describe("Button", () => {
  test("Renders", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
