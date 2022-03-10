import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import List from "../index";

it("Render empty list", () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );

  expect(screen.getByTestId('list-empty'))
});
