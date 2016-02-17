'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Login from './src/containers/Login';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

class expenseTime extends Component {
  render() {
    return (
      <Provider store={store}>
          <NavigatorIOS
            style={styles.container}
            navigationBarHidden = {true}
            initialRoute = {{
              title: 'ExpenseTime',
              component: Login
            }}
          />
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
