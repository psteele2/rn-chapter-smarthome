/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class Lights extends Component {
  render() {
    return (
      <Text>This is the lights app, come back later for functionality</Text>
    );
  }
}

AppRegistry.registerComponent('Lights', () => Lights);
