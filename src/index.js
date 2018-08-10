import React, {Component} from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen'
// import Simple from './Simple'

const App = createStackNavigator({
  Home: { screen: HomeScreen }
});

export default App;
