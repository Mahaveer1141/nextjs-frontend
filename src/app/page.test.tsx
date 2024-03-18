import { render } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders succesfully", () => {
    render(<Home />);
  });
});
