import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getDetails } from '../redux/details/details';

function Details() {
  const { symbol, name } = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(symbol));
  }, [dispatch]);

  return (
    <div className="details-container d-flex flex-column align-items-center ">
      <Link to="/">
        <FontAwesomeIcon className="back-icon" icon={faArrowLeft} />
      </Link>
      <p className="name-of-company-in-details">{name}</p>
      <div className="details">
        {Object.keys(details).map((field) => (
          <div
            key={field}
            className="detail-field d-flex flex-row justify-content-between px-3 align-items-center"
          >
            <p className="field-name">{field}</p>
            <p className="field-data">{details[field]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
