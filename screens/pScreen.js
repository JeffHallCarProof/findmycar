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
      disabled: false
    }

    render() {

      const { navigation } = this.props;
      const min = navigation.getParam('min');
      const max = navigation.getParam('max');

      return (

        <View style={styles.container}>

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
                  this.setState({p1:!this.state.p1, p2: !this.state.p2})
                }
                if(this.state.p2==true)
                {
                  this.setState({p2:!this.state.p2})
                }
                else
                {
                  this.setState({p1: true})
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
                  this.setState({p3:!this.state.p3, p4: !this.state.p4})
                }
                if(this.state.p4==true)
                {
                  this.setState({p4:!this.state.p4})
                }
                else
                {
                  this.setState({p3: true})
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
                  this.setState({p5:!this.state.p5, p6: !this.state.p6})
                }
                if(this.state.p6==true)
                {
                  this.setState({p6:!this.state.p6})
                }
                else
                {
                  this.setState({p5: true})
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
                  this.setState({p7:!this.state.p7, p8: !this.state.p8})
                }
                if(this.state.p8==true)
                {
                  this.setState({p8:!this.state.p8})
                }
                else
                {
                  this.setState({p7: true})
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
                  this.setState({p9:!this.state.p9, p10: !this.state.p10})
                }
                if(this.state.p10==true)
                {
                  this.setState({p10:!this.state.p10})
                }
                else
                {
                  this.setState({p9: true})
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
                  this.setState({p11:!this.state.p11, p12: !this.state.p12,})
                }
                if(this.state.p12==true)
                {
                  this.setState({p12:!this.state.p12,})
                }
                else
                {
                  this.setState({p11: true})
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
                  this.setState({p13:!this.state.p13, p14: !this.state.p14})
                }
                if(this.state.p14==true){
                  this.setState({p14:!this.state.p14})
                }
                else
                {
                  this.setState({p13: true})
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
                  this.setState({p15:!this.state.p15, p16: !this.state.p16})
                }
                if(this.state.p16==true)
                {
                  this.setState({p16:!this.state.p16})
                }
                else
                {
                  this.setState({p15: true})
                }
              }}
            >
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
      if(JSON.stringify(bId)==1)
      {
        this.props.navigation.navigate("Info")
      }
      else
      {
        this.props.navigation.navigate("Results")
      } 
    },1000,{leading:true, trailing:false})

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white'
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
      flexDirection: 'row'
    },

    buttonContainer: {
      paddingBottom: 10,
      paddingTop: 10,
      backgroundColor: 'white',
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
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },

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
    
    buttonS: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      width: 105,
      height: 105
    },
        
    buttonT: {
      alignItems: 'center',
      backgroundColor: '#0018A8',
      width: 120,
      height: 120
    },

    buttonConfirm: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4,
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
    }
      
  });