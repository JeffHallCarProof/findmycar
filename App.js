import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import eventScreen from './screens/eventScreen';
import welcomeScreen from './screens/welcomeScreen';
import pScreen from './screens/pScreen';
import infoScreen from './screens/infoScreen';
import resultsScreen from './screens/resultsScreen';
import classScreen from './screens/classScreen';
import testScreen from './screens/testScreen';

const RootStack = createStackNavigator(
  {
    Welcome: welcomeScreen,
    Test: testScreen,
    Events: eventScreen,
    Class: classScreen,
    Info: infoScreen,
    Preferences: pScreen,
    Results: resultsScreen
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}