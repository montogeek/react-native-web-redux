'use strict';

// import { Base } from './counterAppBase';
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
    return Render.call(this)
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(counterApp);
//
//
//
//
// IT WORKS ON NATIVE
// 'use strict';

// import React, { Component, View, Text } from 'react-native';
// import {bindActionCreators} from 'redux';
// import Counter from '../components/counter';
// import * as counterActions from '../actions/counterActions';
// import { connect } from 'react-redux';

// // @connect(state => ({
// //   state: state.counter
// // }))
// class CounterApp extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { state, actions } = this.props;
//     console.log(this.props)
//     return (
//       <View>
//         <Counter
//           counter={state.count}
//           {...actions} />
//       </View>
//     );
//   }
// }

// export default connect(state => ({
//     state: state.counter
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(counterActions, dispatch)
//   })
// )(CounterApp);