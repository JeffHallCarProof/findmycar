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

  export default class infoScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      disabled: false,
      values: [0, 20000]
    };

    //This function allows the lower and upper bounds of the budget slider to be read and stored in variables
    multiSliderValueChange = (values) => {
      this.setState({values});
    }

    render() { 
      
      const { navigation } = this.props;
      const eventId = navigation.getParam('eId', 'Invalid');
      const classId = navigation.getParam('cId', 'Invalid');
      var min = this.state.values[0];
      var max = this.state.values[1];

      return ( 

        <View style={styles.container}>

          <View style={styles.bcontainer}>
          
            <View style={styles.sliderLabelView3}>
              <Text style={styles.infoText}>Set your budget below</Text>
              <Text style={styles.infoText}>Class: {classId}, Event: {eventId}</Text>
            </View>

            <View style={styles.sliderLabelView}>
              <View style={styles.sliderLabelView2}>
                <Text style={styles.sliderLabel1}>Budget</Text>
              </View>
              <Text style={styles.sliderLabel2}>Minimum: ${this.state.values[0]}</Text>
              <Text style={styles.sliderLabel3}>Maximum: ${this.state.values[1]}</Text>
            </View>

            <View style={styles.sliderView}>
              <MultiSlider
                  values={[this.state.values[0], this.state.values[1]]}
                  sliderLength={250}
                  onValuesChange={this.multiSliderValueChange}
                  min={0}
                  max={20000}
                  step={500}
                  unselectedStyle={{
                    height: 3,
                    backgroundColor: '#E74C3C'
                  }}
                  selectedStyle={{
                    height: 3,
                    backgroundColor: '#39B54A'
                  }}
                  markerStyle={{
                    height: 20,
                    width: 20
                  }}
              />
            </View>

          </View>
          
          <View style={styles.buttonContainer}>

            <Button
              title = 'Go back'
              onPress={_.debounce(() => {this._onPress(eventId, classId, 1, min, max)},400)}
            />
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(eventId, classId, 0, min, max)},400)}
            >
              <Text style={styles.btext}> Confirm </Text>
            </TouchableHighlight>

          </View>
        </View>
        
      ); //End of return
    } //End of render

    // set up functions as below but add debounce
    _onPress =_.throttle((eventId, classId, bId, min, max) =>{ 
      this.state.disabled=true   

      if(JSON.stringify(bId)==1){
        this.props.navigation.navigate('Class')
      } else{
        this.props.navigation.navigate('Preferences', {eId: eventId, cId: classId, min, max})
      }
      
    },1000,{leading:true, trailing:false});

  } //End of class

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 10
    },

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10
    },

    btext: {
      color: 'white'
    },

    buttonContainer: {
      paddingBottom: 30,
      paddingTop: 30,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4,
      borderColor: '#1653bc',
      borderWidth: 1,
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
      paddingTop: 30
    },

    sliderLabelView2: {
      alignItems: "center"
    },

    sliderLabelView3: {
      alignItems: "center",
      paddingBottom: 100,
      paddingLeft: 20,
      paddingRight: 20
    },

    sliderLabel1: {
      fontSize: 18,
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },

    sliderLabel2: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingTop: 10
    },

    sliderLabel3: {
      fontSize: 16,
      fontWeight: 'bold'
    },

    infoText: {
      fontSize: 20,
      fontWeight: 'bold'
    }

  });