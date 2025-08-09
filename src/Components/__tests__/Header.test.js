import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Shoud render Header Component with a login button, ", () => {
    render(
      <BrowserRouter>
       <Provider store={AppStore}>
            <Header />
        </Provider>
        </BrowserRouter> 
);

 const loginButton = screen.getByRole("button");
//  const loginButton = screen.getByText("Login");
 expect(loginButton).toBeInTheDocument();
});


