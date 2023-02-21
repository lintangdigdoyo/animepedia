import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AnimeListSkeleton from "../AnimeListSkeleton";

describe("AnimeListSkeleton component", () => {
  it("should displays the length of the list correctly", () => {
    render(<AnimeListSkeleton totalCard={4} />);
    const list = screen.getAllByTestId("skeleton-card");
    expect(list).toHaveLength(4);
  });

  it("should displays default length correctly", () => {
    render(<AnimeListSkeleton />);
    const list = screen.getAllByTestId("skeleton-card");
    expect(list).toHaveLength(5);
  });
});
