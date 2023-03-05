import Header from '../Header';
import { render } from '@testing-library/react';

test("Logo should render on loading", () => {
    const header = render(
        <Header />
    );

    const logo = header.getAllByTestId('logo');
    console.log(logo);
});