import React, { Component } from 'react'
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
import { WebBrowser } from 'expo';
import _, {debounce} from 'lodash';
import { LinearGradient } from 'expo';

  //welcome screen
  export default class welcomeScreen extends React.Component {

    constructor(props) {
      super(props);
    }

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    render() {

      const { navigation } = this.props;
      this.timeoutHandle = setTimeout(()=>{this.props.navigation.navigate('Events')}, 2500);
      
      return (

      <View style={styles.welcomeContainer} onTouchStart={this.onPress}>
        <LinearGradient 
          colors={['#2487D2','#1294EF','#65B2EE','#8FCAF3']}
          style={{ flex:1 }}
          justifyContent={'center'}
        >
          <Text style={styles.welcomeText}>Welcome to Find-My-Car by Carfax!</Text>
        </LinearGradient>
      </View>

      ); //End of return
    } //End of render
  } //End of class

  const styles = StyleSheet.create({
    
    welcomeContainer: {
      backgroundColor: '#8FCAF3',
      flex: 1,
      justifyContent: 'center'
    },

    welcomeText: {
      fontWeight: 'bold',
      fontSize: 24,
      color: "#FFFFFF",
      textAlign: 'center',
      paddingLeft: 35,
      paddingRight: 35
    }

  });