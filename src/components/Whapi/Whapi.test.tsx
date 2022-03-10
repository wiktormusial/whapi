import { render, screen } from "@testing-library/react";
import Whapi from "./index";

it("renders one input", () => {
  render(<Whapi />);
  expect(screen.getByTestId("search-bar"));
});
