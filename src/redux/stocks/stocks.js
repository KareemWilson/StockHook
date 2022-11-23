import { createAsyncThunk } from '@reduxjs/toolkit';

const STOCK_FETCHED = 'stockhook/stocks/STOCK_FETCHED';

const initialState = [];

// Calling API
const getStocksFromAPI = async () => {
  const response = await fetch(
    'https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=ce82bb18d7fa69ee9a1317f3625a1ab3',
  );
  const data = await response.json();
  const companies = [];
  for (let i = 0; i < 14; i += 1) {
    companies.push(data[i]);
  }
  return companies;
};

// Reducer
const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${STOCK_FETCHED}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const getStocks = createAsyncThunk(STOCK_FETCHED, async () => {
  try {
    return await getStocksFromAPI();
  } catch (error) {
    return error;
  }
});

export default stockReducer;
