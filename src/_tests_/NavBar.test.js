import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  test('Render NavBar correctly', () => {
    const navbar = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(navbar).toMatchSnapshot();
  });
  test('Render the logo in NavBar Correctly', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText(/StockHook/i)).toBeInTheDocument();
  });
});
