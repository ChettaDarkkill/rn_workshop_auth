import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <ImageBackground
                source={require('./assets/img/bg.png')}
                style={{ flex: 1, flexDirection: 'column' }}>
                {/* Login section */}
                <View
                    style={{
                        backgroundColor: '#FFF3',
                        marginTop: 16,
                        marginLeft: 16,
                        marginRight: 16,
                        paddingTop: 16,
                        paddingLeft: 16,
                        paddingRight: 16,
                        borderRadius: 5,
                    }}>
                    {/* Username section */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            height: 40,
                            width: 40,
                            backgroundColor: 'red',
                            borderRadius: 20,
                            marginRight: 8
                        }} />
                        <TextInput style={{
                            flex: 1,
                            height: 40,
                            borderRadius: 3,
                            borderWidth: 1,
                            borderColor: "#0003",
                            paddingLeft: 8
                        }}
                            placeholder="Username" />
                    </View>

                    {/* Password section */}
                    <View style={{ marginTop: 8, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            height: 40,
                            width: 40,
                            backgroundColor: 'yellow',
                            borderRadius: 20,
                            marginRight: 8
                        }} />
                        <TextInput style={{
                            flex: 1,
                            height: 40,
                            borderRadius: 3,
                            borderWidth: 1,
                            borderColor: "#0003",
                            paddingLeft: 8
                        }}
                            placeholder="Password" />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Button title="Login" />
                    </View>
                    <TouchableOpacity style={{ marginTop: 8, marginBottom: 16, backgroundColor: "#fff4", height: 40, borderTopEndRadius:5, justifyContent: "center" }}>
                        <Text style={{ textAlign: 'center', color: "#0009" }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
