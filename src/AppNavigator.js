import React, { Component } from "react";
import { Image } from "react-native";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import YoutubeScreen from "./YoutubeScreen";
import CameraScreen from "./CameraScreen";
import JSONFeedScreen from "./JSONFeedScreen";

import {
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AuthenStack = createStackNavigator({
    home: { screen: HomeScreen },
    register: { screen: RegisterScreen },
}, {
        initialRouteName: "home"
    })


option1 = {
    tabBarLabel: "Feed",
    tabBarIcon: ({ focused }) => (
        <Image
            style={{
                height: 28,
                width: 28
            }}
            resizeMode="contain"
            source={
                focused
                    ? require("./assets/img/ic_profile_select.png")
                    : require("./assets/img/ic_profile.png")
            }
        />
    )
}

option2 = {
    tabBarLabel: "Camera",
    tabBarIcon: ({ focused }) => (
        <Image
            style={{
                height: 28,
                width: 28
            }}
            resizeMode="contain"
            source={
                focused
                    ? require("./assets/img/ic_card_select.png")
                    : require("./assets/img/ic_card.png")
            }
        />
    )
}

const TabScreens = createBottomTabNavigator({
    json: { screen: JSONFeedScreen, navigationOptions: option1 },
    camera: { screen: CameraScreen, navigationOptions: option2 },
}, {
        initialRouteName: "json"
    })


TabScreens.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = (routeName == "json" ? "JSONTab" : "CameraTab");

    return {
        headerTitle,
        headerStyle: { backgroundColor: '#339CED' },
        headerTitleStyle: { color: "#fff" },

    };
};


const AppStack = createStackNavigator({
    tabs: { screen: TabScreens },
    youtube: { screen: YoutubeScreen },
}, {
        initialRouteName: "tabs"
    })

export default createAppContainer(createSwitchNavigator({
    AuthenScene: AuthenStack,
    AppScene: AppStack
}, {
        initialRouteName: "AuthenScene"
    }))