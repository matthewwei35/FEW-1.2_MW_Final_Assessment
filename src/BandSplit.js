import React from 'react';
import './Band.css';

function Band(props) {
  const { band_name, formed, origin, fans, split } = props;
  return (
    <div className="Band">
      <h1>{band_name}</h1>
      <p>Formed: {formed}</p>
      <p>{origin}</p>
      <p>Fans: {fans}</p>
      <p>Split: {split}</p>
    </div>
  )
}

export default Band;
