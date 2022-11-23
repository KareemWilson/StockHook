import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="nav-container d-flex f-row p-3 fs-2 fw-5 justify-content-between align-items-center">
      <h1 className="m-0 px-5">StockHook</h1>
      <div className="icons">
        <FontAwesomeIcon className="px-1" icon={faMicrophone} />
        <FontAwesomeIcon className="px-1" icon={faGear} />
      </div>
    </div>
  );
}

export default NavBar;
