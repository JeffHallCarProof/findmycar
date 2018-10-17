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
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

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
      
      return (

        <View style={{flex:1, backgroundColor: '#FFFFFF'}}>

          <NavBar style={styles}>
            <View paddingLeft={120} paddingRight={120} paddingTop={20} paddingBottom={10}>
              <NavTitle>
                {<Image source={require('../assets/CARFAX-Canada.png')}></Image>}
              </NavTitle>
            </View>
          </NavBar>

          <View style={styles.container}>
            <View style={styles.iContainer}>
              <Image source={require('../assets/Guy-Hero.png')}></Image>
            </View>
            

            <Text style={styles.titleText}>Let us find the right car for you.</Text>
            <Text style={styles.contentText}>Lorizzle ipsizzle dolizzle sit amet, sizzle adipiscing elit. Sheezy i saw beyonces tizzles and my pizzle went crizzle velizzle, aliquet volutpizzle, suscipizzle quizzle, gravida vel, boofron.</Text>
            <View style={styles.bContainer}>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress()},400)}
              >
                <Text style={styles.btext}> GET STARTED </Text>
              </TouchableHighlight>
            </View>
          </View>

        </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle(() =>{
      this.props.navigation.navigate("Events")
    },1000,{leading:true, trailing:false}); //End of button function

  } //End of class

  const styles = StyleSheet.create({
    
    container: {
      alignItems: "center",
      justifyContent: "space-between"
    },

    iContainer: {
      paddingTop: 50,
      height: 124,
      width: 208
    },

    navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 80
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 337,
      height: 59
    },

    btext: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19
    },

    titleText: {
      paddingTop: 80,
      paddingBottom: 20,
      fontSize: 24,
      textAlign: "center",
      lineHeight: 28,
      fontWeight: '300'
    },

    contentText: {
      paddingBottom: 80,
      paddingHorizontal: 20,
      fontSize: 14,
      textAlign: "center",
      lineHeight: 30
    },

    bcontainer: {
      flex: 1,
      backgroundColor: '#8FCAF3',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }

  });