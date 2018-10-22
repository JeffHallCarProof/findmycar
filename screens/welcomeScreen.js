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
            </View>
          <View style={styles.container}>
            <Text style={styles.titleText}>Let us find the right car for you.</Text>
            <Text style={styles.contentText}>Lorizzle ipsizzle dolizzle sit amet, sizzle adipiscing elit. Sheezy i saw beyonces tizzles and my pizzle went crizzle velizzle, aliquet volutpizzle, suscipizzle quizzle, gravida vel, boofron.</Text>
          </View>
           <View style={styles.buttonContainer}>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress()},400)}
              >
                <Text style={styles.btext}> GET STARTED </Text>
              </TouchableHighlight>
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
      alignItems: "center",
      paddingTop: 30,
      height: 220,
      width: 200
    },

    navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 80
    },
    btext: {
      color: "#FFFFFF"
    },

    titleText: {
      paddingBottom: 20,
      fontSize: 24
    },

    contentText: {
      paddingBottom: 100,
      paddingHorizontal: 20,
      fontSize: 16,
      textAlign: "center"
    },
    buttonContainer: {
      paddingBottom: 10,
      paddingTop: 30,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#1294EF',
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: '#1653bc',
        borderWidth: 1,
        width: 340,
        height: 60,
      
    },
  });