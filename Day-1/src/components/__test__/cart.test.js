import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import React from "react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </BrowserRouter>
      </Provider>
    );
  });
  const accordionsHeader = screen.getByText(/Drinks/);
  fireEvent.click(accordionsHeader);
  const foodItems = screen.getAllByTestId("fooditems");
  expect(foodItems.length).toBe(10);

  expect(screen.getByText("Cart - (0)")).toBeInTheDocument()
  const addBtn = screen.getAllByText("Add +");
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1)")).toBeInTheDocument()
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2)")).toBeInTheDocument()

  const foodItemsIncludingCart = screen.getAllByTestId("fooditems");
  expect(foodItemsIncludingCart.length).toBe(12);
  
});
