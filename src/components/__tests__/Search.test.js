import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/Store";
import "@testing-library/jest-dom";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(20);

  // console.log(shimmer);
});

test("Restaurants Should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});

test("search for string(food) on homepage search", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor (() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");

  fireEvent.change(input,{
    target: {
        value: "Biryani",
    },
  });
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(1);
});
