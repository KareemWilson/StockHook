import { configureStore, combineReducers } from '@reduxjs/toolkit';
import stockReducer from './stocks/stocks';
import detailsReducer from './details/details';

const reducer = combineReducers({
  stocks: stockReducer,
  details: detailsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
