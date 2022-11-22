import { createAsyncThunk } from '@reduxjs/toolkit';

const STOCK_FETCHED = 'stockhook/stocks/STOCK_FETCHED';

const initialState = [];

// Calling API
const getStocksFromAPI = async () => {
  //   const response = await fetch(
  //     'https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=ce82bb18d7fa69ee9a1317f3625a1ab3',
  //   );
  //   const data = await response.json();
  const companies = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      change: 1.695,
      price: 149.705,
      changesPercentage: 1.1451979,
    },
    {
      symbol: 'AMD',
      name: 'Advanced Micro Devices, Inc.',
      change: 1.685,
      price: 74.145,
      changesPercentage: 2.3254175,
    },
    {
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      change: 1.4293,
      price: 169.299,
      changesPercentage: 0.85143626,
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com, Inc.',
      change: 0.6158,
      price: 93.0758,
      changesPercentage: 0.66601664,
    },
    {
      symbol: 'F',
      name: 'Ford Motor Company',
      change: 0.11,
      price: 14.06,
      changesPercentage: 0.7885349,
    },
    {
      symbol: 'CCL',
      name: 'Carnival Corporation & plc',
      change: 0.12,
      price: 9.44,
      changesPercentage: 1.2875525,
    },
  ];
  //   for (let i = 0; i < 6; i += 1) {
  //     companies.push(data[i]);
  //   }
  console.log(companies);
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
