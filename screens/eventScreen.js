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
      e1: true,
      e2: false,
      e3: false,
      e4: false,
      e5: false,
      e6: false
    };

    render() {

      const { navigation } = this.props;

      return (
        
        <View style={{flex:1}}>

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
        
          <View style={styles.container}>
          
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ paddingTop: 60, paddingHorizontal: 40, fontWeight: '300', fontSize: 24, textAlign: 'center', lineHeight: 28}}>
                Reason for buying a new car
              </Text>
              <Text style={{ paddingVertical: 20, paddingHorizontal: 20, textAlign: "center", lineHeight: 30, fontSize: 14}}>
                Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et turpizzle.
              </Text>
            </View>

            <View style={styles.bcontainer}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => this.setState({e1: true, e2: false, e3: false, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e1 && styles.btext2]}> Event1 </Text>
              </TouchableHighlight>

              <View style={{paddingHorizontal: 15}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => this.setState({e1: false, e2: true, e3: false, e4: false, e5: false, e6: false})}
                >
                  <Text style={[styles.btext, this.state.e2 && styles.btext2]}> Event2 </Text>
                </TouchableHighlight>
              </View>
              
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => this.setState({e1: false, e2: false, e3: true, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e3 && styles.btext2]}> Event3 </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.bcontainer2}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: true, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e4 && styles.btext2]}> Event4 </Text>
              </TouchableHighlight>

              <View style={{paddingHorizontal: 15}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => this.setState({e1: false, e2: false, e3: false, e4: false, e5: true, e6: false})}
                >
                  <Text style={[styles.btext, this.state.e5 && styles.btext2]}> Event5 </Text>
                </TouchableHighlight>
              </View>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: false, e5: false, e6: true})}
              >
                <Text style={[styles.btext, this.state.e6 && styles.btext2]}> Other </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.navContainer}>
              <View style={styles.navCircles}><View style={styles.activeNav}/></View>
              <View style={styles.navCircles}><View style={styles.circle}/></View>
              <View style={styles.navCircles}><View style={styles.circle}/></View>
              <View style={styles.navCircles}><View style={styles.circle}/></View>
            </View>

            <View style={styles.button2container}>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button2}
                onPress={_.debounce(() => {this._onPress()},400)}
              >
                <Text style={styles.btext3}> NEXT </Text>
              </TouchableHighlight>
            </View>
          
          </View>
        </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle(() =>{
      var eventId

      if(this.state.e1 == true){
        eventId = 1
      } else if(this.state.e2 == true) {
        eventId = 2
      } else if(this.state.e3 == true) {
        eventId = 3
      } else if(this.state.e4 == true) {
        eventId = 4
      } else if(this.state.e5 == true) {
        eventId = 5
      } else {
        eventId = 6
      }

      this.props.navigation.navigate("Info", {eId: eventId})
    },1000,{leading:true, trailing:false}); //End of button function

    _goBack =_.throttle(() =>{ 
      this.props.navigation.navigate("Welcome")
    },1000,{leading:true, trailing:false}); //End of goBack button function

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      alignItems: "center",
      backgroundColor: '#FFFFFF',
      flex: 1
    },

    bcontainer: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
      flexDirection: 'row',
      paddingTop: 20
    },

    bcontainer2: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      flexDirection: 'row'
    },

    btext: {
      color: '#989898',
      alignItems: 'center',
      justifyContent: 'center',
    },

    btext2: {
      color: '#1294EF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    btext3: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      width: 100,
      height: 100,
      borderColor: '#D8D8D8',
      borderWidth: 1,
    },
    
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 94,
      height: 43,
      position: "absolute",
      left: 70,
      bottom: 30
    },
    
    button2container: {
      alignItems: 'flex-end',
      paddingBottom: 50
    },

    navBar: {
      flexDirection: 'row',
      height: 80
    },

    circle: {
      width: 13,
      height: 13,
      borderRadius: 50,
      borderColor: '#D8D8D8',
      borderWidth: 1
    },

    activeNav: {
      width: 13,
      height: 13,
      borderRadius: 50,
      borderColor: '#D8D8D8',
      borderWidth: 1,
      backgroundColor: '#1294EF'
    },

    navContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 72,
      paddingBottom: 35
    },

    navCircles: {
      paddingHorizontal: 4
    }

});