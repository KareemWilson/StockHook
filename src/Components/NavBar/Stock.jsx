/* eslint-disable */

import React from "react";
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Stock() {
  return <div className="stock">
    <p className="symbol">symbol</p>
    <FontAwesomeIcon className="details-icon" icon={faCircleArrowRight} />
    <p className="name">Name of company</p>
    <p className="price">Price</p>
    <p className="percentage">percentage</p>
  </div>;
}

export default Stock;
