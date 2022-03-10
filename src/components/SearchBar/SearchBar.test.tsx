import { render, screen } from "@testing-library/react";
import SearchBar from "./index";

it("Render button", () => {
  render(<SearchBar />);
  expect(screen.getByTestId("search-button"));
});
