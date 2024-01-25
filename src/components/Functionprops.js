import React from 'react';

function Functionprops(props) {
  console.log(props)
  return <h1>Function Component Called {props.name}</h1>
}

export default Functionprops;