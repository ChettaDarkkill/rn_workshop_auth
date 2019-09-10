import React, { Component } from "react";
import { Image } from "react-native";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";

import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AppStack = createStackNavigator({
    home:{screen: HomeScreen},
    register:{screen: RegisterScreen},
},{
    initialRouteName: "home"
})

export default createAppContainer(AppStack)