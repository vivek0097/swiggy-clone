import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const renderHeader = () =>
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

it("Should render Header Component with a login button", () => {
  renderHeader();
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart Link", () => {
  renderHeader();
const cartIcon = screen.getByRole("link", { name: "" }); 
expect(cartIcon).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  renderHeader();

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();

  fireEvent.click(loginButton); 

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
