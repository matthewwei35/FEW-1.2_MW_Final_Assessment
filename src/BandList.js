import React from 'react';
import Band from './Band';
import BandSplit from './BandSplit';
import data from './metal.json';
import './BandList.css';

function BandList() {
  const bands = data.map(( { band_name, formed, origin, fans, split }, i) => {
    if (split === '-') {
      return (
        <Band
          id={i}
          key={band_name}
          band_name={band_name}
          formed={formed}
          origin={origin}
          fans={fans}
        />
      )
    } else {
      return (
        <BandSplit
          id={i}
          key={band_name}
          band_name={band_name}
          formed={formed}
          origin={origin}
          fans={fans}
          split={split}
        />
      )
    }
  })
  return (
    <div className="BandList">
      { bands }
    </div>
  )
}

export default BandList;
