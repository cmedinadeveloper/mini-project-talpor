import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import SignUpScreen from '../Screens/SignUp/SignUpScreen';
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
  { SignIn: SignInScreen, SignUp: SignUpScreen },
  {
    headerMode: 'none',
    initialRouteName: 'SignIn',
  }
);

export default createSwitchNavigator(
  {
    // SplashScreen: SplashScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    // Splash screen should be the initial route
    initialRouteName: 'App',
  }
);
