import React, { Component } from 'react'
import {
    Image,
    Div,
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
import _, {debounce} from 'lodash';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

// Screen for people who do not know what car they want
export default class eventScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      disabled: false,
    };

    render() {

      const { navigation } = this.props;
      this.state.disabled = navigation.getParam('disabled', false);

      return (
        
        <View style={styles.container}>
          <NavBar style={styles}>
              <View paddingLeft={20}>
                <NavButton onPress={_.debounce(() => {this._goBack()},400)}>
                  {<Image source={require('../assets/Path.png')}></Image>}
                </NavButton>
              </View>
              
              <View paddingLeft={90} paddingRight={120} paddingTop={20} paddingBottom={10}>
                <NavTitle>
                  {<Image source={require('../assets/CARFAX-Canada.png')}></Image>}
                </NavTitle>
              </View>
            </NavBar>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ paddingTop: 30, paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
              Reason for buying a new car
            </Text>
            <Text style={{ paddingTop: 20, paddingBottom: 20, paddingHorizontal: 50}}>
              Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et turpizzle.
            </Text>
          </View>

          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(1)},400)}
            >
              <Text style={styles.btext}> Event1 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(2)},400)}
            >
              <Text style={styles.btext}> Event2 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(3)},400)}
            >
              <Text style={styles.btext}> Event3 </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.bcontainer2}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(4)},400)}
            >
              <Text style={styles.btext}> Event4 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(5)},400)}
            >
              <Text style={styles.btext}> Event5 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(6)},400)}
            >
              <Text style={styles.btext}> Other </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.navContainer}>
            <View style={styles.activeNav} /><Text> </Text>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.circle} />
          </View>

          <View style={styles.button2container}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button2}
              onPress={_.debounce(() => {this._onPress(eventId)},400)}
            >
              <Text style={styles.btext}> NEXT </Text>
            </TouchableHighlight>
          </View>
          

        </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle((eventId) =>{ 
      this.state.disabled=true  
      this.props.navigation.navigate("Class", {disabled:false, eId: eventId})
    },1000,{leading:true, trailing:false}); //End of button function

    _goBack =_.throttle(() =>{ 
      this.state.disabled=true  
      this.props.navigation.navigate("Welcome")
    },1000,{leading:true, trailing:false});

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
    },

    contentContainer: {
      paddingTop: 40
    },

    bcontainer: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
      paddingTop: 20
    },

    bcontainer2: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
      paddingBottom: 100
    },

    btext: {
      color: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      padding: 20,
      paddingHorizontal: 10,
      borderRadius: 4,
      width: 100,
      height: 100,
      borderColor: '#1653bc',
      borderWidth: 1,
    },

    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 100,
      height: 50,
      borderColor: '#1653bc',
      borderWidth: 1,
    },
    
    button2container: {
      alignItems: 'flex-end',
      paddingRight: 50,
      paddingBottom: 50
    },

    navBar: {
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center',
      height: 80
    },

    circle: {
      width: 10,
      height: 10,
      borderRadius: 50,
      borderColor: '#000000',
      borderWidth: 1
    },

    activeNav: {
      width: 10,
      height: 10,
      borderRadius: 50,
      borderColor: '#000000',
      borderWidth: 1,
      backgroundColor: '#1294EF'
    },

    navContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: 'center'
    },


});