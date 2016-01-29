'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Counter from '../components/counter';

export default function (props) {
  const { actions, state } = props
  return (
    <Counter
      counter={state.count}
      {...actions} />
  );
}