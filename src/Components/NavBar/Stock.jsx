import React from 'react';
import { Link } from 'react-router-dom';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Stock({ stock, index }) {
  const {
    symbol,
    name,
    price,
    changesPercentage,
  } = stock;
  return (
    <Link to={`/${symbol}/${name}`} className={(index % 2 === 0 ? 'stock' : 'darker-stock')}>
      <p className="symbol">{symbol}</p>
      <FontAwesomeIcon className="details-icon" icon={faCircleArrowRight} />
      <p className="name">{name}</p>
      <p className="price">
        Price:
        {' '}
        {price}
      </p>
      <p className="percentage">
        {changesPercentage}
        %
      </p>
    </Link>
  );
}

Stock.propTypes = {
  stock: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.number,
    changesPercentage: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Stock;
