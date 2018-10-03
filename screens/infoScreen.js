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
  import ModalDropdown from 'react-native-modal-dropdown';

  export default class infoScreen extends React.Component {

    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
      };

    state = {
      disabled: false
    };

    render() { 
      
      const { navigation } = this.props;


      Path='Extras'
      bPath='Home'

      return ( 
        <View style={styles.container}>
          <View style={styles.tContainer}>
          <Text>Budget + Class Selection Screen</Text>
          </View>
          <View style={styles.bcontainer}>
          
            <View style={styles.dropDownView}>
              <ModalDropdown dropdownStyle={styles.dropDownList} textStyle={styles.dropDownText} dropdownTextStyle={styles.optionText} 
              dropdownTextHighlightStyle={styles.selectedOption} defaultValue="Select a year..." 
              options={[
                '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010',
                '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000',
                '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990',
                '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980',                 
              ]}
              />
            </View>
            </View>
          
            <View style={styles.buttonContainer}>
              <Button
                title = 'Go back'
                onPress={_.debounce(() => {this._onPress(1)},400)}
              />
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress(5,0)},400)}
              >
                <Text style={styles.btext}> Confirm </Text>
              </TouchableHighlight>
          </View>
        </View>
      ); //End of return
    } //End of render

    // set up functions as below but add debounce
    _onPress =_.throttle((bId) =>{ 
      this.state.disabled=true   
      if(JSON.stringify(bId)==1){
        this.props.navigation.navigate('Events')
      } else{
        this.props.navigation.navigate('Preferences')
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
    tContainer: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingBottom: 40,
      paddingTop: 80
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
      paddingBottom: 15,
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


  });