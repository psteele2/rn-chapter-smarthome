import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import smartHome from '../redux/reducers';
import App from './App';

let store = createStore(smartHome);

export default class Container extends Component {
  render() {
    return (
      <View>
        <Provider store={store}>
          <App />
        </Provider>
      </View>
    );
  }
}