'use strict';

import React from 'react';

import Counter from '../components/counter';

export default function (props) {
  const { actions, state } = props
  return (
      <Counter
        counter={state.count}
        {...actions} />
  );
}