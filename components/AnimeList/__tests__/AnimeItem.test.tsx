import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AnimeItem from "../AnimeItem";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} fill="true" priority="true" />;
  },
}));

describe("AnimeItem component", () => {
  it("link should contains correct href", () => {
    render(
      <AnimeItem
        id={1}
        title="dummy-title"
        date="2/21/2023"
        description="dummy-description"
        imgUrl="/dummy-image.png"
        rating="10/10"
      />
    );

    const link = screen.getByTestId("anime-link");
    expect(link).toHaveAttribute("href", "/anime/1");
  });

  it("image should contains src and alt", () => {
    render(
      <AnimeItem
        id={1}
        title="dummy-title"
        date="2/21/2023"
        description="dummy-description"
        imgUrl="/dummy-image.png"
        rating="10/10"
      />
    );

    const img = screen.getByTestId("card-image");
    expect(img).toHaveAttribute("src", "/dummy-image.png");
  });

  it("should displays title correctly", () => {
    render(
      <AnimeItem
        id={1}
        title="dummy-title"
        date="2/21/2023"
        description="dummy-description"
        imgUrl="/dummy-image.png"
        rating="10/10"
      />
    );

    const title = screen.getByTestId("card-title");
    expect(title).toHaveTextContent("dummy-title");
  });

  it("should displays description correctly", () => {
    render(
      <AnimeItem
        id={1}
        title="dummy-title"
        date="2/21/2023"
        description="dummy-description"
        imgUrl="/dummy-image.png"
        rating="10/10"
      />
    );

    const description = screen.getByTestId("card-description");
    expect(description).toHaveTextContent("dummy-description");
  });

  it("should displays rating correctly", () => {
    render(
      <AnimeItem
        id={1}
        title="dummy-title"
        date="2/21/2023"
        description="dummy-description"
        imgUrl="/dummy-image.png"
        rating="10/10"
      />
    );

    const rating = screen.getByTestId("card-rating");
    expect(rating).toHaveTextContent("10/10");
  });

  it("should displays date correctly", () => {
    render(
      <AnimeItem
        id={1}
        title="dummy-title"
        date="2/21/2023"
        description="dummy-description"
        imgUrl="/dummy-image.png"
        rating="10/10"
      />
    );

    const date = screen.getByTestId("card-date");
    expect(date).toHaveTextContent("2/21/2023");
  });
});
