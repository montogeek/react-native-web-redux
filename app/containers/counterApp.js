// 'use strict';

// import { Base } from './counterAppBase';
// import Render from './counterAppRender';

// export default class counterApp extends Base {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return Render.call(this, this.props, this.state)
//   }
// }
//
//
'use strict';

import React, { Component, View, Text } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    console.log(this.props)
    return (
      <View>
        <Text>Hi</Text>
        <Counter
          counter={state.count}
          {...actions} />
      </View>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);