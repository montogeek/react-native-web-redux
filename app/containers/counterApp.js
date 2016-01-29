'use strict';

import { Base } from './counterAppBase';
import Render from './counterAppRender';

export default class counterApp extends Base {
  constructor(props) {
    super(props)
  }

  render() {
    return Render.call(this, this.props, this.state)
  }
}