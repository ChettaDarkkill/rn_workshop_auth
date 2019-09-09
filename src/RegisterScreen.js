import React, { Component } from 'react'
import { Text, View, ImageBackground, TextInput, Button, TouchableOpacity, Image } from 'react-native';

class TV3Entry extends Component {
    render() {
        return (
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
        )
    }
}


export default class RegisterScreen extends Component {
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

                    <TV3Entry />
                    <TV3Entry />

                    {/* Register */}
                    <View style={{ marginTop: 16 }}>
                        <Button title="Register" />
                    </View>
                    {/* Cancel */}
                    <TouchableOpacity style={{ marginTop: 8, marginBottom: 16, backgroundColor: "#fff4", height: 40, borderTopEndRadius: 5, justifyContent: "center" }}>
                        <Text style={{ textAlign: 'center', color: "#0009" }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    resizeMode="contain"
                    source={require("./assets/img/header_react_native.png")} style={{
                        height: 100,
                        width: '100%',
                    }} />
            </ImageBackground>
        );
    }
}
