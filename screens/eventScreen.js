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

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
                Why are you looking for a car?
              </Text>
            </View>
            <View style={styles.bcontainer}>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress(1,0)},400)}
              >
                <Text style={styles.btext}> Event1 </Text>
              </TouchableHighlight>
              
                <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress(2,0)},400)}
              >
                <Text style={styles.btext}> Event2 </Text>
              </TouchableHighlight>

              <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress(3,0)},400)}
              >
                <Text style={styles.btext}> Event3 </Text>
              </TouchableHighlight>

            </View>

            <View style={styles.bcontainer}>

              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress(4,0)},400)}
              >
                <Text style={styles.btext}> Event4 </Text>
              </TouchableHighlight>              
              <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress(5,0)},400)}
              >
                <Text style={styles.btext}> Event5 </Text>
              </TouchableHighlight>
              <Text> </Text>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button}
                onPress={_.debounce(() => {this._onPress(6,0)},400)}
              >
                <Text style={styles.btext}> Other </Text>
              </TouchableHighlight>  
            </View>       

            <View style={styles.buttonContainer}>
              <Button
                title="Go back"
                onPress={_.debounce(() => {this._onPress(0,1)},400)}
              />
            </View>

          </View> 
      ); //End of return
    } //End of render

    _onPress =_.throttle((eventId, bId) =>{ 
      this.state.disabled=true

      if(JSON.stringify(bId)==1)
      {
        this.props.navigation.navigate("Welcome", {disabled:false, eId: eventId })
      }
      
      else
      {    
        this.props.navigation.navigate("Results", {disabled:false, eId: eventId})
      } 
      
    },1000,{leading:true, trailing:false}); //End of button function

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 0
    },

    contentContainer: {
      paddingTop: 40
    },

    bcontainer: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
    },
    
    buttonContainer: {
      paddingBottom: 20,
      paddingTop: 180,
    },

    btext: {
      color: 'white',
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
    }



});