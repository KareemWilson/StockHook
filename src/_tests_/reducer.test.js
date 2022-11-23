import stockReducer from '../redux/stocks/stocks';

const mockedActionType = 'stockhook/stocks/STOCK_FETCHED/fulfilled';
const mockedStore = {
  stocks: [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      change: 1.47,
      price: 151.65,
      changesPercentage: 0.9788263,
    },
  ],
};

describe('testing Stock Reducer', () => {
  test('stockReducer function works correctly', () => {
    const store = mockedStore;
    const action = {
      type: mockedActionType,
      payload: {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        change: 1.47,
        price: 151.65,
        changesPercentage: 0.9788263,
      },
    };
    expect(stockReducer(store.stocks, action)).toEqual(
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        change: 1.47,
        price: 151.65,
        changesPercentage: 0.9788263,
      },
    );
  });
});
