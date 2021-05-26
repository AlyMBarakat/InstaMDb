/**
 * 
 * 
 * InstaMDb React Native Mobile Application
 * 
 * 
 */
import 'react-native-gesture-handler';
import React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App;
