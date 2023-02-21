import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AnimeCharacters from "../AnimeCharacters";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} fill="true" priority="true" />;
  },
}));

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: [
        {
          character: {
            mal_id: 1,
            url: "dummy-url",
            images: {
              jpg: {
                image_url: "/dummy-image.png",
              },
              webp: {
                image_url: "/dummy-image",
              },
            },
            name: "dummy-name",
          },
          role: "dummy-role",
        },
      ],
    },
  }),
}));

describe("AnimeCharacters component", () => {
  it("image should contains src and alt", () => {
    render(<AnimeCharacters id="dummy-id" />);
    const img = screen.getByTestId("image-1");
    expect(img).toHaveAttribute("src", "/dummy-image");
    expect(img).toHaveAttribute("alt", "dummy-name");
  });

  it("should displays name correctly", () => {
    render(<AnimeCharacters id="dummy-id" />);
    const name = screen.getByTestId("name-1");
    expect(name).toHaveTextContent("dummy-name");
  });

  it("should displays role correctly", () => {
    render(<AnimeCharacters id="dummy-id" />);
    const role = screen.getByTestId("role-1");
    expect(role).toHaveTextContent("dummy-role");
  });
});
