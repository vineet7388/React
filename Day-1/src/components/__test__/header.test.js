import Header from "../Header";
import { fireEvent,render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Header testing", () => {
    beforeAll(()=>{
        console.log("before All")
    })
    beforeEach(()=>{
        console.log("before Each")
    })
    afterAll(()=>{
        console.log("after All")
    })
    afterEach(()=>{
        console.log("after Each")
    })
  it("should load header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const login = screen.getByRole("button",{name:"Login"})
    expect(login).toBeInTheDocument()
  });
  it("should load header component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const login = screen.getByText(/Cart/)
    expect(login).toBeInTheDocument()
  });

  it("should change login to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const login = screen.getByRole("button",{name:"Login"})
    fireEvent.click(login)
    const logout = screen.getByRole("button",{name:"Logout"})
    expect(logout).toBeInTheDocument()
  });
});
