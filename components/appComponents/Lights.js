/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, Button } from 'react-native';

lightsOn = false;

export default class Lights extends Component {
  render() {
    return (
      <Text>Control your lights with the toggle below!</Text>
      <Button
        onPress={toggleLights(state.lightsOn)} // is this right? redux way of getting this
        title="On/Off"
        color="#841584"
        accessibilityLabel="Turn lights on or off"
      />
    );
  }
}

AppRegistry.registerComponent('Lights', () => Lights);
