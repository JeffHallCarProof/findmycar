import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
  } from 'react-native';
import _, {debounce} from 'lodash';

  //preferences screen
  export default class pScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      text: false,
      p1: false,
      v1: 0,
      p2: false,
      v2: 0,
      p3: false,
      v3: 0,
      p4: false,
      v4: 0,
      p5: false,
      v5: 0,
      p6: false,
      v6: 0,
      p7: false,
      v7: 0,
      p8: false,
      v8: 0,
      p9: false,
      v9: 0,
      p10: false,
      v10: 0,
      p11: false,
      v11: 0,
      p12: false,
      v12: 0,
      value: 0.01,
      disabled: false
    }

    render() {

      const { navigation } = this.props;

        Path ='Results'
        bPath ='Info'


      return (
        <View style={styles.container}>

        <View style={styles.tContainer}>
          <Text>Preference Assesment</Text>
        </View>
          <View style={styles.bcontainer}>
            <TouchableHighlight
                selected={this.state.p1}
                selectedN={this.state.v1}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p1 && styles.buttonS]}
                onPress={() => this.setState({ p1: !this.state.p1,
                value: this.state.v1,
                text: !this.state.p1,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
                <Text style={styles.btext}> Comfort </Text>
            </TouchableHighlight>
            <Text> </Text>
            <TouchableHighlight
                selected={this.state.p2}
                selectedN={this.state.v2}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p2 && styles.buttonS]}
                onPress={() => this.setState({ p2: !this.state.p2,
                value: this.state.v2,
                text: !this.state.p2,
                p1: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
                <Text style={styles.btext}> Exterior Design </Text>
            </TouchableHighlight>
            <Text> </Text>
            <TouchableHighlight
                selected={this.state.p3}
                selectedN={this.state.v3}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p3 && styles.buttonS]}
                onPress={() => this.setState({ p3: !this.state.p3,
                value: this.state.v3,
                text: !this.state.p3,
                p2: false,
                p1: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
                <Text style={styles.btext}> Interior Design </Text>
            </TouchableHighlight>
            </View>
            
            <View style={styles.bcontainer}>
            <TouchableHighlight
                selected={this.state.p4}
                selectedN={this.state.v4}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p4 && styles.buttonS]}
                onPress={() => this.setState({ p4: !this.state.p4,
                value: this.state.v4,
                text: !this.state.p4,
                p2: false,
                p3: false,
                p1: false,
                p5: false,
                p6: false,
                p7: false,
                p8: false})}>
                <Text style={styles.btext}> Reliability </Text>
            </TouchableHighlight>
            <Text> </Text>
            <TouchableHighlight
                selected={this.state.p5}
                v5={this.state.v5}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p5 && styles.buttonS]}
                onPress={() => this.setState({ p5: !this.state.p5,
                value: this.state.v5,
                text: !this.state.p5,
                p2: false,
                p3: false,
                p4: false,
                p1: false,
                p6: false,
                p7: false,
                p8: false})}>
                <Text style={styles.btext}> Fuel Eco </Text>
            </TouchableHighlight>
            <Text> </Text>
            <TouchableHighlight
                selected={this.state.p6}
                selectedN={this.state.v6}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p6 && styles.buttonS]}
                onPress={() => this.setState({ p6: !this.state.p6,
                value: this.state.v6,
                text: !this.state.p6,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p1: false,
                p7: false,
                p8: false})}>
                <Text style={styles.btext}> Fun to Drive </Text>
            </TouchableHighlight>
            </View>

            <View style={styles.bcontainer}>
            <TouchableHighlight
                selected={this.state.p7}
                selectedN={this.state.v7}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p7 && styles.buttonS]}
                onPress={() => this.setState({ p7: !this.state.p7,
                value: this.state.v7,
                text: !this.state.p7,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p1: false,
                p8: false})}>
                <Text style={styles.btext}> Performance </Text>
            </TouchableHighlight>
            <Text> </Text>
            <TouchableHighlight
                selected={this.state.p8}
                selectedN={this.state.v8}
                underlayColor={'#0018A8'}
                style={[styles.button, this.state.p8 && styles.buttonS]}
                onPress={() => this.setState({ p8: !this.state.p8,
                value: this.state.v8,
                text: !this.state.p8,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
                p7: false,
                p1: false})}>
                <Text style={styles.btext}> Build Quality </Text>
            </TouchableHighlight>
            </View>

          <View style={styles.buttonContainer}>
            <Button
             title="Go back"
             onPress={_.debounce(() => {this._onPress(bId=1)},400)}
            />
            <Text></Text>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.buttonConfirm}
              onPress={_.debounce(() => {this._onPress(bId=0)},400)}
            >
            <Text style={styles.btext}>Confirm</Text>
            </TouchableHighlight>
          </View>

        </View>      
      ); //End of return
    } //End of render
   
    // set up functions as below but add debounce
    _onPress =_.throttle((bId) =>{ 
      this.state.disabled=true   
      if(JSON.stringify(bId)==1){

          this.props.navigation.navigate(bPath)

        
      }
      else{
        this.props.navigation.navigate(Path)
      } 
    },1000,{leading:true, trailing:false})

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    tContainer: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingBottom: 40,
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
      paddingBottom: 15,
      paddingTop: 30,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
    },

    sContainer: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "stretch",
      justifyContent: "center"
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
      borderRadius: 4,
      width: 115,
      height: 100,
      borderColor: '#1653bc',
      borderWidth: 1,
    },
    
    buttonS: {
      alignItems: 'center',
      backgroundColor: '#0018A8',
    },

    buttonConfirm: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4,
      borderColor: '#1653bc',
      borderWidth: 1,
    },

    sliderF: {
      flexDirection:'row',
      justifyContent: 'space-between'
    },

    containerProducts: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
      
  });