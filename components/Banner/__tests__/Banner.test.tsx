import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Banner from "..";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} fill="true" priority="true" />;
  },
}));

describe("Banner component", () => {
  it("should displays title correctly", () => {
    render(
      <Banner
        title="dummy-title"
        buttonLabel="dummy-label"
        description="dummy-description"
        onClickButton={jest.fn()}
        imgUrl="/dummy-image.jpg"
        genres={[
          {
            mal_id: 1,
            name: "dummy-genre-1",
            type: "dummy-type",
            url: "/dummy-url",
          },
        ]}
        isLoading={false}
      />
    );

    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("dummy-title");
  });

  it("should displays genre correctly", () => {
    render(
      <Banner
        title="dummy-title"
        buttonLabel="dummy-label"
        description="dummy-description"
        onClickButton={jest.fn()}
        imgUrl="/dummy-image.jpg"
        genres={[
          {
            mal_id: 1,
            name: "dummy-genre-1",
            type: "dummy-type",
            url: "/dummy-url",
          },
        ]}
        isLoading={false}
      />
    );

    const genre = screen.getByTestId("genre-1");
    expect(genre).toHaveTextContent("dummy-genre-1");
  });

  it("should displays description correctly", () => {
    render(
      <Banner
        title="dummy-title"
        buttonLabel="dummy-label"
        description="dummy-description"
        onClickButton={jest.fn()}
        imgUrl="/dummy-image.jpg"
        genres={[
          {
            mal_id: 1,
            name: "dummy-genre-1",
            type: "dummy-type",
            url: "/dummy-url",
          },
        ]}
        isLoading={false}
      />
    );

    const description = screen.getByTestId("description");
    expect(description).toHaveTextContent("dummy-description");
  });

  it("should be able to hide description", () => {
    render(
      <Banner
        title="dummy-title"
        buttonLabel="dummy-label"
        onClickButton={jest.fn()}
        imgUrl="/dummy-image.jpg"
        genres={[
          {
            mal_id: 1,
            name: "dummy-genre-1",
            type: "dummy-type",
            url: "/dummy-url",
          },
        ]}
        isLoading={false}
      />
    );

    const description = screen.queryByTestId("description");
    expect(description).not.toBeInTheDocument();
  });

  it("should be able to hide button", () => {
    render(
      <Banner
        title="dummy-title"
        description="dummy-description"
        buttonLabel="dummy-label"
        imgUrl="/dummy-image.jpg"
        genres={[
          {
            mal_id: 1,
            name: "dummy-genre-1",
            type: "dummy-type",
            url: "/dummy-url",
          },
        ]}
        isLoading={false}
      />
    );

    const button = screen.queryByTestId("banner-button");
    expect(button).not.toBeInTheDocument();
  });

  it("should displays button label correctly", () => {
    render(
      <Banner
        title="dummy-title"
        description="dummy-description"
        onClickButton={jest.fn()}
        buttonLabel="dummy-label"
        imgUrl="/dummy-image.jpg"
        genres={[
          {
            mal_id: 1,
            name: "dummy-genre-1",
            type: "dummy-type",
            url: "/dummy-url",
          },
        ]}
        isLoading={false}
      />
    );

    const button = screen.getByTestId("banner-button");
    expect(button).toHaveTextContent("dummy-label");
  });

  it("image should contains alt and src", () => {
    render(
      <Banner
        title="dummy-title"
        description="dummy-description"
        onClickButton={jest.fn()}
        buttonLabel="dummy-label"
        imgUrl="/dummy-image.jpg"
        genres={[
          {
            mal_id: 1,
            name: "dummy-genre-1",
            type: "dummy-type",
            url: "/dummy-url",
          },
        ]}
        isLoading={false}
      />
    );

    const img = screen.getByTestId("image");
    expect(img).toHaveAttribute("src", "/dummy-image.jpg");
    expect(img).toHaveAttribute("alt", "dummy-title");
  });
});
