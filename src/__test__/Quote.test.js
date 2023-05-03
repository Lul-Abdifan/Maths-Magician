import React from "react";
import renderer from "react-test-renderer";
import Quote from "../components/Quote";

describe("Quote", () => {
  test("Renders", () => {
    const component = renderer.create(<Quote />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});