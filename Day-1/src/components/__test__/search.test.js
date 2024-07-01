// * Integration Testing - Testing Search Feature => which includes many components

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockrestaurantList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React, { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search ResList for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByAltText("res-logo");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-box");

  fireEvent.change(searchInput, {
    target: { value: "burger" },
  });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByAltText("res-logo");

  expect(cardsAfterSearch.length).toBe(3);
});

it("should filter Top-Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByAltText("res-logo");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top rated Restaurant",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByAltText("res-logo");
  expect(cardsAfterFilter.length).toBe(13);
});
