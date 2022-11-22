import { createAsyncThunk } from '@reduxjs/toolkit';

const STOCK_FETCHED = 'stockhook/stocks/STOCK_FETCHED';

const initialState = [];

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${STOCK_FETCHED}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default stockReducer;
