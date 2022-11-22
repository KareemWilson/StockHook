/* eslint-disable */

import React from "react";
import Stock from "./Stock";

const arr = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    change: -3.28,
    price: 148.01,
    changesPercentage: -2.168021,
  },
  {
    symbol: "AMD",
    name: "Advanced Micro Devices, Inc.",
    change: -1.11,
    price: 72.46,
    changesPercentage: -1.508768,
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    change: -12.32,
    price: 167.87,
    changesPercentage: -6.8372316,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    change: -1.68,
    price: 92.46,
    changesPercentage: -1.7845764,
  },
  {
    symbol: "F",
    name: "Ford Motor Company",
    change: -0.04,
    price: 13.95,
    changesPercentage: -0.28591824,
  },
  {
    symbol: "CCL",
    name: "Carnival Corporation & plc",
    change: -0.15,
    price: 9.32,
    changesPercentage: -1.5839553,
  },
];

function Stocks() {
  return (
    <div className="stocks-container d-flex f-row bg-primary">
      {arr.map((stock) => (<Stock />))}
    </div>
  );
}

export default Stocks;
