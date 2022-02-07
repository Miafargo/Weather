import React from "react";
import { Link } from "react-router-dom";
const City = ({ id, name, state, country }) => {
  const statePresent = state.length > 0;
  return (
    <article className='city'>
      <div className='city-info'>
        <h3 className='country-color'>{country}</h3>
        {statePresent && <h4 className='state-color'>{state}</h4>}
        <h4 className='city-color'>{name}</h4>
        <div className='single-city'>
          <Link to={`/city/${id}`} className='detail'>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default City;
