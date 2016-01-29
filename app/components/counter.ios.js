'use strict';

import Render from './counter.native'

import { Component } from 'react';

export default class counter extends Component {
  render() {
    return Render.call(this, this.props, this.state)
  }
}