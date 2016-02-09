import React from 'react';

export default function(props) {
  const { counter, increment, decrement } = props;

  return (
    <div style={styles.containerStyle}>
      <p style={styles.value}>{counter}</p>
      <button style={styles.buttonStyle} onClick={increment}>up</button>
      <button style={styles.buttonStyle} onClick={decrement}>down</button>
    </div>
  );
}

const styles = {
  'containerStyle': {
    margin: '0 auto',
    width: '200px',
    textAlign: 'center',
    marginTop: '200px'
  },

  'value': {
    fontSize: '20px',
  },

  'buttonStyle': {
    padding: '15px 20px',
    border: 0,
    borderRadius: '5px',
    backgroundColor: '#cc7a6f',
    color: '#fafafa',
    marginRight: '5px',
    cursor: 'pointer'
  }
}