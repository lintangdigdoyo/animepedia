import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import StreamingPlatform from "../StreamingPlatform";

describe("StreamingPlatform component", () => {
  it("should displays name correctly", () => {
    render(
      <StreamingPlatform
        platforms={[{ name: "dummy-platform", url: "/dummy-url" }]}
      />
    );
    const button = screen.getByTestId("platform-button");
    expect(button).toHaveTextContent("dummy-platform");
  });

  it("should contains svg icon", () => {
    render(
      <StreamingPlatform
        platforms={[{ name: "dummy-platform", url: "/dummy-url" }]}
      />
    );
    const button = screen.getByTestId("platform-button");
    const icon = screen.getByTestId("icon");
    expect(button).toContainElement(icon);
  });

  it("should displays the length of button correctly", () => {
    render(
      <StreamingPlatform
        platforms={[
          { name: "dummy-platform", url: "/dummy-url" },
          { name: "dummy-platform2", url: "/dummy-url2" },
        ]}
      />
    );
    const button = screen.getAllByTestId("platform-button");
    expect(button).toHaveLength(2);
  });
});
