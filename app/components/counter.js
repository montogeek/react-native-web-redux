import React from 'react';

export default function(props) {
  const { counter, increment, decrement } = props;

  return (
    <div className="screen">
      <p>{counter}</p>
      <button onClick={increment}>up</button>
      <button onClick={decrement}>down</button>
    </div>
  );
}