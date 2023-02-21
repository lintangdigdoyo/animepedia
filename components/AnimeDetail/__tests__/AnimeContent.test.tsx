import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AnimeContent from "../AnimeContent";

describe("AnimeContent component", () => {
  it("should displays content correctly", () => {
    render(<AnimeContent content="dummy-content" />);
    const content = screen.getByTestId("content");
    expect(content).toHaveTextContent("dummy-content");
  });
});
