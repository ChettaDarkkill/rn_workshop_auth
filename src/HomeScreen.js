import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground
                source={require("./assets/img/bg.png")}
                style={{
                    flex: 1,
                    flexDirection: "column"
                }}>
                <View>
                    <Text> HomeScreen </Text>
                </View>
            </ImageBackground>
        );
    }
}
