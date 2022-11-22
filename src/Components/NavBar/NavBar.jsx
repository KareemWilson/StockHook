import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="nav-container d-flex f-row p-3 fs-2 fw-5 justify-content-between align-items-center">
      <h1 className="m-0">StockHook</h1>
      <FontAwesomeIcon icon={faGear} />
    </div>
  );
}

export default NavBar;
