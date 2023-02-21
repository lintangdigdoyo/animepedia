import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "..";

describe("Button component", () => {
  it("should renders button correctly", () => {
    const props = {
      children: <>children</>,
    };

    const { container } = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should renders button with outlined variant", () => {
    const props = {
      children: <>children</>,
    };

    const { container } = render(<Button variant="outlined" {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should renders button with contained variant", () => {
    const props = {
      children: <>children</>,
    };

    const { container } = render(<Button variant="contained" {...props} />);
    expect(container).toMatchSnapshot();
  });
});
