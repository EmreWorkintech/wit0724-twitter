/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { myStore } from "../store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import userEvent from "@testing-library/user-event";

import App from "../App.jsx";
import UserContextProvider from "../contexts/UserContext.jsx";
import { beforeEach } from "vitest";

const queryClient = new QueryClient();

beforeEach(() => {
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Provider store={myStore}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </UserContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
});

describe("Login Form", () => {
  it("opens feed page after login", async () => {
    //Arrange beforeEach ile yaptık.

    //Act
    const user = userEvent.setup();

    const emailInput = screen.getByTestId("login-form-email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button");

    await user.type(emailInput, "emre@wit.com.tr");
    await user.type(passwordInput, "123456789");
    await user.click(submitButton);

    //assert
    const headings = await screen.findAllByText("Home");

    expect(headings).toHaveLength(2);
    //screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
