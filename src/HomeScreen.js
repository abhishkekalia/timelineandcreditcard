/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import {
  createBottomTabNavigator,
} from 'react-navigation';


import App from './pages/menu'
import BasicExample from './pages/basicExample'
import CustomExample from './pages/customExample'
import DotExample from './pages/dotExample'
import IconExample from './pages/iconExample'
import PressExample from './pages/timelinePressExample'
import OverrideExample from './pages/overrideRenderExample'
import SingleRightExample from './pages/singleRightExample'
import TwoColumnExample from './pages/twoColumnExample'
import RefreshLoadMore from './pages/refreshLoadMoreExample'
import Cardapp from './pages/cardapp';
const HomeScreen = createBottomTabNavigator({
    App: { screen: App },
    BasicExample: { screen: BasicExample },
    CustomExample: { screen: CustomExample },
    DotExample: { screen: DotExample },
    IconExample: { screen: IconExample },
    PressExample: { screen: PressExample },
    RefreshLoadMore: { screen: Cardapp }
});
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
	back: {
		paddingLeft:10,
		fontSize: 20,
		color: 'white',
    textAlign: 'center'
	},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
