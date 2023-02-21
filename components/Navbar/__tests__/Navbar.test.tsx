import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "..";

describe("Navbar component", () => {
  it("should renders logo", () => {
    render(<Navbar />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("should contains text AnimePedia", () => {
    render(<Navbar />);
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveTextContent("AnimePedia");
  });

  it("should contains correct href link", () => {
    render(<Navbar />);
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveAttribute("href", "/");
  });
});
