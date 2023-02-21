import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Statistic from "../Statistic";

describe("Statistic component", () => {
  it("should displays title correctly", () => {
    render(<Statistic text="dummy-text" title="dummy-title" />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("dummy-title");
  });

  it("should renders icon", () => {
    render(<Statistic text="dummy-text" title="dummy-title" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should displays text correctly", () => {
    render(<Statistic text="dummy-text" title="dummy-title" />);
    const content = screen.getByTestId("content");
    expect(content).toHaveTextContent("dummy-text");
  });
});
