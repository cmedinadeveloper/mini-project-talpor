import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import SignInScreen from '../Screens/SignIn/SignInScreen';

const AppStack = createDrawerNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);
const AuthStack = createStackNavigator(
  { SignIn: SignInScreen },
  {
    headerMode: 'none',
    initialRouteName: 'SignIn',
  }
);

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
