/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import SplashScreen from './SplashScreen';
// import Lights from './appComponents/Lights';
import ContainerLights from '../containers/ContainerLights'
import { StackNavigator } from 'react-navigation';

export default App = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  // Lights: {screen: Lights }
  Lights: {screen: ContainerLights}
});
