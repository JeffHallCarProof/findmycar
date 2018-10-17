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
import _, {debounce} from 'lodash';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

  const width = 375

  //results screen
  export default class resultsScreen extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      overall:0,
      budget:0,
      comfort:0,
      fuelEco:0,
      safety:0,
      reliablitiy:0,
      environment:0,
      preformance:0,
      intStyle:0,
      extStyle:0,
      p1: true,
      p2: false,
      p3: false,
      offset: 0,
      i: 0,
      responseJson: [],
    }
    //api call
    async getHelloW(){
      const url = "https://productlab.carfax.ca/findmycar/multi/carcrash/60000/20000/33333333/6";
      try{
      const res = await fetch(url,console.log(url),{
        method:'GET',
        headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
              "type": "select",
              "args": {
                "table": "author",
                "columns": [
                  "Budget",
                  "BuildQualityRating",
                  "ComfortRating",
                  "ExteriorDesignRating",
                  "FuelEconomyRating",
                  "FunToDriveRating",
                  "InteriorDesignRating ",
                  "Make",
                  "Model",
                  "PerformanceRating",
                  "ReliabilityRating",
                  "Score"
                ]
            }
            }),
        })
        const rJson = await res.json();
        const ETC1 = await this.setState({responseJson: rJson});
        const ETC2 = await this.setState({loading: false});
        this.props.navigation.navigate("Results", {nArray: numArray, rJson: this.state.responseJson})
        console.log(this.state.responseJson)
      }catch(err){
        return console.error(err);
      }

    };
    //go back function
    _goBack =_.throttle(() =>{ 
      this.props.navigation.navigate("Preferences")
    },1000,{leading:true, trailing:false});

    



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
      this.state.responseJson = navigation.getParam('rJson');

      return (
            
        <View style={styles.bcontainer}>

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
               
          <ScrollView horizontal={true} backgroundColor= '#FFFFFF' pagingEnabled={true} 
            onMomentumScrollEnd = { this.updateNavbar } bounces = {false}
            scrollEventThrottle = { 12 } showsHorizontalScrollIndicator={false}
          >
            <View style={styles.colContainer}>
              <View style={styles.topContainer}>

                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar.png')}/>
                  <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>{this.state.responseJson[0].Make +" "+ this.state.responseJson[0].Model}</Text>
                </View>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={(this.state.responseJson[0].Comfort_Rating)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}  borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={(this.state.responseJson[0].Fuel_Economy_Rating)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Build Quality </Text>
                <ProgressBar progress={(this.state.responseJson[0].Build_Quality_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={(this.state.responseJson[0].Reliability_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fun </Text>
                <ProgressBar progress={(this.state.responseJson[0].Fun_To_Drive_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={(this.state.responseJson[0].Performance_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View> 
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Interior Style </Text>
                <ProgressBar progress={(this.state.responseJson[0].Interior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Exterior Style </Text>
                <ProgressBar progress={(this.state.responseJson[0].Exterior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={(this.state.responseJson[0].Score/12)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
            </View>
            <View style={styles.colContainer}>
              <View style={styles.topContainer}>

                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar2.png')}/>
                  <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>{this.state.responseJson[1].Make +" "+ this.state.responseJson[1].Model}</Text>
                </View>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={(this.state.responseJson[1].Comfort_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={(this.state.responseJson[1].Fuel_Economy_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Build Quality </Text>
                <ProgressBar progress={(this.state.responseJson[1].Build_Quality_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={(this.state.responseJson[1].Reliability_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fun </Text>
                <ProgressBar progress={(this.state.responseJson[1].Fun_To_Drive_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={(this.state.responseJson[1].Performance_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Interior Style </Text>
                <ProgressBar progress={(this.state.responseJson[1].Interior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Exterior Style </Text>
                <ProgressBar progress={(this.state.responseJson[1].Exterior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={(this.state.responseJson[1].Score/12)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>


            </View> <View style={styles.colContainer}>
              <View style={styles.topContainer}>

                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar3.png')}/>
                  <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>{this.state.responseJson[2].Make +" "+ this.state.responseJson[2].Model}</Text>
                </View>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={(this.state.responseJson[2].Comfort_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={(this.state.responseJson[2].Fuel_Economy_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Build Quality </Text>
                <ProgressBar progress={(this.state.responseJson[2].Build_Quality_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={(this.state.responseJson[2].Reliability_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fun </Text>
                <ProgressBar progress={(this.state.responseJson[2].Fun_To_Drive_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={(this.state.responseJson[2].Performance_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Interior Style </Text>
                <ProgressBar progress={(this.state.responseJson[2].Interior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Exterior Style </Text>
                <ProgressBar progress={(this.state.responseJson[2].Exterior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={(this.state.responseJson[2].Score/12)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
            </View>
            <View style={styles.colContainer}>
              <View style={styles.topContainer}>

                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar.png')}/>
                  <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>{this.state.responseJson[3].Make +" "+ this.state.responseJson[3].Model}</Text>
                </View>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={(this.state.responseJson[3].Comfort_Rating)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={(this.state.responseJson[3].Fuel_Economy_Rating)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Build Quality </Text>
                <ProgressBar progress={(this.state.responseJson[3].Build_Quality_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={(this.state.responseJson[3].Reliability_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fun </Text>
                <ProgressBar progress={(this.state.responseJson[3].Fun_To_Drive_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={(this.state.responseJson[3].Performance_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View> 
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Interior Style </Text>
                <ProgressBar progress={(this.state.responseJson[3].Interior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Exterior Style </Text>
                <ProgressBar progress={(this.state.responseJson[3].Exterior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={(this.state.responseJson[3].Score/12)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
            </View>
            <View style={styles.colContainer}>
              <View style={styles.topContainer}>

                <View style={styles.images}>
                  <Image source={require('../assets/sampleCar.png')}/>
                  <View style={styles.carTitleContainer}>
                  <Text style={styles.carTitle}>{this.state.responseJson[4].Make +" "+ this.state.responseJson[4].Model}</Text>
                </View>
                </View>
              </View>
              
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Comfort </Text>
                <ProgressBar progress={(this.state.responseJson[4].Comfort_Rating)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fuel Economy </Text>
                <ProgressBar progress={(this.state.responseJson[4].Fuel_Economy_Rating)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Build Quality </Text>
                <ProgressBar progress={(this.state.responseJson[4].Build_Quality_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Reliability </Text>
                <ProgressBar progress={(this.state.responseJson[4].Reliability_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Fun </Text>
                <ProgressBar progress={(this.state.responseJson[4].Fun_To_Drive_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Performance </Text>
                <ProgressBar progress={(this.state.responseJson[4].Performance_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View> 
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Interior Style </Text>
                <ProgressBar progress={(this.state.responseJson[4].Interior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Exterior Style </Text>
                <ProgressBar progress={(this.state.responseJson[4].Exterior_Design_Rating )} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.colText}> Overall </Text>
                <ProgressBar progress={(this.state.responseJson[4].Score/12)} unfilledColor={'#ECECEC'} color={'#1294EF'} height={12} width={200}   borderRadius={10}/>
              </View>
            </View>

          </ScrollView>

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
      backgroundColor: '#F9F9F9',
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
      borderColor: '#F9F9F9',
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
      color: '#000000',
      fontSize: 18,
      paddingBottom: 5,
    },

    titleText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },

    textView: {
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: '#8FCAF3',
    },

    images: {
      width: 310,
      height: 205,
      borderWidth: 2,
      borderColor: '#CFCFD1',
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
    },

    carTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#000000',
      textAlign: 'center',
      paddingBottom: 5,
    },

    carTitleContainer: {
      paddingBottom: 0,
    },

    topContainer: {
      alignItems: 'center',
      paddingBottom: 40
    },
    navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 80
    }
});