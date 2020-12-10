import React from 'react';
import Like from './Like';
import './Band.css';

function Band(props) {
  const { band_name, formed, origin, fans } = props;
  return (
    <div className="Band">
      <h1>{band_name}</h1>
      <p>Formed: {formed}</p>
      <p>{origin}</p>
      <p>Fans: {fans}</p>
      <Like />
    </div>
  )
}

export default Band;
