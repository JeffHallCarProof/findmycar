import React, { Component } from 'react'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ProgressBarAndroid,
    ProgressViewIOS 
  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ProgressBar from 'react-native-progress/Bar';

  const width = 375

  //results screen
  export default class resultsScreen extends React.Component {

    constructor()
    {
        super();
 
        this.state = { 
          
          progress_count: 0 
        
        }

        this.scrollView_width = 0;
 
        this.scrollViewContent_width = 0;
    }
 
    UpdateProgressBar = (progress) =>
    {
      this.setState({ progress_count: Math.abs( progress.nativeEvent.contentOffset.x / ( this.scrollViewContent_width - this.scrollView_width ))});
    }

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    render() {

      const { navigation } = this.props;
  
      return (
            
        <View style={styles.bcontainer}>
          <View style={styles.textView}>
            <Text style={styles.titleText}>Results Screen</Text>
          </View>
               
          <ScrollView horizontal={true} backgroundColor= '#8FCAF3' pagingEnabled={true} 
            onContentSizeChange = {( width, height ) => { this.scrollViewContent_width = width }} 
            onScroll = { this.UpdateProgressBar } 
            onLayout = {(event) => this.scrollView_width = ( event.nativeEvent.layout.width )} 
            scrollEventThrottle = { 12 } showsHorizontalScrollIndicator={false} flex={1}
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

          <View style = { styles.ProgressBar_HolderView }>
          {   
            ( Platform.OS === 'android' )
            ?
              (
                <ProgressBarAndroid
                  styleAttr = "Horizontal"
                  progress = { this.state.progress_count }
                  color = "#fff"
                  indeterminate = { false }
                  style = {{ width: '100%' }}
                />
              )
            :
              (
                <ProgressViewIOS
                  progressTintColor = "#fff"
                  style = {{ width: '100%' }}
                  progress = { this.state.progress_count }
                  borderColor= {'#1653bc'}
                />
              )
          }
            <Text style = { styles.Percentage }> { Math.round( this.state.progress_count * 100 ) }% </Text>
          </View>

          <View style={styles.Progressbutton}>
            <TouchableHighlight
              underlayColor={'#2C74B1'}
              style={styles.button}
              onPress={() => {this.props.navigation.navigate('Events');}}
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
      backgroundColor: 'white',
      paddingHorizontal: 10
    },

    bcontainer: {
      flex: 1,
      backgroundColor: '#8FCAF3',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },

    btext: {
      color: 'white'
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
      flexDirection: 'column',
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      bottom: 0,
      borderColor: '#1653bc',
      borderWidth: 1,
      width: 375,
    },

    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    ProgressBar_HolderView: {
      flexDirection: 'row',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 15,
      paddingLeft: 5,
      paddingRight: 47,
      paddingTop:10,
      backgroundColor: '#8FCAF3',
      height: 45,
      borderTopWidth: 1,
      borderColor: '#1653bc',

    },

    Progressbutton: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: '#8FCAF3',
      height: 45,
    },

    Percentage: {
      position: 'absolute',
      right: 6,
      fontWeight: 'bold',
      color: 'white'
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