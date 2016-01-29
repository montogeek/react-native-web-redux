'use strict';

import React from 'react';

export default function (props, state) {
  console.log(props)
  console.log(state)
  return (
    <div className='screen'>
      Soy el counterAppRender Web
    </div>
  );
}