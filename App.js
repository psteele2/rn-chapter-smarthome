/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import SplashScreen from './components/SplashScreen';
import Lights from './components/appComponents/Lights';
import { StackNavigator } from 'react-navigation';

export default App = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Lights: {screen: Lights }
});
