import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import Error from "../index";

it("Error is not rendering, when is no errors", () => {
  render(
    <Provider store={store}>
      <Error />
    </Provider>
  );

  const classList = screen.getByTestId("error").classList.toString();

  expect(classList).toContain("error-display-false");
});
