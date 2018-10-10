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

// Screen for vehicle class selection
export default class classScreen extends React.Component {

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
      const eventId = navigation.getParam('eId', 'Invalid');

      return (

        <View style={styles.container}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
              Select a vehicle class below
            </Text>
          </View>

          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(1, eventId)},400)}
            >
              <Text style={styles.btext}> Class1 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(2, eventId)},400)}
            >
              <Text style={styles.btext}> Class2 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(3, eventId)},400)}
            >
              <Text style={styles.btext}> Class3 </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.bcontainer2}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(4, eventId)},400)}
            >
              <Text style={styles.btext}> Class4 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(5, eventId)},400)}
            >
              <Text style={styles.btext}> Class5 </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress(6, eventId)},400)}
            >
              <Text style={styles.btext}> Other </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonContainer}>
            <Button
                title = 'Go back'
                onPress={_.debounce(() => {this._onPressBack()},400)}
            />
          </View>

        </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle((classId, eventId) =>{ 
      this.state.disabled=true  
      this.props.navigation.navigate("Info", {disabled:false, cId: classId, eId: eventId})
    },1000,{leading:true, trailing:false});

    _onPressBack =_.throttle(() =>{ 
        this.state.disabled=true  
        this.props.navigation.navigate("Events", {disabled:false})
      },1000,{leading:true, trailing:false});

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

    bcontainer2: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
      paddingBottom: 250
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