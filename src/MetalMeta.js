import React from 'react'

function MetalMeta() {
  const metalJson = require('./metal.json');
  const bandCount = Object.keys(metalJson).length;
  return (
    <div>
      <h3>Metal Bands 🤘</h3>
      <p>Bands: {bandCount}</p>
    </div>
  )
}

export default MetalMeta;
