'use strict';

import Render from './counter.native'

export default function() {
  return Render.call(this, this.props, this.state);
}