import Counter from '../components/counter';

'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default function (props) {
  const { actions, state } = props
  return (
    <Counter
      counter={state.count}
      {...actions} />
  );
}