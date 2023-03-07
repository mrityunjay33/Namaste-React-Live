import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "../Header";
import RestraurantMenu from "../RestraurantMenu";
import { Provider } from "react-redux";
import store from '../../utils/Store';
import { StaticRouter } from'react-router-dom/server';
import "@testing-library/jest-dom";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA);
        },
    });
});

test("Add items to cart", async () => {
    const body = render(
        <StaticRouter>
        <Provider store={store}>
        <Header />
        <RestraurantMenu />
        </Provider>
        </StaticRouter>
    );
    
    await waitFor(() => expect(body.getByTestId("menu")));

    const addBtn = body.getAllByTestId("addBtn");
  
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[2]);
  
    const cart = body.getByTestId("cart");
  
    expect(cart.innerHTML).toBe("Cart - 2 items");
  });
