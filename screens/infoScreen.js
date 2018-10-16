import React, { Component } from 'react'
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    View
  } from 'react-native';
import _, {debounce} from 'lodash';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

  export default class infoScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      values: [0, 50000]
    };

    //This function allows the lower and upper bounds of the budget slider to be read and stored in variables
    multiSliderValueChange = (values) => {
      this.setState({values});
    }

    render() { 
      
      const { navigation } = this.props;
      const eventId = navigation.getParam('eId', 'Invalid');
      var min = this.state.values[0];
      var max = this.state.values[1];

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

          <View style={styles.bcontainer}>
          
            <View style={styles.sliderLabelView2}>
              <Text style={styles.infoText}>What's your budget?</Text>
            </View>

            <View style={styles.sliderLabelView}>
              <Text style={styles.sliderLabel1}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et turpizzle.</Text>
            </View>

            <View style={styles.sliderView}>
              <MultiSlider
                  values={[this.state.values[0], this.state.values[1]]}
                  sliderLength={250}
                  touchDimensions={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    slipDisplacement: 100
                  }}
                  onValuesChange={this.multiSliderValueChange}
                  min={0}
                  max={100000}
                  step={1000}
                  unselectedStyle={{
                    height: 3,
                    backgroundColor: '#E2E2E2'
                  }}
                  selectedStyle={{
                    height: 3,
                    backgroundColor: '#1294EF'
                  }}
                  markerStyle={{
                    height: 20,
                    width: 20
                  }}
              />
            </View>

            <View style={{paddingTop: 10, flexDirection: "row", paddingBottom: 200}}>
              <View style={{paddingRight: 90}}>
                <Text style={styles.sliderLabel2}>${this.state.values[0]}</Text>
              </View>
              <View style={{paddingLeft: 90}}>
                {this.state.values[1] == 100000?
                <Text style={styles.sliderLabel3}>ANY</Text>:<Text style={styles.sliderLabel3}>${this.state.values[1]}</Text>}
              </View>
              
              
            </View>

          </View>
          
          <View style={styles.navContainer}>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.activeNav} /><Text> </Text>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.circle} />
          </View>

          <View style={styles.buttonContainer}>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(eventId, min, max)},400)}
            >
              <Text style={styles.btext}> NEXT </Text>
            </TouchableHighlight>

          </View>
        </View>
        
      ); //End of return
    } //End of render

    // set up functions as below but add debounce
    _onPress =_.throttle((eventId, min, max) =>{ 

        if (max == 1000000)
        {
          max = 99999999999
        }
        this.props.navigation.navigate('Class', {eId: eventId, min, max})
      
    },1000,{leading:true, trailing:false});

    _goBack =_.throttle(() =>{ 
      this.props.navigation.navigate("Events")
    },1000,{leading:true, trailing:false});

  } //End of class

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
    },

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10
    },

    btext: {
      color: '#FFFFFF'
    },

    buttonContainer: {
      paddingBottom: 30,
      paddingTop: 30,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 100,
      height: 50,
      borderColor: '#1653bc',
      borderWidth: 1,
      position: "absolute",
      right: 40,
      bottom: 50
    },

    inputContainer: {
      alignItems: 'center',
      paddingBottom: 30,
      paddingTop: 30
    },

    inputS: {
      paddingBottom: 15,
      paddingTop: 15,
      paddingLeft: 5,
      paddingRight: 5,
      borderColor: '#246ee5',
      borderWidth: 1,
      width: 175,
      fontSize: 16
    },

    inputBox: {
      paddingTop: 5,
      paddingBottom: 5
    },

    dropDownView: {
      paddingBottom: 15,
      paddingTop: 15,
      borderWidth: 1,
      borderColor: '#246ee5',
      width: 175
    },

    dropDownText: {
      paddingLeft: 5,
      fontSize: 16
    },
    
    dropDownList: {
      width: 175
    },

    optionText: {
      fontSize: 14,
      paddingLeft: 15
    },

    selectedOption: {
      fontWeight: 'bold',
      backgroundColor: '#adb2ba'
    },

    sliderView: {
      paddingTop: 50,
      justifyContent: "center"
      
    },

    sliderLabelView: {
      paddingTop: 10
    },

    sliderLabelView2: {
      alignItems: "center",
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20
    },

    sliderLabel1: {
      fontSize: 16,
      textAlign: "center",
      paddingHorizontal: 10
    },

    infoText: {
      fontSize: 20,
      fontWeight: 'bold'
    },

    navBar: {
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
      justifyContent: 'center',
      position: "absolute",
      bottom: 220,
      right: 160,
    },

  });