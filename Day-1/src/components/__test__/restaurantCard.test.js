import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MOCK_DATA from "../mocks/resCardMockData.json";

it("should render res card with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Ghar Ka Khana - Since 2005");
  expect(name).toBeInTheDocument();
});
