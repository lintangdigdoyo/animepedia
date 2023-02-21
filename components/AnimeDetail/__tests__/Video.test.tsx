import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Video from "../Video";

describe("Video component", () => {
  it("should renders video lazily", () => {
    render(<Video title="dummy-title" youtubeId="dummy-id" />);
    const video = screen.queryByTestId("iframe-video");
    expect(video).not.toBeInTheDocument();
  });
});
