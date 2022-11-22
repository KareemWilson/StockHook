/* eslint-disable */

import React, { useEffect } from "react";
import Stock from "./Stock";
import { useSelector, useDispatch } from "react-redux";
import { getStocks } from "../../redux/stocks/stocks";
import { Link } from "react-router-dom";

function Stocks() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="stocks-container d-flex flex-column">
      {stocks.map((stock, index) => (
          <Stock key={stock.symbol} stock={stock} index={index} />
      ))}
    </div>
  );
}

export default Stocks;