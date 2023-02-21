import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Section from "../Section";

describe("Section component", () => {
  it("should displays title correctly", () => {
    const props = {
      children: "children",
      title: "dummy-title",
    };

    render(<Section {...props} />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("dummy-title");
  });

  it("should be able to hide title", () => {
    const props = {
      children: "children",
    };

    render(<Section {...props} />);
    const title = screen.queryByTestId("title");
    expect(title).not.toBeInTheDocument();
  });

  it("should renders children correctly", () => {
    const props = {
      children: "children",
    };

    render(<Section {...props} />);
    const section = screen.getByTestId("section");
    expect(section).toHaveTextContent("children");
  });
});
