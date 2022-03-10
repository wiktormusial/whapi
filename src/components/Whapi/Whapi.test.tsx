import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import Whapi from "./index";


it("renders one input", () => {
  render(<Provider store={store}><Whapi /></Provider>);
  expect(screen.getByTestId("search-bar"));
});
