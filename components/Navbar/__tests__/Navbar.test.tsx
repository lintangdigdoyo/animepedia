import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "..";

describe("Navbar component", () => {
  it("should renders logo", () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("logo");
    expect(navbar).toBeInTheDocument();
  });

  it("should contains text AnimePedia", () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("logo");
    expect(navbar).toHaveTextContent("AnimePedia");
  });
});
