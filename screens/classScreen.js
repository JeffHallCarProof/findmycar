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

// Screen for vehicle class selection
export default class classScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false
    };

    render() {

      const { navigation } = this.props;
      const eventId = navigation.getParam('eId', 'Invalid');
      const minB = navigation.getParam('min', 'Invalid');
      const maxB = navigation.getParam('max', 'Invalid');

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

          <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 30}}>
            <Text style={{ paddingTop: 60, paddingHorizontal: 50, fontWeight: 'bold', fontSize: 20}}>
              Preferred body type
            </Text>
            <Text style={{ paddingHorizontal: 30, paddingTop: 20, textAlign: "center"}}>
              Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle.
            </Text>
          </View>

          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.c1 && styles.buttonT]}
              onPress={() => this.setState({c1: true, c2: false, c3: false, c4: false, c5: false, c6: false})}
            >
              <Text style={styles.btext}> Class1 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.c2 && styles.buttonT]}
              onPress={() => this.setState({c1: false, c2: true, c3: false, c4: false, c5: false, c6: false})}
            >
              <Text style={styles.btext}> Class2 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.c3 && styles.buttonT]}
              onPress={() => this.setState({c1: false, c2: false, c3: true, c4: false, c5: false, c6: false})}
            >
              <Text style={styles.btext}> Class3 </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.bcontainer2}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.c4 && styles.buttonT]}
              onPress={() => this.setState({c1: false, c2: false, c3: false, c4: true, c5: false, c6: false})}
            >
              <Text style={styles.btext}> Class4 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.c5 && styles.buttonT]}
              onPress={() => this.setState({c1: false, c2: false, c3: false, c4: false, c5: true, c6: false})}
            >
              <Text style={styles.btext}> Class5 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.c6 && styles.buttonT]}
              onPress={() => this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: true})}
            >
              <Text style={styles.btext}> Other </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.navContainer}>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.activeNav} /><Text> </Text>
            <View style={styles.circle} />
          </View>

          <View style={styles.button2container}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button2}
              onPress={_.debounce(() => {this._onPress(eventId, minB, maxB)},400)}
            >
              <Text style={styles.btext}> NEXT </Text>
            </TouchableHighlight>
          </View>

        </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle((eventId, minB, maxB) =>{ 
      
      if(this.state.c1 == true){
        classId = 1
      } else if(this.state.c2 == true) {
        classId = 2
      } else if(this.state.c3 == true) {
        classId = 3
      } else if(this.state.c4 == true) {
        classId = 4
      } else if(this.state.c5 == true) {
        classId = 5
      } else {
        classId = 6
      }
      
      this.props.navigation.navigate("Preferences", {disabled:false, cId: classId, eId: eventId, min: minB, max: maxB})
    },1000,{leading:true, trailing:false});

    _goBack =_.throttle(() =>{ 
      this.props.navigation.navigate("Info")
    },1000,{leading:true, trailing:false});

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

    buttonT: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0018A8',
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
      position: "absolute",
      left: 50,
      bottom: 20
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
      bottom: 80,
    },
});