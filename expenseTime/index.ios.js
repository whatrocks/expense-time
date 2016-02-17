'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Login from './src/containers/Login';

// Todo: Research
import { Provider } from 'react-redux';
// Todo: Research
import configureStore from './src/store/configureStore';

const store = configureStore();

class expenseTime extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('expenseTime', () => expenseTime);
