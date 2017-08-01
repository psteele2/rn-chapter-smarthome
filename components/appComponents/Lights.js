/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View
} from 'react-native';

export default class Lights extends Component {
  render() {
    const { lightsOn, onToggleLights } = this.props;
    return (
      <View>
        <Text>Control your lights with the toggle below!</Text>
        <Button
          // is this right? redux way of getting this
          onPress={onToggleLights}
          title="On/Off"
          color="#841584"
          accessibilityLabel="Turn lights on or off"
        />
        <Text>Lights are { lightsOn ? "on" : "off" }</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Lights', () => Lights);
