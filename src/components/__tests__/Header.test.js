import Header from '../Header';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../utils/Store';
import { StaticRouter } from'react-router-dom/server';

test("Logo should render on loading", () => {
    const header = render(
        <StaticRouter>
        <Provider store={store}>
        <Header />
        </Provider>
        </StaticRouter>
    );

    const logo = header.getAllByTestId('logo');
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});