import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { getStocks } from '../../redux/stocks/stocks';
import Stock from './Stock';

function Stocks({ search }) {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  const filter = stocks.filter((stock) => stock.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="stocks-container d-flex flex-column">
      <FontAwesomeIcon className="chart-icon" icon={faChartSimple} />
      {filter.map((stock, index) => (
        <Stock key={stock.symbol} stock={stock} index={index} />
      ))}
    </div>
  );
}

Stocks.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Stocks;
