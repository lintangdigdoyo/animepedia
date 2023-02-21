import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Layout from "..";

describe("Layout component", () => {
  it("should renders layout correctly", () => {
    const props = {
      children: <>children</>,
    };

    const { container } = render(<Layout {...props} />);
    expect(container).toMatchSnapshot();
  });
});
