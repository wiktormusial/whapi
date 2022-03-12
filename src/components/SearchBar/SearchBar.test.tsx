import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import SearchBar from "./index";

it("Render button", () => {
  render(<Provider store={store}><SearchBar /></Provider>);
  expect(screen.getByTestId("search-button"));
});
