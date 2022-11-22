import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetails } from '../redux/details/details';

function Details() {
  const { symbol } = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(symbol));
  }, [dispatch]);

  return (
    <div className="details-container">
      {Object.keys(details).map((field) => (
        <div key={field} className="detail-field d-flex flex-row justify-content-between px-3 bg-primary align-items-center">
          <p>{field}</p>
          <p>{details[field]}</p>
        </div>
      ))}
    </div>
  );
}

export default Details;
