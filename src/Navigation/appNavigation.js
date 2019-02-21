import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import SignInScreen from '../Screens/SignIn/SignInScreen';
import SignUpScreen from '../Screens/SignUp/SignUpScreen';

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
  { SignIn: SignInScreen, SignUp: SignUpScreen },
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
