import React, { Component } from 'react'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProgressBar from 'react-native-progress/Bar';

  const width = 375

  //results screen
  export default class resultsScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      overall:0.9,
      comfort:0,
      fuelEco:0,
      safety:0,
      reliablitiy:0,
      environment:0,
      preformance:0,
      style:0,
      cargoSpace:0,
      p1: true,
      p2: false,
      p3: false,
      offset: 0
    }
    
    getHelloW(){
      const url = "https://productlab.carfax.ca/findmycar/";
      fetch(url,console.log(url),{
        method:'GET',
        headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        })
        .then((response)=> response.json())
        .then((responseJson)=> console.log(responseJson))
        .catch((err)=>{console.error(err)})
    };

    updateNavbar = (event) =>
    {
      
      const currentOffset = event.nativeEvent.contentOffset.x;
      const dif = currentOffset - (this.offset || 0);
      var direction;

      if (dif < 0) {
        //console.log('left');
        direction = "left"
      } else {
        //console.log('right');
        direction = "right"
      }
      this.offset = currentOffset;

      //User scrolling right conditions:
      //If first page is active, and the user is scrolling right: set the second page to active
      if(this.state.p1 == true && this.state.p2 == false && this.state.p3 == false && direction == "right")
      {
        this.setState({p1: false, p2: true, p3: false})
      }
      //If the second page is active, and the user is scrolling right: set the third page to active
      else if(this.state.p2 == true && this.state.p1 == false && this.state.p3 == false && direction == "right")
      {
        this.setState({p1: false, p2: false, p3: true})
      }

      //User scrolling left conditions:
      //If the third page is active, and the user is scrolling left: set the second page to active
      if(this.state.p3 == true && this.state.p1 == false && this.state.p2 == false && direction == "left")
      {
        this.setState({p2: true, p1: false, p3: false})
      }
      //If the second page is active, and the user is scrolling left: set the first page to active
      else if(this.state.p2 == true && this.state.p1 == false && this.state.p3 == false && direction == "left")
      {
        this.setState({p1: true, p2: false, p3: false})
      }
    }


    render() {

      const { navigation } = this.props;
      this.state.overall = 0.9;

      return (
            
        <View style={styles.bcontainer}>
          <View style={styles.textView}>
            <Text style={styles.titleText}>Results Screen</Text>
          </View>
               
          <ScrollView horizontal={true} backgroundColor= '#8FCAF3' pagingEnabled={true} 
            onMomentumScrollEnd = { this.updateNavbar } bounces = {false}
            scrollEventThrottle = { 12 } showsHorizontalScrollIndicator={false}
          >
            <View style={styles.colContainer}>
              <View style={styles.topContainer}>
                <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>Car title</Text>
                </View>
                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar.png')}/>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={0.5} unfilledColor={'#c8c9d1'} color={'#0018A8'} height={18}  borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={1} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Safety </Text>
                <ProgressBar progress={0.1} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={0.7} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Environment </Text>
                <ProgressBar progress={0.45} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={0.65} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Style </Text>
                <ProgressBar progress={0.8} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Cargo Space </Text>
                <ProgressBar progress={0.3} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={this.state.overall} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
            </View>

            <View style={styles.colContainer}>
              <View style={styles.topContainer}>
                <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>Car title</Text>
                </View>
                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar.png')}/>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={0.5} unfilledColor={'#c8c9d1'} color={'#0018A8'} height={18}  borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={1} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Safety </Text>
                <ProgressBar progress={0.1} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={0.7} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Environment </Text>
                <ProgressBar progress={0.45} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={0.65} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Style </Text>
                <ProgressBar progress={0.8} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Cargo Space </Text>
                <ProgressBar progress={0.3} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={0.9} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
            </View>

            <View style={styles.colContainer}>
              <View style={styles.topContainer}>
                <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>Car title</Text>
                </View>
                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar.png')}/>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={0.5} unfilledColor={'#c8c9d1'} color={'#0018A8'} height={18}  borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={1} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Build Quality </Text>
                <ProgressBar progress={0.1} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={0.7} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Exterior Design </Text>
                <ProgressBar progress={0.45} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={0.65} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Interior Design </Text>
                <ProgressBar progress={0.8} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fun to Drive </Text>
                <ProgressBar progress={0.3} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={0.9} unfilledColor={'#c8c9d1'} height={18} color={'#0018A8'} borderRadius={4}/>
              </View>

            </View>

          </ScrollView>

          <View style={styles.navContainer}>
            <View style={[styles.circle, this.state.p1 && styles.activeNav]} /><Text> </Text>
            <View style={[styles.circle, this.state.p2 && styles.activeNav]} /><Text> </Text>
            <View style={[styles.circle, this.state.p3 && styles.activeNav]} />
          </View>

          <View style={styles.Progressbutton}>
            <TouchableHighlight
              underlayColor={'#2C74B1'}
              style={styles.button}
              onPress={() => {this.getHelloW()}}
            >
              <Text style={styles.btext}>Home</Text>
            </TouchableHighlight>
          </View> 
        </View>

        ); //End of return
    } //End of render
} //End of class

//Component css
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 10
    },

    bcontainer: {
      flex: 1,
      backgroundColor: '#8FCAF3',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },

    btext: {
      color: '#FFFFFF'
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      padding: 10,
      borderRadius: 4,
      borderColor: '#1653bc',
      borderWidth: 1,
    },

    colContainer: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      borderColor: '#1653bc',
      borderWidth: 1,
      width: 375,
    },

    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    Progressbutton: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#8FCAF3',
      height: 45,
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
      backgroundColor: '#FFFFFF'
    },

    navContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 10,
    },
    
    colText: {
      textAlign: 'center',
      justifyContent: 'space-between',
      color: '#FFFFFF',
      fontSize: 18,
      paddingBottom: 5,
    },

    titleText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },

    textView: {
      paddingTop: 50,
      paddingBottom: 20,
      backgroundColor: '#8FCAF3',
    },

    images: {
      width: 310,
      height: 185,
      borderWidth: 2,
      borderColor: '#1653bc',
      borderRadius: 4,
    },

    carTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFFFFF',
      textAlign: 'center',
      paddingBottom: 5,
    },

    carTitleContainer: {
      paddingBottom: 0,
    },

    topContainer: {
      alignItems: 'center',
      paddingBottom: 40
    }
    
});