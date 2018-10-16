import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo';
const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;
return (
<Modal
  transparent={true}
  animationType={'none'}
  visible={loading}>
  <View style={styles.modalBackground}>
     <LinearGradient 
        colors={['#65B2EE','#8FCAF3']}
        borderRadius={10}
        justifyContent={'center'}>
            
             
    <View style={styles.activityIndicatorWrapper}>
  
      <ActivityIndicator
        animating={loading}
        size={"large"}
        color={'#FFFFFF'} />
        
    </View></LinearGradient>
    
  </View>
</Modal>






  )
}
const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040',
      borderRadius: 10,
    },
    activityIndicatorWrapper: {
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  });
export default Loader;

