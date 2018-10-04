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

const RootStack = createStackNavigator(
  {
    Welcome: welcomeScreen,
    Events: eventScreen,
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