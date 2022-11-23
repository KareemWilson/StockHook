import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from '../Pages/Details';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('home page rendering', () => {
  test('Render home page correctly', () => {
    const homePage = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(homePage).toMatchSnapshot();
  });
});
