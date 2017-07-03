/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SmartHome!
        </Text>
        <Text style={styles.instructions}>
          Applications:
        </Text>
        <Text style={styles.instructions}>
          Coffee maker
        </Text>
        <Text style={styles.instructions}>
          Dishwasher
        </Text>
        <Text style={styles.instructions}>
          Washer/dryer
        </Text>
        <Text style={styles.instructions}>
          Thermostat
        </Text>
        <Text style={styles.instructions}>
          House lights
        </Text>
        <Text style={styles.instructions}>
          Security system
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SplashScreen', () => SplashScreen);
