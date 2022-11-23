import { createAsyncThunk } from '@reduxjs/toolkit';

const DETAILS_FETCHED = 'stockhook/stocks/DETAILS_FETCHED';
const initialState = [];

const getDetailsOfStockFromAPI = async (symbol) => {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=1&apikey=ce82bb18d7fa69ee9a1317f3625a1ab3`,
  );
  const data = await response.json();
  const details = {
    Symbol: data[0].symbol,
    revenue: data[0].revenue,
    grossProfit: data[0].grossProfit,
    costAndExpenses: data[0].costAndExpenses,
    incomeTaxExpense: data[0].incomeTaxExpense,
  };
  return details;
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DETAILS_FETCHED}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const getDetails = createAsyncThunk(DETAILS_FETCHED, async (args) => {
  try {
    return await getDetailsOfStockFromAPI(args);
  } catch (error) {
    return error;
  }
});

export default detailsReducer;
