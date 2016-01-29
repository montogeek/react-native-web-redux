'use strict';

import Render from './counterAppRender.native'

export default function() {
  return Render.call(this, this.props, this.state);
}