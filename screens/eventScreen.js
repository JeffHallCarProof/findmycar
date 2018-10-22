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
      e1: false,
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
              <Text style={{ paddingTop: 60, paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
                Reason for buying a new car
              </Text>
              <Text style={{ paddingTop: 20, paddingBottom: 20, paddingHorizontal: 50, textAlign: "center"}}>
                Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle.
              </Text>
            </View>

            <View style={styles.bcontainer}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: true, e2: false, e3: false, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e1 && styles.btext2]}> Event1 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: true, e3: false, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e2 && styles.btext2]}> Event2 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: true, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e3 && styles.btext2]}> Event3 </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.bcontainer2}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: true, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e4 && styles.btext2]}> Event4 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: false, e5: true, e6: false})}
              >
                <Text style={[styles.btext, this.state.e5 && styles.btext2]}> Event5 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: false, e5: false, e6: true})}
              >
                <Text style={[styles.btext, this.state.e6 && styles.btext2]}> Other </Text>
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
      paddingBottom: 30
    },

    btext: {
      color: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
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
    button2: {
        alignItems: 'center',
        backgroundColor: '#1294EF',
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: '#1653bc',
        borderWidth: 1,
        width: 340,
        height: 60,
    },
    
    button2container: {
      alignItems: 'flex-end',
      paddingBottom: 10
    },

    navBar: {
      flexDirection: 'row',
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
      justifyContent: 'center',
      bottom: 25,
    },


});