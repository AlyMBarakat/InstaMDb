/**
 * 
 * 
 * InstaMDb React Native Mobile Application
 * 
 * 
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Platform, UIManager } from 'react-native';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router';
import Toast from 'react-native-toast-message';

// allow layout animation on android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental)
  UIManager.setLayoutAnimationEnabledExperimental(true);


const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  )
}

export default App;
