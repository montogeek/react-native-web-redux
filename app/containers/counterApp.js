'use strict';

import Render from './counterAppRender';

import { Component } from 'react';
import * as counterActions from '../actions/counterActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class counterApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return Render.call(this, this.props)
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(counterApp);