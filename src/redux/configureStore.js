import { configureStore, combineReducers } from '@reduxjs/toolkit';
import stockReducer from './stocks/stocks';

const reducer = combineReducers({
  stocks: stockReducer,
});

const store = configureStore({
  reducer,
});

export default store;
