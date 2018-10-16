import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
  } from 'react-native';
import _, {debounce} from 'lodash';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

  //preferences screen
  export default class pScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    //p* = path 1-16
    //bs* = buttonState 0-2
    state = {
      text: false,
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
      p7: false,
      p8: false,
      p9: false,
      p10: false,
      p11: false,
      p12: false,
      p13: false,
      p14: false,
      p15: false,
      p16: false,
      bs1: 0,
      bs2: 0,
      bs3: 0,
      bs4: 0,
      bs5: 0,
      bs6: 0,
      bs7: 0,
      bs8: 0
    }
    
    render() {

      const { navigation } = this.props;
      min = navigation.getParam('min');
      max = navigation.getParam('max');
      const eventId = navigation.getParam('eId', 'Invalid');
      const classId = navigation.getParam('cId', 'Invalid');
      numArray = [this.state.bs1,this.state.bs2,this.state.bs3,this.state.bs4,this.state.bs5,this.state.bs6,this.state.bs7,this.state.bs8];

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

          <View style={styles.tContainer}>
            <Text>Preference Assesment</Text>          
          </View>
          <View style={styles.bcontainer}>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p1 && styles.buttonS, this.state.p2 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p1==true)
                {
                  this.setState({p1: false, p2: true,bs1: 2})
                  
                }
                else if(this.state.p2==true)
                {
                  this.setState({p2: false,bs1: 0})
                }
                else
                {
                  this.setState({p1: true,bs1: 1})
                }
              }}
            >
              <Text style={styles.btext}> Comfort </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p3 && styles.buttonS, this.state.p4 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p3==true)
                {
                  this.setState({p3: false, p4: true,bs2: 2})
                }
                else if(this.state.p4==true)
                {
                  this.setState({p4:false, bs2: 0})
                }
                else
                {
                  this.setState({p3: true, bs2: 1})
                }
              }}
            >
              <Text style={styles.btext}>Exterior  Design </Text>
            </TouchableHighlight>
          </View>
            
          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p5 && styles.buttonS, this.state.p6 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p5==true)
                {
                  this.setState({p5:false, p6: true, bs3: 2})
                }
                else if(this.state.p6==true)
                {
                  this.setState({p6:false, bs3: 0})
                }
                else
                {
                  this.setState({p5: true, bs3: 1})
                }
              }}
            >
              <Text style={styles.btext}>Interior  Design </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p7 && styles.buttonS, this.state.p8 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p7==true)
                {
                  this.setState({p7: false, p8: true, bs4: 2})
                }
                else if(this.state.p8==true)
                {
                  this.setState({p8:false, bs4: 0})
                }
                else
                {
                  this.setState({p7: true, bs4: 1})
                }
              }}
            >
              <Text style={styles.btext}> Reliability </Text>
            </TouchableHighlight>
          </View>
            
          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p9 && styles.buttonS, this.state.p10 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p9==true)
                {
                  this.setState({p9: false, p10: true, bs5: 2})
                }
                else if(this.state.p10==true)
                {
                  this.setState({p10: false, bs5: 0})
                }
                else
                {
                  this.setState({p9: true, bs5: 1})
                }
              }}
            >
              <Text style={styles.btext}> Fuel Eco </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p11 && styles.buttonS, this.state.p12 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p11==true)
                {
                  this.setState({p11:false, p12: true, bs6: 2})
                }
                else if(this.state.p12==true)
                {
                  this.setState({p12: false, bs6: 0})
                }
                else
                {
                  this.setState({p11: true, bs6: 1})
                }
              }}
            >
              <Text style={styles.btext}> Fun to Drive </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p13 && styles.buttonS, this.state.p14 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p13==true)
                {
                  this.setState({p13: false, p14: true, bs7: 2})
                }
                else if(this.state.p14==true){
                  this.setState({p14: false, bs7: 0})
                }
                else
                {
                  this.setState({p13: true, bs7: 1})
                }
              }}
            >
              <Text style={styles.btext}> Performance </Text>
            </TouchableHighlight><Text> </Text>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={[styles.button, this.state.p15 && styles.buttonS, this.state.p16 && styles.buttonT]}
              onPress={() =>{
                if(this.state.p15==true)
                {
                  this.setState({p15: false, p16: true, bs8:2})
                }
                else if(this.state.p16==true)
                {
                  this.setState({p16: false, bs8: 0})
                }
                else
                {
                  this.setState({p15: true, bs8: 1})
                }
              }}
            >
              <Text style={styles.btext}> Build Quality </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonContainer}>

            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.buttonConfirm}
              onPress={_.debounce(() => {this._onPress(eventId, classId)},400)}
            >
              <Text style={styles.btext}>FIND MY CAR</Text>
            </TouchableHighlight>

          </View>

          <View style={styles.navContainer}>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.circle} /><Text> </Text>
            <View style={styles.activeNav} />
          </View>

        </View>

      ); //End of return
    } //End of render
   
    // set up functions as below but add debounce
    _onPress =_.throttle((eventId, classId) =>{ 
        alert("Event: " + eventId + "\nClass: " + classId + '\nMin: '+ min + '\nMax: '+ max + "\nPreferences: " + numArray);
        console.log(numArray)
        this.props.navigation.navigate("Results", {nArray: numArray})
    },1000,{leading:true, trailing:false})

    _goBack =_.throttle(() =>{ 
      this.props.navigation.navigate("Class")
    },1000,{leading:true, trailing:false});

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
    },

    tContainer: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingBottom: 40,
      paddingTop: 40
    },

    bcontainer: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row'
    },

    buttonContainer: {
      paddingBottom: 30,
      paddingTop: 10,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    },

    sContainer: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "stretch",
      justifyContent: "center"
    },

    btext: {
      color: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center'
    },

    //Default style of preference buttons, 1st level of preference
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8FCAF3',
      borderRadius: 200,
      width: 90,
      height: 90,
      borderColor: '#1653bc',
      borderWidth: 1
    },
    
    //Styling for 2nd level of preference
    buttonS: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      width: 105,
      height: 105
    },
        
    //Styling for 3rd level of preference
    buttonT: {
      alignItems: 'center',
      backgroundColor: '#0018A8',
      width: 120,
      height: 120
    },

    buttonConfirm: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 340,
      height: 60,
      borderColor: '#1653bc',
      borderWidth: 1
    },

    sliderF: {
      flexDirection:'row',
      justifyContent: 'space-between'
    },

    containerProducts: {
      flexDirection: 'row',
      justifyContent: 'space-between'
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
      paddingTop: 20,
      justifyContent: 'center',
      position: 'absolute',
      bottom: 130,
      left: 170
    },
      
  });