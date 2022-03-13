import { render, screen } from "@testing-library/react";
import Icon from "../Icon";

it("Renders valid node", () => {
  render(<Icon weather="09n" />);
  expect(screen.getByTestId("09n"));
});
